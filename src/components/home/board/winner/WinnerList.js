import React from 'react'

export default function WinnerList() {
    return (
        <div className="winner-lists mt-3">
            <ul className="list-group ">
                <div className="borderless">
                <li className="list-group-item list-group-item-success d-flex justify-content-around">
                    <h5>WINNER LISTS</h5>
                </li>
                </div>
                
                <div className="borderless">
                    <li className="list-group-item d-flex justify-content-between">
                        Arif Ibrahim
                        <span className="badge badge-success  ">100%</span>
                    </li>
                    <div className="progress" style={{height: "1px", }}>
                        <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                    </div>
                </div>
                <div>
                    <li className="list-group-item d-flex justify-content-between">
                        Mahadi Hasan
                        <span className="badge badge-success">95%</span>
                    </li>
                    <div className="progress" style={{height: "1px", }}>
                        <div className="progress-bar"   style={{width: '95%'}}  /> 
                    </div>
                </div>
                <div className="borderless">
                    <li className="list-group-item d-flex justify-content-between">
                        Arif Ibrahim
                        <span className="badge badge-success  ">80%</span>
                    </li>
                    <div className="progress" style={{height: "1px", }}>
                        <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"> </div>
                    </div>
                </div>
                <div>
                    <li className="list-group-item d-flex justify-content-between">
                        Mahadi Hasan
                        <span className="badge badge-success">65%</span>
                    </li>
                    <div className="progress" style={{height: "1px", }}>
                        <div className="progress-bar"   style={{width: '65%'}}  /> 
                    </div>
                </div>
            </ul>
        </div>
    )
}
