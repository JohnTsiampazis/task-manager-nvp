
import { useState, useEffect } from "react"

import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import FilterBar from "./components/FilterBar"


function App() {

  const[tasks, setTasks]=useState(()=>{
    const saved=localStorage.getItem("tasks")
    return saved ? JSON.parse(saved):[]
  })

  const[filter, setFilter]=useState("all")// ALL || ACTIVE || COMPETED

  const addTask=(Text)=>{
    if(!Text.trim()) return

    const newTask={
      id: crypto.randomUUID(),
      Text: Text,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  const deleteTask=(id)=>{
    setTasks((prev)=>prev.filter((task)=>{
      return task.id !== id
    }))
  }

  const toggleTask=(id)=>{
    console.log("Toggling: ", id)

    setTasks((prev)=>prev.map((task)=>
      task.id==id?{...task, completed: !task.completed}
      :task  
    ))
  }

  const filteredTasks= tasks.filter((task)=>{
    if(filter=="active") return !task.completed
    if(filter=="completed") return task.completed
    return true
  })

  const updateTask=(id, newText)=>{
    setTasks((prev)=>
      prev.map((task)=>
        task.id==id?{...task, Text: newText}:task
      )
    )
  }

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])

  return (
    <div>
        <h1>TrackTer</h1>
        <TaskForm onAdd={addTask}/>
        <FilterBar filter={filter} setFilter={setFilter}/>
        <TaskList 
          tasks={filteredTasks} 
          onDelete={deleteTask}
          onToggle={toggleTask}
          onUpdate={updateTask}
        />
    </div>
  )
}

export default App
