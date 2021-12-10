import React from 'react';

import './TodoList.css';

const TodoList = props => {
  console.log(props.todo);
  return (
      
    <ul className="todo-list">
        {props.todo.map( todo1=> {
            return  <li key={todo1.id}>{todo1.text}</li> 
                  
        })}
    </ul>
  );
};

export default TodoList;
