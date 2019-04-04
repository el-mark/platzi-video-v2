import React, { Component } from 'react';
import MyPlaylistLayout from '../components/my-playlist-layout';
import MyPlaylistItems from '../components/my-playlist-items';

class MyPlaylist extends Component {

    render() {
        return(
            <MyPlaylistLayout>
                <MyPlaylistItems 
                    myplaylist={this.props.myplaylist}
                />
            </MyPlaylistLayout>
        )
    }

}

export default MyPlaylist