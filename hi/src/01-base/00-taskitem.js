// TaskItem.js
import React, { Component } from 'react'
import './css/00-todolist.css'


function TaskItem({ task, index, deleteTask, startEdit, saveEdit, cancelEdit, toggleTaskCompletion }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.isEditing ? (
        <>
          <input
            defaultValue={task.text}
            onBlur={(e) => saveEdit(index, e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") saveEdit(index, e.target.value);
            }}
            autoFocus
          />
          <button onClick={() => cancelEdit(index)}>Cancel</button>
        </>
      ) : (
        <>
          {task.text}
          <button onClick={() => startEdit(index)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
          <button onClick={() => toggleTaskCompletion(index)}>
            {task.completed ? 'Mark as Undone' : 'Mark as Done'}
          </button>
        </>
      )}
    </li>
  );
}



export default TaskItem;
