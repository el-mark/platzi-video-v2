import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import ModalContainer from '../../widgets/conatiners/modal-container';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPLayer from '../../player/containers/video-player'; 
import MyPlaylist from '../../myplaylist/containers/my-playlist';
import { connect } from 'react-redux';


class Home extends Component {
    state = {
        modalVisible: false,
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media
        })
    }
    handleCloseModal = () => {
        this.setState({
            modalVisible: false,
        })
    }
    render() {
        return (
            <HandleError>
                <HomeLayout>
                    <Related>
                        <MyPlaylist
                            myplaylist={this.props.myplaylist}
                            openModal={this.handleOpenModal}
                        />
                    </Related>
                    <Categories 
                        categories={this.props.categories} 
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                    />
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal
                                handleClick={this.handleCloseModal}
                            >
                                <VideoPLayer 
                                    autoplay
                                    src={this.state.media.src}
                                    title={this.state.media.title}
                                />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

function mapStateToProps(state, props){
    return{
        categories: state.data.categories,
        myplaylist: state.myplaylist,
        search: state.search
    }
}

export default connect(mapStateToProps)(Home);