import React from 'react';
import MyPlaylistItem from './my-playlist-item';

function MyPlaylistItems(props) {
    return(
        <ol>
            {/* { props.myplaylist.myplaylist[0].id } */}
            {
                props.myplaylist.myplaylist.map((item) => {
                        return(
                            <MyPlaylistItem
                                {...item}
                                key={item.id}
                            />
                        )    
                })
            }
        </ol>
    )
}

export default MyPlaylistItems