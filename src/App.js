import React, { useState } from 'react';

import TodoList from './components/Todo-list/TodoList';
import LabSubmit from './components/Lab-submit/LabSubmit';

import './App.css';

const App = () => {
  const [todolist, setLabSubmit]= useState([
    {id: 'w1', text: 'Tạo mới Tài khoản AWS'},
    {id: 'w2', text: 'Quản lý mức chi phí sử dụng trên AWS với AWS Budgets'},
    {id: 'w3', text: 'Quản lý mức chi phí sử dụng trên AWS với AWS Budgets'},
    {id: 'w4', text: 'Quản lý mức chi phí sử dụng trên AWS với AWS Budgets'}
  ]);
   
  const addLab = newLabSubmit => {
    setLabSubmit(prevLabSubmit => prevLabSubmit.concat(newLabSubmit))
  };
  
  return (
    <div className="todo-list">
      <h2>Submit Lab</h2>
      <TodoList todo={todolist} />
      <LabSubmit onAddLab={addLab} />
    </div>
  );
};

export default App;
