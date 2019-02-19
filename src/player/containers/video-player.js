import React, { Component } from 'react';
import VideoPlayerLayout from '../component/video-player-layout';
import Video from '../component/video';
import Title from '../component/title';
import PlayPause from '../component/play-pause';
import Timer from '../component/timer';
import Controls from '../component/video-player-controls';
import { formatTime } from '../component/utilities';
import ProgressBar from '../component/progress-bar';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: '',
        currentTime: '',
        durationFloat: 0,
        timeFloat: 0,
        progress: 0,
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
            duration: formatTime(this.video.duration),
            durationFloat: this.video.duration
        })
    }
    handleTimeUpdate = event => {
        this.video = event.target;
        this.setState({
            currentTime: formatTime(this.video.currentTime),
            timeFloat: this.video.currentTime
        })
    }
    handleProgressChange = event => {
        this.video.currentTime = event.target.value;
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
                    <ProgressBar 
                        value = {this.state.timeFloat}
                        max = {this.state.durationFloat}
                        handleProgressChange={this.handleProgressChange}
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