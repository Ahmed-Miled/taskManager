/*
import { useState } from 'react';

export default function Schedule() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React', completed: false, piority: 1 },
    { id: 2, title: 'Build Todo App', completed: false, piority: 5 },
    { id: 3, title: 'Master React Router', completed: true, piority: 10 },
  ]);

  return (
    <>
      <div className='scheduleConatiner container'>
        <div className='je sais pas quoi'>sort by priority or date </div>
        <div>
          {todos.map((todo) => (
            <div className='task'>
              <div
                className='description'
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                }}
              >
                {' '}
                {todo.title}{' '}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
*/
import React, { useState } from "react";
import "../Styles/Schedule.css"; // Assume appropriate styles are added

const Schedule = () => {
  // Example data (mock tasks)
  const [tasks, setTasks] = useState([
    { id: 1, name: "Task A", date: "2024-12-18", priority: 1 },
    { id: 2, name: "Task B", date: "2024-12-20", priority: 2 },
    { id: 3, name: "Task C", date: "2024-12-19", priority: 3 },
  ]);

  const [sortBy, setSortBy] = useState("date"); // Sort criteria: date or priority

  // Sort tasks based on criteria
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
      {/* Sorting options */}
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
      </div>
      
      {/* Task display */}
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
