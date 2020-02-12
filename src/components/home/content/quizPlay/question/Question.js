import React from 'react'
import Timer from 'react-compound-timer';

export default function Question({data, time}) {
    return (
        <div>
            <div className="card text-center mt-1">
                <div className="card-header ">
                    <Timer
                        initialTime={time}
                        lastUnit="s"
                        direction="backward">
                        {() => (
                            <React.Fragment>
                                <Timer.Seconds />
                            </React.Fragment>
                        )}
                    </Timer>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.question_title}</h5>
                </div>
            </div>
        </div>
    )
}
