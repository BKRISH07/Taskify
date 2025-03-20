import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {

    const [ todo, setTodo] = useState<string>("");
    const [ todos, setTodos] = useState<Todo[]>([])

    const handleAdd = (e: React.FormEvent) => {
      e.preventDefault();
    
      if (todo) {
       
        const newTodo = { id: Date.now(), todo, isDone: false };
    
        
        setTodos([...todos, newTodo]);
    
        setTodo("");
      }
    };



  return(
     <div className='App'>
    <div className="heading">Taskify</div>
    <InputField todo ={todo} setTodo ={setTodo} handleAdd = {handleAdd}/>
    <TodoList todos = {todos} setTodos={setTodos}/>
   
 
  </div>
  );
};




export default App;
