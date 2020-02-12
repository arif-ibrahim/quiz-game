import React, { Component } from 'react';
import Video from './video/Video';
import QuizPlay from './quizPlay/QuizPlay';


export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
             endVid: false,
        }
    }

    onVideoEnd = ()=> {
        console.log('hurrey... video ends');
    }

    componentDidMount(){
         
    }

    componentDidUpdate(){
         
    }
    
    render() {
        const {data} = this.props;
        const {endVid} = this.state;
        return (
            <div>
                <Video src={data} onVideoEnd={this.onVideoEnd} /> 
                 <QuizPlay data={data} time={this.props.time}/> 
            </div>
        )
    }
}
