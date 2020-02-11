import React from 'react';
import Timer from 'react-compound-timer';
import './Timer.scss'


export default function TimerWrapper(props) {
    return (
        <div className="outer-timer">
            <div className="timer-wrapper ">
                <h3> <span className="heading lh-50">QUIZ STARTS IN</span> <br/>
                    <Timer
                        initialTime={props.time}
                        lastUnit="h"
                        direction="backward">
                        {() => (
                            <React.Fragment>
                                {/* <Timer.Days /> days */}
                                <span ><Timer.Hours /> hours</span>
                                <span className="ml-10"><Timer.Minutes /> minutes</span>
                                <span className="ml-10"><Timer.Seconds /> seconds</span>
                            </React.Fragment>
                        )}
                    </Timer>
                </h3>
            </div>
        </div>
    )
}
