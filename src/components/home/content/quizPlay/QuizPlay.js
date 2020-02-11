import React from 'react';
import Question from './question/Question';
import Play from './play/Play';

export default function QuizPlay({data, time}) {
    return (
        <div className='row d-flex justify-content-center '>
            <div className="col-md-8 col-sm-10">
                <Question data={data} time={time}/>
                <Play data={data}/>
            </div>
        </div>
    )
}
