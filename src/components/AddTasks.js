import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function AddTasks() {
    const state = useSelector(state => state.todos)
    const dispatch = useDispatch()
    const [current, setCurrent] = useState("")

    function AddTask(event) {
        event.preventDefault()
        if (current.length >= 1) {
            dispatch({
                type: "ADD",
                payload: { id: Date.now().toString(), task: current, complete: false }
            })
            setCurrent("")
        }
        else{
            alert("Can't add empty task")
        }
    }

    return (
        <form onSubmit={AddTask}>
            <div className="text-field">
                <input className="input-field" type="text" placeholder="Write your task..." aria-label="Full name" value={current} onChange={event => setCurrent(event.target.value)} />
                <button className="btn" type="button" onClick={AddTask}>Add?</button>
            </div>
        </form>
    )
}

export default AddTasks;
