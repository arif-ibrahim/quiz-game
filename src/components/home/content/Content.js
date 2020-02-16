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

    

    componentDidMount(){
         
    }

    componentDidUpdate(){
         
    }
    
    render() {
        const {data} = this.props;
        return (
            <div>
                <Video src={data}  /> 
                 <QuizPlay data={data} time={this.props.time}/> 
            </div>
        )
    }
}
