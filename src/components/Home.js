import { useState, useEffect } from "react";
import Tasks from "./Tasks";
import AddTask from "./AddTask";
import Header from "./Header";

const Home = () => {
    const [showAddTask, setShowAddTask] = useState(false); 
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const getTasks = async () => {
          const tasksFromServer = await fetchTasks();
          setTasks(tasksFromServer);
        } 
      
        getTasks();
      }, []) 
    

    // fetch tasks
    const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  }
  
  // fetch task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  }

  // add task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", { 
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(task)
      });
    const data = await res.json();
    setTasks([...tasks, data]);
  }

  // delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedTask)
    })

    const data = await res.json();
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: data.reminder} : task))
  }
    return(
        <>
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("No tasks to show")}
        </>
    )
}

export default Home;