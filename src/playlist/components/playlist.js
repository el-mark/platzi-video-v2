import React from 'react';
import Media from './media';
import './playlist.css';

function Playlist(props) {
    return (
        <div>
            <div className="Playlist">
                {
                    props.playlist.map((item) => {
                        return <Media {...item} key={item.id}/>
                    })
                }
            </div>
        </div>
    )
}

export default Playlist;