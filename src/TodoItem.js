import React from 'react';

const TodoItem = ({name, completed, onDelete}) => (
  <li
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >{name}
    <span onClick = {onDelete}> x </span>
  </li>
)

export default TodoItem;
