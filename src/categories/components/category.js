import React from 'react';
import Playlist from '../../playlist/components/playlist';
import './category.css';

function Category(props) {
    return (
        <div className="Category">
            <span className="Category-description">{props.description}</span>
            <h2 className="Category-title">{props.title}</h2>
            <Playlist playlist={props.playlist} />
        </div>
    )
}

export default Category;