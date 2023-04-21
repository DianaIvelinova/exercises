import { useState } from "react"
import "../App.css"

export function ToDoList() {
const [toDoList,setToDoList] = useState([]);
const [newTask,setNewTask] = useState("");

const handleChange = (event) => { setNewTask(event.target.value) }

const deleteTask = (taskValue) => { 
    setToDoList(toDoList.filter((task) => { return task !== taskValue }));
 }

return (
    <div className="App">
        <div>
            <input onChange={handleChange} className="toDoInput" type="text"/>
            <button onClick={() => setToDoList([...toDoList,newTask])} className="btn-minimalistic">Add</button>
        </div>
        <div>
            {toDoList.map((value) => { return (
                <div style={{fontSize: 30}}> 
                    <div key={value}> {value} </div>
                    <button onClick={() => deleteTask(value)}><img alt="" className="icon" src="/delete.svg"></img></button>
                </div>
            )})}
        </div>
    </div>
)
}