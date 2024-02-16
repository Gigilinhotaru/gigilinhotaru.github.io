

import React, { useState, useEffect } from 'react';
import TaskItem from './TaskItem';

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    // Load tasks from local storage or initialize to an empty array if none are found
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  useEffect(() => {
    // Save tasks to local storage whenever tasks state changes
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);
const addTask = () => {
  if (input.trim() === '') {
    alert("Task cannot be empty!");
    return;
  }
  const newTask = { text: input.trim(), isEditing: false, completed: false };
  const newTasks = [...tasks, newTask];
  setTasks(newTasks);
  setInput('');
};



  const deleteTask = (indexToDelete) => {
    const newTasks = tasks.filter((_, index) => index !== indexToDelete);
    setTasks(newTasks);
  };

  const startEdit = (index) => {
    const newTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, isEditing: true };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const saveEdit = (index, newText) => {
    const newTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, text: newText, isEditing: false };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const cancelEdit = (index) => {
    const newTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, isEditing: false };
      }
      return task;
    });
    setTasks(newTasks);
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };



  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <ul>
          {getFilteredTasks().map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              deleteTask={deleteTask}
              startEdit={startEdit}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
              toggleTaskCompletion={toggleTaskCompletion} // Pass this new prop to handle completion toggle
            />
          ))}
      </ul>
    </div>
  );
}

export default TodoList;