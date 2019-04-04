import React from 'react';
import './my-playlist-item.css';

function MyPlaylistItem(props) {
    return(
        <li className="MyPlaylistItem">
            { props.title }
        </li>
    )
}

export default MyPlaylistItem