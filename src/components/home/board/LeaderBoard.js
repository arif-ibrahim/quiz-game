import React from 'react';
import './LeaderBoard.scss';
import WinnerList from './winner/WinnerList';
import Participants from './participants/Participants';

export default function LeaderBoard() {
    return (
        <div className="leader-board">
            <WinnerList/>
            <Participants/>
        </div>
    )
}
