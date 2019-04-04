import React, { PureComponent } from 'react';
import './my-playlist-item.css';

// function MyPlaylistItem(props) {
//     return(
//         <li className="MyPlaylistItem" onClick="">
//             { props.title }
//         </li>
//     )
// }

class MyPlaylistItem extends PureComponent {

    handleClick = (event) => {
        console.log('handleClick');
        this.props.openModal(this.props);
    }

    render(){
        return(
            <li className="MyPlaylistItem" onClick={this.handleClick}>
                { this.props.title }
            </li>
        )
    }
}

export default MyPlaylistItem