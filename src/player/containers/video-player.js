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
import FullScreen from '../components/full-screen';

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: '',
        currentTime: '',
        durationFloat: 0,
        timeFloat: 0,
        progress: 0,
        loading: false,
        volume: 0,
        lastVolume: 0,
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
    handleVolumeToggle = event => {
        if (this.video.volume===0) {
            this.video.volume = this.state.lastVolume;
        } else {
            this.setState({
                lastVolume: this.video.volume,
            })
            this.video.volume = 0;
        }
    }
    handleFullScreenClick = event => {
        if(!document.webkitIsFullScreen) {
            this.player.webkitRequestFullscreen();
        } else {
            document.webkitExitFullscreen();
        }
    }
    setRef = element => {
        this.player = element;
    }
    render() {
        return (
            <VideoPlayerLayout
                setRef={this.setRef}
            >
                <Title 
                    title={this.props.title}
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
                        handleVolumeToggle={this.handleVolumeToggle}
                    />
                    <FullScreen 
                        handleFullScreenClick={this.handleFullScreenClick}
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
                    src={this.props.src}
                />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer;