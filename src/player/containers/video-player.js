import React, { Component } from 'react';
import VideoPlayerLayout from '../component/video-player-layout';
import Video from '../component/video';
import Title from '../component/title';
import PlayPause from '../component/play-pause';
import Timer from '../component/timer';
import Controls from '../component/video-player-controls';
import { formatTime } from '../component/utilities';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: "00:00",
        currentTime: "00:00",
    }
    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }
    componentDidMount() {
        this.setState({
            pause: !this.props.autoplay
        })
    }
    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: formatTime(this.video.duration)
        })
    }
    handleTimeUpdate = event => {
        this.video = event.target;
        this.setState({
            currentTime: formatTime(this.video.currentTime) 
        })
    }
    render() {
        return (
            <VideoPlayerLayout>
                <Title 
                    title="Esto es un video chido!"
                />
                <Controls>
                    <PlayPause
                        pause={this.state.pause}
                        handleClick={this.togglePlay}
                    />
                    <Timer 
                        duration={this.state.duration}
                        currentTime={this.state.currentTime}
                    />
                </Controls>
                <Video
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;