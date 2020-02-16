import React, { Component } from 'react'
import './HomePage.scss';
import Timer from './timer/Timer';
import Content from './content/Content';
import LeaderBoard from './board/LeaderBoard'
import { post, postPlayArtisan, } from '../../http';
import Pusher from 'pusher-js';
import {pusherCredential} from '../../apiUrl.json';
        

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ques_ans: [],
            quiz_play_status: '', //open, close
            question_id: -999999,      //-1, 012345
            data: {}
        };
         
    };

    async componentDidMount(){
        localStorage.clear();
        const pusher = new Pusher(pusherCredential.key, {
            cluster: pusherCredential.cluster,
            encrypted: true
          });
          const channel = pusher.subscribe(pusherCredential.channelPub);
          channel.bind(pusherCredential.quiz_public_event, data => {
             this.setState({
                 question_id: data.question_id,
                 quiz_play_status: data.quiz_play_status
             })
          });

        const res = await post('/daily-quiz-campaign-details');
        if(res.response.statusCode === 200){
            this.setState({
                ques_ans: res.campaign_question_ans,
            });
        }

        setTimeout(()=>{
            
            postPlayArtisan('/quiz-play-artisan');
        }, 10000)
        
    }

    componentDidUpdate(prevProps, prevState){
        const { ques_ans, question_id } = this.state;
        if(prevState.question_id !== question_id){
            const q = ques_ans.filter((item)=>{
                return item.quiz_question_id === question_id
            })
            this.setState({
                data: q[0],
            })
        }
    }
 
    render() {
        const time = 10000;
        const { question_id, data } = this.state;
        return (
            <div className="home-page" >
              {/* <LeaderBoard/>  */}
                { question_id > -1 ?  <Content data={data} time={time}/> : question_id === -1 ? <LeaderBoard/> : <Timer time={time}/>}
            </div>
        )
    }
}

export default HomePage;
