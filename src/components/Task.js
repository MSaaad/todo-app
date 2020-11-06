import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../App.css'
function Task(props) {
    const { id, task, complete } = props
    const state = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [edit, setEdit] = useState()

    function markComplete() {
        dispatch({
            type: "COMPLETE",
            payload: {
                id: id,
                task: task
            }
        })
    }

    function editTask() {
        if (edit) {
            setEdit("")
        }
        else {
            setEdit(task)
        }
    }

    function updateTask() {
        dispatch({
            type: "UPDATE",
            payload: {
                id: id,
                task: edit,
                complete: complete
            }
        })
        setEdit()
    }

    function deleteTask() {
        dispatch({
            type: "DEL",
            payload: { id: id }
        })
    }
    return (
        <li className="task-list">
            <div className="cursor-pointer">
                {complete == true ? <i onClick={markComplete}></i> : <i onClick={markComplete} ></i>}
                {edit ? (
                    <form onSubmit={updateTask}>
                        <div className="text-field-edit">
                            <input className="input-field" type="text" placeholder="list" aria-label="Full name" value={edit} onChange={event => setEdit(event.target.value)} />
                            <button className="btn" type="button" onClick={updateTask}>Update</button>
                        </div>
                    </form>
                ) : (<span onClick={markComplete} className={complete === true ? "text-black-300 line-through" : ""}>
                    <span className="todo-text">{task}</span></span>)}
            </div>
            <div>
                <i className="edit-btn" onClick={editTask}> Edit</i>
                <i className="delete-btn" onClick={deleteTask}> Delete</i>
            </div>
        </li>
    )
}

export default Task;
