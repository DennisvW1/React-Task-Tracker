import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const About = () => {
    const [showAddTask, setShowAddTask] = useState(false); 
 
    return(
        <div className="text-center">
            <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            <p className="about">Version 1.0.0</p>
            <Link to="/">Go Back</Link>
        </div>
    )
}

export default About; 