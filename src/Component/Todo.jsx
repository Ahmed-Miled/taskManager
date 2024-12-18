import { useState } from "react";
import "../Styles/Todo.css"; 

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Task A", completed: false },
    { id: 2, title: "Task B", completed: false },
    { id: 3, title: "Task C", completed: true },
  ]);

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todoContainer">
      <ul className="taskList">
        {todos.map((todo) => (
          <li key={todo.id} className="taskItem">
            <div
              className="taskTitle"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
            </div>
            <div className="taskActions">
              <button onClick={() => deleteTask(todo.id)}>Delete</button>
              <button>
                <a href="/edit">Edit</a>
              </button>
              <button onClick={() => toggleCompletion(todo.id)}>
                {todo.completed ? "Undo" : "Done"}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button className="addTaskButton" onClick={() => console.log("Add Task!")}>
        Add Task
      </button>

    </div>
  );
}
