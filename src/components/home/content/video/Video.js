import React from 'react';
import './Video.scss'
import VideoPlayer from './VideoPlayer'

export default function Video(props) {
    const src =  props.src.question_attachment_url;
    return (
        <div className="my-video" >
           <VideoPlayer src={src} />
        </div>
    )
}
