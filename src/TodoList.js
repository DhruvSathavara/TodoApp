import { useEffect, useState } from "react";
import StartTime from "./StartTime";
import EndTime from "./EndTime";


function TodoList(props) {
    const [Stime, setStime] = useState()


    const [Timedifference, setTimeDiff] = useState();
    const [Etime, setEtime] = useState()


    const [DiffSec, setDiffSec] = useState();
    const [DiffMin, setDiffMin] = useState();
    const [DiffHr, setDiffHr] = useState();
    const [DiffDay, setDiffDay] = useState();
    var differenc;

    function TimeDifference() {

        differenc = Etime - Stime;
        { console.log(Etime, 'DONE EEEE') }
        { console.log(Stime, 'DONE SS') }

        var secDiff = Math.floor(differenc / 1000) //in s
        console.log(secDiff, 'secDiff');
        var minDiff = Math.floor(differenc / 60 / 1000); //in minutes
        console.log(minDiff, 'minDiff');
        var hDiff = Math.floor(differenc / 3600 / 1000); //in hours
        console.log(hDiff, 'hDiff');
        var DayDiff = Math.floor(differenc / 3600 / 24000); //in Days
        setTimeDiff(differenc)
        setDiffSec(secDiff)
        setDiffMin(minDiff)
        setDiffHr(hDiff)
        setDiffDay(DayDiff)
    }

    return (
        <>
            <tr>
                <td>{props.val}</td>

                <td><StartTime setStime={setStime}/></td>

                <td><EndTime setEtime={setEtime} /></td>

                <td>
                    <button className="done-btn" onClick={TimeDifference}>Done</button>
                    <span>{DiffDay || DiffHr || DiffMin || DiffSec !== undefined ?
                        DiffDay + "" + " " + "Day, " + DiffHr + "" + " " + "Hours, " + DiffMin + "" + " " + "Minutes, " + DiffSec + "" + " " + "Seconds" : ""}</span>
                </td>

                <td className="delete-todo">
                    <a className="delete-btn" onClick={props.del}>X</a>
                </td>
            </tr>
        </>
    )
}
export default TodoList;

