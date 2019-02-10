import React, { Component } from 'react';

class Media extends Component {
    render() {
        const styles = {
            container: {
                color: '#44546b',
                cursor: 'poiner',
                width: 260,
                border: '1px solid red'
            }
        }
        return (
            <div style={styles.container}>
                <div>
                    <img 
                        src="./images/covers/bitcoin.jpg"
                        alt=""
                        width={260}
                        height={160}    
                    />
                    <h3>¿Por que aprender react? ...</h3>
                    <p>LeonidasEsteban</p>
                </div>
            </div>
        )
    }
}

export default Media;