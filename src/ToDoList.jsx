import React, {useState} from "react";

function ToDoList(){
    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState("");

    function addNewTask(event){
        setNewTask(event.target.value)
    }

    function pushNewTask(){
        
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask])
            setNewTask("")
        }
    }
    function deleteTask(index){
        const mytasks = tasks.filter((_, i) => i !== index)
        setTasks(mytasks);
    }

    function upButton(index){
        if(index > 0){
            const updatedTasks = [...tasks]
            [updatedTasks[index], updatedTasks[index - 1]]=
            [updatedTasks[index-1], updatedTasks[index]]
            setTasks(updatedTasks);
        }

    }

    return(<>
        <div className="todolist">
            <h1>To-Do-List:</h1>
            <div className="middle">
                <input type="text" 
                        className="input"
                       value={newTask}
                       onChange={addNewTask} />
                <button className="add-button"
                        onClick={pushNewTask}>Add</button>
            </div>
            <ol>
                {tasks.map((el, index) => <li key={index}>
                    <span className="text">{el}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    <button className="up-button" onClick={() => upButton(index)}>Up</button>
                </li>)}
            </ol>

        </div>
    </>);
}

export default ToDoList