import React from 'react';
import Playlist from '../../playlist/components/playlist';

function Category(props) {
    return (
        <div>
            <span>{props.description}</span>
            <h2>{props.title}</h2>
            <Playlist playlist={props.playlist} />
        </div>
    )
}

export default Category;