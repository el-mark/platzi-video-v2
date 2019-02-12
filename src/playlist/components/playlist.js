import React, { Component } from 'react';
import Media from './media';
import './playlist.css';

class Playlist extends Component {
    render() {
        const playlistD = this.props.data.categories[0].playlist
        const playlistP = this.props.data.categories[1].playlist
        const playlistR = this.props.data.categories[2].playlist
        console.log(this.props.data)
        return (
            <div>
                <span>Lo mejor de la semana</span>
                <h2>Destacados</h2>
                <div className="Playlist">
                    {
                        playlistD.map((item) => {
                            return <Media {...item} key={item.id}/>
                        })
                    }
                </div>
                <span>Lo mejor para compartir</span>
                <h2>Para Programar</h2>
                <div className="Playlist">
                    {
                        playlistP.map((item) => {
                            return <Media {...item} key={item.id}/>
                        })
                    }
                </div>
                <span>Si no te queda de otra</span>
                <h2>Regueton</h2>
                <div className="Playlist">
                    {
                        playlistR.map((item) => {
                            return <Media {...item} key={item.id}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Playlist;