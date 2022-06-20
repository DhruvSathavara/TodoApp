import { useEffect } from "react";


function TodoList(props) {
 
    return (
        <tr>
            <td>{props.val}</td>

            <td><button onClick={props.start}>Start</button></td>

            <td>{props.Stime}</td>

            <td><button onClick={props.end}>End</button></td>

            <td>{props.Etime}</td>

            <td><button onClick={props.done}>Done</button></td>

            <td>{  props.day || props.hr || props.min || props.sec !== undefined ?
            props.day + "" + " " + "Day, "+ props.hr + "" + " " + "Hours, " +props.min + "" + " " + "Minutes, " + props.sec + "" + " " + "Seconds" : ""}</td>
            
            <td className="delete-todo">
                <a onClick={props.del}>X</a>
            </td>
        </tr>
    )
}
export default TodoList;

