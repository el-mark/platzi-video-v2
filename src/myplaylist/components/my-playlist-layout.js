import React from 'react';
import './my-playlist-layout.css';

function MyPlaylistLayout(props) {
    return(
        <div>
            <h2 className="MyPlaylist">My Playlist</h2>
            { props.children }
            
        </div>
    )
}

export default MyPlaylistLayout