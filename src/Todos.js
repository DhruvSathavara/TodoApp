import { useState } from 'react';
import './App.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import TodoList from './TodoList';
function Todos() {
    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])

    const itemEvent = (e) => {
        setInputList(e.target.value)
    }

    const addItem = () => {
        setItems((oldItems) => {
            console.log(oldItems,"oldItems");
            return [...oldItems, inputList]
        }) 
        setInputList("")
    }

console.log(items,"items");
    // Deleting items

    const deleteItem = (id) => {
        const updatedItem = items.filter((val, index) => {
            return index !== id;
        })
        setItems(updatedItem);
        console.log("deleted")
    }

    //----------- TIME STATES -----------
    var timeStart;
    var timeEnd;
    var differenc;

    const [Stime, setStime] = useState()
    const [Etime, setEtime] = useState()
    const [Timedifference, setTimeDiff] = useState();
    const [DiffSec, setDiffSec] = useState();
    const [DiffMin, setDiffMin] = useState();
    const [DiffHr, setDiffHr] = useState();
    const [DiffDay, setDiffDay] = useState();
    const [startShowTime, setstartShowTime] = useState();
    const [endShowTime, setendShowTime] = useState();


// --------------------------------
    // function App() {
    //     const date = new Date();
    //     const showTime = date.getHours()
    //         + ':' + date.getMinutes()
    //         + ":" + date.getSeconds();
    
    //     return (
    //         <div className="App">
    //             <h1 align="center">Current Time</h1>
    //             <h2 align="center"> {showTime}</h2>
    //         </div>
    //     );
    // }
    
    // export default App;

    // ---------------------------
    //---------- START TIME------
    function displayStartTime() {
        const date = new Date()
        const SshowTime = date.getHours()
            + ':' + date.getMinutes()
            + ":" + date.getSeconds();
            setstartShowTime(SshowTime)
        
        timeStart = date.getTime();
        console.log(timeStart, 'timeStart');
        setStime(timeStart)
    }
    // ----------END TIME------
    function displayEndTime() {
        timeEnd = new Date().getTime();
        console.log(timeEnd, 'timeStart');
        setEtime(timeEnd);
    }

    // --------- DIFFERENCE BETWEEN TIME---------

    function TimeDifference() {
        differenc = Etime - Stime;
        var secDiff = Math.floor(differenc / 1000) //in s
        console.log(secDiff, 'secDiff');
        var minDiff = Math.floor(differenc / 60 / 1000); //in minutes
        console.log(minDiff, 'minDiff');
        var hDiff = Math.floor(differenc / 3600 / 1000); //in hours
        console.log(hDiff, 'hDiff');
        var DayDiff = Math.floor(differenc / 3600 / 24000); //in Days
        // humanReadable.hours = Math.floor(hDiff);
        // humanReadable.minutes = minDiff - 60 * humanReadable.hours;
        setTimeDiff(differenc)
        setDiffSec(secDiff)
        setDiffMin(minDiff)
        setDiffHr(hDiff)
        setDiffDay(DayDiff)

    }
    return (
        <div className="mainDiv">
            <div className='centerDiv'>
                <br></br>
                <h1>To do list</h1>
                <br></br>
                <input value={inputList} type='text' placeholder='Add items' onChange={itemEvent}></input>
                <button onClick={addItem}>+</button>
                <div>
                    <MDBTable responsive>
                        <MDBTableHead>
                            <tr>
                                <th>To do</th>
                                <th>Start</th>
                                <th>Start time</th>
                                <th>End</th>
                                <th>End time</th>
                                <th>Done</th>
                                <th>Time you take</th>
                                <th>Remove</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {items.map((val, index) => {
                                return <TodoList
                                    val={val}
                                    // key={index}
                                    id={index}
                                    del={() => deleteItem(index)}
                                    start={displayStartTime}
                                    end={displayEndTime}
                                    done={TimeDifference}
                                    Stime={startShowTime}
                                    Etime={Etime}
                                    sec={DiffSec}
                                    min={DiffMin}
                                    hr={DiffHr}
                                    day={DiffDay}

                                >

                                </TodoList>
                            })}
                        </MDBTableBody>
                    </MDBTable>
                </div>
            </div>
        </div>
    );
}

export default Todos;
