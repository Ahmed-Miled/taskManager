import React, { useState } from "react";
import "../Styles/Schedule.css"; 

const Schedule = () => {
  const currentDate = new Date().toLocaleDateString(); // Dynamically fetch the current date
  // mock tasks
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task A", date: "2024-12-18", priority: 1 },
    { id: 2, name: "Task B", date: "2024-12-20", priority: 2 },
    { id: 3, name: "Task C", date: "2024-12-19", priority: 3 },
  ]);

  const [sortBy, setSortBy] = useState("date"); 

  const sortedTasks = [...tasks].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(a.date) - new Date(b.date);
    } else if (sortBy === "priority") {
      return a.priority - b.priority;
    }
    return 0;
  });

  return (
    <div className="calendrier">

      <div className="sortOptions">
        <label>
          Sort by:
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="date">Date</option>
            <option value="priority">Priority</option>
          </select>
        </label>
        <div className="date">{currentDate}</div>
      </div>
      
      <ul className="taskList">
        {sortedTasks.map((task) => (
          <li key={task.id} className="taskItem">
            <div className="taskName">{task.name}</div>
            <div className="taskDate">Date: {task.date}</div>
            <div className="taskPriority">Priority: {task.priority}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
