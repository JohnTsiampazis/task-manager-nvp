import "./TaskLook.css"
import { useState } from "react"

function TaskList({tasks, onDelete, onToggle, onUpdate}){

    const [editID, setEditingID]=useState(null)
    const [editText, setEditText]= useState("")

    const startEditing=(task)=>{
        setEditingID(task.id)
        setEditText(task.Text)
    }

    const handleUpdate=(id)=>{
        if (!editText.trim()) return
        onUpdate(id, editText)
        setEditingID(null)
    }

    if (tasks.length === 0) {
        return <p>No tasks yet</p>
    }

    return(
        <ul>
            {tasks.map((task)=>(
                <li key={task.id}>
                    {editID===task.id ?(
                     <>
                        <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={(e) => {
                        if (e.key === "Enter") handleUpdate(task.id)
                        }}
                        />
                        <button onClick={() => handleUpdate(task.id)}>
                            Save
                        </button>
                    </>
                    ):(                   
                    <>
                    {/*Toggle Action:onClick task active-->completed*/}
                    <span
                        className={task.completed?"task-completed":"task-active"}
                        onClick={()=>onToggle(task.id)}>
                        {task.Text}
                    </span>

                    {/*Edit Button */}
                    <button onClick={()=>startEditing(task)}>
                        Edit
                    </button>

                    {/*Delete Button */}
                    <button onClick={()=>onDelete(task.id)}>
                        Delete
                    </button>
                    </>
                    )}
                </li>
            ))}
        </ul>
        
    )
}

export default TaskList