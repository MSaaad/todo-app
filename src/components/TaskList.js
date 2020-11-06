import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useSelector } from 'react-redux'
import AddTaskForm from './AddTasks'
import Task from './Task'

function TaskList() {
    const todos = useSelector(state => state.todos)
    const completed = (todos.filter(i => i.complete === true)).length
    const remain = (todos.filter(i => i.complete === false)).length
    return (
        <>
            <h2 className="header">Todo list App</h2>
            <p className="task-details">
                {(todos.length === 0) ? "" : (remain === 0) ? "Every Task Is Finished !" : (remain >= 1 && completed == 0) ? `${remain} Task remaining & No task finished` : `${remain} Task remaining & ${completed} task finished`}
            </p>
            <AddTaskForm />
            <div className="mt-4">
                <ul>
                    {todos.map((todo, index) => {
                        return (
                            <Draggable draggableId={todo.id} index={index} key={todo.id}>
                                {provided => (
                                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <Task id={todo.id} task={todo.task} complete={todo.complete} />
                                    </div>
                                )}
                            </Draggable>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
export default TaskList;
