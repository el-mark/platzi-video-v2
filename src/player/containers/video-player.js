import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import Controls from '../components/video-player-controls';
import { formatTime } from '../components/utilities';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: '',
        currentTime: '',
        durationFloat: 0,
        timeFloat: 0,
        progress: 0,
        loading: false,
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
    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }
    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }
    handleVolumeChange = event => {
        this.video.volume = event.target.value;
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
                    <Volume 
                        handleVolumeChange={this.handleVolumeChange}
                    />
                </Controls>
                <Spinner 
                    active={this.state.loading}
                />
                <Video
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    handleLoadedMetadata={this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;