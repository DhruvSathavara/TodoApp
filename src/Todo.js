import { useEffect, useState } from "react";
// import moment from 'moment'
// import "./styles.css";
// days, hours, minutes, seconds--- taskk
export default function Todo() {
    const [todos, setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            return JSON.parse(savedTodos);
        } else {
            return [];
        }
    });
    const [todo, setTodo] = useState("");
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    function handleInputChange(e) {
        setTodo(e.target.value);
    }
    function handleFormSubmit(e) {
        e.preventDefault();
        if (todo !== "") {
            setTodos([
                ...todos,
                {
                    id: todos.length + 1,
                    text: todo
                    // setTodo,
                }
            ]);
        }
        setTodo("");
    }
    function handleDeleteClick(id) {
        const removeItem = todos.filter((todo) => {
            return todo.id !== id;
        });
        setTodos(removeItem);
    }
    var humanReadable = {};
    var timeStart;
    var timeEnd;
    // console.log(timeStart, "ssss")
    var differenc; //in ms
    // console.log(differenc,"differenc");
    // console.log(humanReadable, "hhhh")
    // time section
    const [Stime, setSTime] = useState("");
    const [Etime, setETime] = useState("");
    const [Timedifference, setTimeDiff] = useState();
    const [DiffSec, setDiffSec] = useState();
    const [DiffMin, setDiffMin] = useState();
    const [DiffHr, setDiffHr] = useState();
    const [DiffDay, setDiffDay] = useState();
    function displayStartTime() {
        timeStart = new Date().getTime();
        console.log(timeStart, 'timeStart');
        setSTime(timeStart)
    }
    function displayEndTime() {
        timeEnd = new Date().getTime();
        console.log(timeEnd, 'timeEnd');
        setETime(timeEnd)
        // displayDifferenceTime(differenc);
    }
    function displayDifferenceTime() {
        if (Etime) {
            differenc = Etime - Stime;
            var secDiff = Math.floor(differenc / 1000) //in s
            console.log(secDiff, 'secDiff');
            var minDiff = Math.floor(differenc / 60 / 1000); //in minutes
            console.log(minDiff, 'minDiff');
            var hDiff = Math.floor(differenc / 3600 / 1000); //in hours
            console.log(hDiff, 'hDiff');
            var DayDiff = Math.floor(differenc / 3600 / 24000); //in Days
            humanReadable.hours = Math.floor(hDiff);
            humanReadable.minutes = minDiff - 60 * humanReadable.hours;
            setTimeDiff(differenc)
            setDiffSec(secDiff)
            setDiffMin(minDiff)
            setDiffHr(hDiff)
            setDiffDay(DayDiff)
        }
        // setTimeDiff(differenc)
    }

    // let difference;
    return (
        <div className="App">
            <div className="row">
                <form className="offset-5 input-div" onSubmit={handleFormSubmit}>
                    <input
                        className="todo-input"
                        name="todo"
                        type="text"
                        placeholder="Create a new todo"
                        value={todo}
                        onChange={handleInputChange}
                    />
                    <button className="addtodo-btn">Add todo</button>
                </form>
            </div>
            <div className="todo-list">
                {todos.map((todo) => {
                    return (
                        <div className="row main-container">
                            <div className="col-2" key={todo.id}>
                                <h1>{todo.text}</h1>
                            </div>

                            <div className="col-2">
                                <button className="start-btn col-6" onClick={displayStartTime}>Start time </button>

                                <h5 className="col-5">{Stime} </h5>
                            </div>

                            <div className="col-2">
                                <button className="end-btn" onClick={displayEndTime}>End time</button>
                                <h5 className="col-5">
                                    {Etime}
                                </h5>
                            </div>

                            <div className="col-3">
                                <button className="done-btn col-3 offset-3" onClick={() =>
                                    displayDifferenceTime(differenc)}>Done
                                </button>
                                <p className="time-difference">
                                    {DiffDay || DiffHr || DiffMin || DiffSec !== undefined ? DiffDay + "" + " " + "Day, " + DiffHr + "" + " " + "Hours" + "," + " " + DiffMin + "" + " " + "Minute, " + DiffSec + "" + "  " + "Second" : ""}
                                </p>
                            </div>

                            <button className="delete-btn col-1" onClick={() => handleDeleteClick(todo.id)}>X</button>


                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}