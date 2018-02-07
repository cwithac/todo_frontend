import React from 'react';
import './TodoItem.css';

const TodoItem = ({name, completed, onDelete, onToggle}) => (
  <li>
    <span style={{
        textDecoration: completed ? 'line-through' : 'none',
        color: completed ? '#bdc3c7' : ''
      }}
      onClick = {onToggle}
      >
      {name}
    </span>
    <span className="x" onClick = {onDelete}> x </span>
  </li>
)

export default TodoItem;
