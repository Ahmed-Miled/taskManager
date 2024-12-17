import { useState } from 'react';
import AddTask from '../Component/AddTask';


export default function DailyQuest() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build Todo App', completed: false },
    { id: 3, title: 'Master React Router', completed: true },
  ]);
  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle task completion
  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <>
    <div className='dailyQuest'>
    <div className="asd">
      {todos.map((todo) => (
        <div className='task'>
          <div className='description' 
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
          > {todo.title} </div>

          <div className='btns'>
            <button onClick={() => deleteTask(todo.id)}>Delete</button>
            <button >Edit </button>
            <button onClick={() => toggleCompletion(todo.id)}>
              {todo.completed ? 'Undo' : 'Done'}
            </button>
          </div>
        </div>
      ))}
      </div>
    <AddTask />
    </div>
    </>
  );
}
