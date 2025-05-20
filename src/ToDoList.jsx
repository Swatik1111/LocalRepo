import React, { useState } from 'react'
import './App.css'

function ToDoList() {

    const [tasks, setTasks] = useState(["Walk the dog", "Eat Breakfast", "Go to Work"]);
    const [newTask, setNewTask] = useState();

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask !== "") {
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }
    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks)

    }
    function moveTaskUp(index) {
        const updateTasks = [...tasks]
        if (index > 0) {

            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]]
            setTasks(updateTasks)
        }
    }
    function moveTaskDown(index) {
        const updateTasks = [...tasks]
        if (index < tasks.length - 1) {

            [updateTasks[index + 1], updateTasks[index]] = [updateTasks[index], updateTasks[index + 1]]
            setTasks(updateTasks)
        }

    }
    return (<div className="to-do-list">
        <h1>To Do List</h1>
        <div>
            <input type="text" onChange={handleInputChange} placeholder="Enter a Task" value={newTask}></input>
            <button className="add-button" onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index) => <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={() => moveTaskUp(index)}>Up</button>
                <button className="move-button" onClick={() => moveTaskDown(index)}>Down</button>
            </li>)}
        </ol>
        <div>
        </div>
    </div>);
}
export default ToDoList
