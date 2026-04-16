import React, { useEffect, useState } from "react";
 import axios from "axios";
function App() {
   const [tasks, setTasks] = useState([]);
   const [title, setTitle] = useState("");
const fetchTasks = async () => {
 	const res = await axios.get("http://localhost:5000/tasks");
 	setTasks(res.data);
   };
const addTask = async () => {
 	await axios.post("http://localhost:5000/tasks", { title });
 	setTitle("");
 	fetchTasks();
   };
useEffect(() => {
 	fetchTasks();
   }, []);
return (
 	<div style={{ padding: "20px" }}>
   	<h2>Task Manager</h2>
   	
   	<input
     	value={title}
     	onChange={(e) => setTitle(e.target.value)}
     	placeholder="Enter task"
   	/>
   	<button onClick={addTask}>Add</button>
<ul>
     	{tasks.map((t) => (
       	<li key={t.id}>{t.title} - {t.status}</li>
     	))}
   	</ul>
 	</div>
   );
 }
export default App;
