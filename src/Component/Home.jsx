import React, { useState } from 'react';
import '../Styles/home.css';

export default function Home() {
  const percentages = [
    { percent: 75, label: 'commitment' },
    { percent: 25, label: 'Health' },
  ];

  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task A', date: '2024-12-18', priority: 1, description: '' },
    {
      id: 3,
      name: 'Report Review',
      date: '2024-12-19',
      priority: 3,
      description: 'Finalize the team report with key insights for the meeting',
    },
    {
      id: 4,
      name: 'Client Emails',
      date: '2024-12-19',
      priority: 3,
      description: 'Respond to urgent client emails and flag follow-ups',
    },
    {
      id: 2,
      name: 'Update website',
      date: '2024-12-19',
      priority: 2,
      description: 'Revise the homepage content for better engagement',
    },
  ]);

  // const currentDate = new Date().toISOString().split('T')[0];
  const currentDate = "2024-12-19";

  const todayTasks = tasks.filter((task) => task.date === currentDate);

  return (
    <div className='Home container'>

      <div className='upper'>
        <div className='asd'>weekly progrerss</div>
        <div className='a'>
        <div key={1} className='circle-container'>
          <p>{percentages[0].label}</p>
          <div
            className='circle'
            style={{
              '--percentage': percentages[0].percent, // Set percentage as a custom CSS variable
            }}
          >
            <span className='percentage-text'>{percentages[0].percent}%</span>
          </div>
        </div>
        <div key={2} className='circle-container'>
          <p>{percentages[1].label}</p>
          <div
            className='circleb'
            style={{
              '--percentage': percentages[1].percent, // Set percentage as a custom CSS variable
            }}
          >
            <span className='percentage-text'>{percentages[1].percent}%</span>
          </div>
        </div>
        </div>
      </div>


      <div className='lower'>
        <h3>Today's Tasks</h3>
        {todayTasks.length > 0 ? (
          <ul className='task-list'>
            {todayTasks.map((task) => (
              <li key={task.id} className='task'>
                <span className='shadow'>{task.name}</span>
                <span className='description'>{task.description}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tasks for today!</p>
        )}
      </div>
    </div>
  );
}
