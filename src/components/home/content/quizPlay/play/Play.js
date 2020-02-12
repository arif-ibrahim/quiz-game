import React, { Component } from 'react';
import './Play.scss';
import wrong from '../../../../../resource/svg/wrong.png';
import correct from '../../../../../resource/svg/correct.png';

export default class Play extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isCorrect: -1,
             isClicked: false,
        }
    }

     clickAnswer = (d, btnId) => {
        let found;
        let element = document.getElementById(btnId);
        let btnTag = document.getElementsByTagName('button');
             
        if(this.props.data.question_ans === d){
            element.classList.replace("btn-secondary", "btn-success");
            this.setState({
                isCorrect: 1,
                isClicked:  true,
            })
        }else{
            element.classList.replace("btn-secondary", "btn-danger");
            this.setState({
                isCorrect: 0,
                isClicked:  true,
            })
            for (let i = 0; i < btnTag.length; i++) {
                if (btnTag[i].textContent == this.props.data.question_ans) {
                    found = btnTag[i];
                    break;
                }
            }
            found.classList.replace("btn-secondary", "btn-success");
            var counter = 1;
            function changeBtn()
            {
                if (counter < 7){
                    counter++
                    found.classList.toggle ("btn-success");
                    window.setTimeout(changeBtn, 200);
                }
            }

            changeBtn()

             
        }
    }

    componentDidMount(){
        this.setState({
            isCorrect: -1,
            isClicked: false,
         })
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            let option1 = document.getElementById('btn-1');
            let option2 = document.getElementById('btn-2');
            let option3 = document.getElementById('btn-3');
            let option4 = document.getElementById('btn-4');
            option1.classList.replace("btn-danger", "btn-secondary");
            option2.classList.replace("btn-danger", "btn-secondary");
            option3.classList.replace("btn-danger", "btn-secondary");
            option4.classList.replace("btn-danger", "btn-secondary");
            option1.classList.replace("btn-success", "btn-secondary");
            option2.classList.replace("btn-success", "btn-secondary");
            option3.classList.replace("btn-success", "btn-secondary");
            option4.classList.replace("btn-success", "btn-secondary");
             this.setState({
                isCorrect: -1,
                isClicked: false,
             })
        }
      }
    
    render() {
        const { isCorrect, isClicked, } = this.state;
        const {data} = this.props;
        return (
            <div className="play mb-5">
                <div className='row mt-3'>
                    <div className='col-md-6 col-sm-6 col-6 mb-4'>
                        <button id='btn-1' onClick={()=>this.clickAnswer(data.question_option_1, 'btn-1')} type="button" className={`btn btn-secondary btn-lg btn-block`} disabled={isClicked}>{data.question_option_1}</button></div>
                    <div className='col-md-6 col-sm-6 col-6 mb-4'>
                        <button id='btn-2' onClick={()=>this.clickAnswer(data.question_option_2, 'btn-2')} type="button" className={`btn btn-secondary btn-lg btn-block `} disabled={isClicked}>{data.question_option_2}</button></div>
                    <div className='col-md-6 col-sm-6 col-6 mb-4'>
                        <button id='btn-3' onClick={()=>this.clickAnswer(data.question_option_3, 'btn-3')} type="button" className={`btn btn-secondary btn-lg btn-block`} disabled={isClicked}>{data.question_option_3}</button></div>
                    <div className='col-md-6 col-sm-6 col-6 mb-4'>
                        <button id='btn-4' onClick={()=>this.clickAnswer(data.question_option_4, 'btn-4')} type="button" className={`btn btn-secondary btn-lg btn-block`} disabled={isClicked}>{data.question_option_4}</button></div>
                </div>
                <div className="answer">
                    {isCorrect === 1 ? <img src={correct}/> : isCorrect === 0 ? <img src={wrong}/>: null}
                </div>
            </div>
        )
    }
}
