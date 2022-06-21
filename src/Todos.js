import { useState } from 'react';
import './App.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import TodoList from './TodoList';
function Todos(props) {
    const [inputList, setInputList] = useState("")
    const [items, setItems] = useState([])

    const itemEvent = (e) => {
        setInputList(e.target.value)
    }

    const addItem = () => {
        setItems((oldItems) => {
            console.log(oldItems, "oldItems");
            return [...oldItems, inputList]
        })
        setInputList("");
    }

    console.log(items, "items");
    // Deleting items

    const deleteItem = (id) => {
        const updatedItem = items.filter((val, index) => {
            return index !== id;
        })
        setItems(updatedItem);
        console.log("deleted")
    }

    return (
        <div className="mainDiv">
            <div className='centerDiv'>
                <br></br>
                <div className='addTodo-div'>
                <h1>To do list</h1>
                <br></br>
                <input className='todo-input' value={inputList} type='text' placeholder='Add items' onChange={itemEvent}></input>
                <button className='addtodo-btn' onClick={addItem}>+</button>
                </div>
                <div className='todo-table'>
                    <MDBTable responsive>
                        <MDBTableHead>
                            <tr>
                                <th>To do</th>
                                {/* <th>Start</th> */}
                                <th>Start time</th>
                                {/* <th>End</th> */}
                                <th>End time</th>
                                {/* <th>Done</th> */}
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
