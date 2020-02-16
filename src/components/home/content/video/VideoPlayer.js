import React, {Component} from 'react';
import {Player,} from 'bitmovin-player/modules/bitmovinplayer-core';
import EngineBitmovinModule from 'bitmovin-player/modules/bitmovinplayer-engine-bitmovin';
import MseRendererModule from 'bitmovin-player/modules/bitmovinplayer-mserenderer';
import HlsModule from 'bitmovin-player/modules/bitmovinplayer-hls';
import AbrModule from 'bitmovin-player/modules/bitmovinplayer-abr';
import ContainerTSModule from 'bitmovin-player/modules/bitmovinplayer-container-ts';
import SubtitlesModule from 'bitmovin-player/modules/bitmovinplayer-subtitles';
import PolyfillModule from 'bitmovin-player/modules/bitmovinplayer-polyfill';
import StyleModule from 'bitmovin-player/modules/bitmovinplayer-style';
import DashModule from 'bitmovin-player/modules/bitmovinplayer-dash';
import XML from 'bitmovin-player/modules/bitmovinplayer-xml';

// import {UIFactory} from 'bitmovin-player/bitmovinplayer-ui';
import 'bitmovin-player/bitmovinplayer-ui.css';

Player.addModule(EngineBitmovinModule);
Player.addModule(MseRendererModule);
Player.addModule(HlsModule);
Player.addModule(AbrModule);
Player.addModule(ContainerTSModule);
Player.addModule(SubtitlesModule);
Player.addModule(PolyfillModule);
Player.addModule(StyleModule);
Player.addModule(XML);
Player.addModule(DashModule);




class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: [],
            test: 'aa'
        };
    }

    componentDidMount(){
        // document.addEventListener('touchstart',  null, true);
        let container = document.getElementById('player');
        let playerConfig = {
            key: '94452f78-8dfd-4d3b-9b47-59cad553a664',
            playback: {
                autoplay: true,
                muted: false,
            },
            events: {
                onPlaybackFinished: this.test,
            }
        };
        let player = new Player(container, playerConfig);
        // UIFactory.buildDefaultUI(player);
        this.setState({player});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
        let {player} = this.state;
        if (prevState !== this.state.player) {
            
            player.load({hls: this.props.src}).then(() => {
                
                console.log('Successfully loaded source');
            }, () => {
                console.log('Error while loading source');
            });
             
        }
    }

    test = ()=>{
        this.setState({
            test: 'arifffffffffff'
        })
    }
    //  setupPlayer = async() => {
    //     // document.addEventListener('touchstart',  null, true);
    //     let container = document.getElementById('player');
    //     let playerConfig = {
    //         key: '94452f78-8dfd-4d3b-9b47-59cad553a664',
    //         playback: {
    //             autoplay: true,
    //             muted: false,
    //         },
    //         events: {
    //             onPlaybackFinished: this.test,
    //         }
    //     };
    //     let player = new Player(container, playerConfig);
    //     // UIFactory.buildDefaultUI(player);
    //     this.setState({player});
    // };

 

    render() {
        console.log(this.state.test)
        return (
            <div id="player"  />
        );
    }
}

export default VideoPlayer;