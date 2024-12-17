import { useState } from 'react';
import AddTask from '../Component/AddTask';

export default function Todo() {
  const [showBlock, setShowBlock] = useState(false);
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
/*
  let blockContent = null;
  if (showBlock) {
    blockContent = (
      <>
        <div
          onClick={handleClick}
          className={`add ${isHidden ? 'hidden' : ''}`}
        >
          Add {props.text}
        </div>
        <div className='form'>{formContent}</div>
      </>
    );
}
*/
  return (
    <>
      <div className='todoContainer'>
        <div >
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

              <div className='btns'>
                <button onClick={() => deleteTask(todo.id)}>Delete</button>
                <button><a href="/edit">Edit</a> </button>
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
