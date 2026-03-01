import { useState } from "react"

function TaskForm({onAdd}){

    const [input, setInput]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        onAdd(input)
        setInput("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
                type="task"
                placeholder="Add a task..."
                value={input}
                onChange={(e)=>setInput(e.target.value)}/>
                <button type="submit">Add</button>
        </form>
    )
}

export default TaskForm