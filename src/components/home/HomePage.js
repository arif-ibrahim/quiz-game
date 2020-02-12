import React, { Component } from 'react'
import './HomePage.scss';
import Timer from './timer/Timer';
import Content from './content/Content';
import LeaderBoard from './board/LeaderBoard'
import post from '../../http';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            ques_ans: [],
            index: 0,
        };
         
    };

    async componentDidMount(){
        const res = await post('/daily-quiz-campaign-details');
        if(res.response.statusCode === 200){
            this.setState({
                ques_ans: res.campaign_question_ans,
            });
        }
        
        const interval = setInterval(()=> this.setState({
            index: this.state.index + 1,
            play: true
        }), 10000);
        this.interval = interval;
    }

    componentDidUpdate(prevProps, prevState){
        if(this.state.index > this.state.ques_ans.length){
            clearInterval(this.interval);
        }
    }
 
    render() {
        const time = 10000;
        const {play, ques_ans, index} = this.state;
        return (
            <div className="home-page">
              {/* <LeaderBoard/>  */}
                {(index <= ques_ans.length) && play ? <Content data={ques_ans[index-1]} time={time}/> : (index > ques_ans.length) && play ? <LeaderBoard/> : <Timer time={time}/>}
            </div>
        )
    }
}

export default HomePage;
