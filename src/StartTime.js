import React, { useState } from "react";



function StartTime(props) {
    const [startShowTime, setstartShowTime] = useState();
    // const [Stime, setStime] = useState()
    const displayStartTime = () => {
        const date = new Date()
        const SshowTime = date.getHours()
            + ':' + date.getMinutes()
            + ":" + date.getSeconds();
        setstartShowTime(SshowTime)

        var timeStart = date.getTime();
        console.log(timeStart, 'timeStart');
        props.setStime(timeStart)

    }
    return (
        <>
            <button className="start-btn" onClick={displayStartTime}>Start</button>
            <span>{startShowTime}</span>
        </>

    )

}

export default StartTime;