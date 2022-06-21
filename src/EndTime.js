import { useState } from "react";



function EndTime(props) {
    // const [Etime, setEtime] = useState()
    const [endShowTime, setendShowTime] = useState();
    function displayEndTime() {
        const date = new Date()
        const EshowTime = date.getHours()
            + ':' + date.getMinutes()
            + ":" + date.getSeconds();
        setendShowTime(EshowTime)

        var timeEnd = date.getTime();
        console.log(timeEnd, 'end');
        props.setEtime(timeEnd);
    }
    return (
        <>
            <button className="end-btn" onClick={displayEndTime}>End</button>
            <span>{endShowTime}</span>
        </>
    )

}
export default EndTime;