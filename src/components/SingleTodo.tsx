import React, { useEffect, useRef, useState } from 'react'
import "./style.css";

import { Todo } from '../model'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';  
import TodoList from './TodoList';

type Props = {
    todo: Todo,
    todos :Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    
    

}




const SingleTodo:React.FC<Props> = ({todo, todos, setTodos}) => {

   const  [edit, setEdit]= useState<boolean>(false);
   const [editTodo, setEditTodo] = useState<string>(todo.todo)
   const myref = useRef<HTMLInputElement>(null)

  const handleDone = (id:number) => {

    

    setTodos(todos.map((todo)=> todo.id=== id?{...todo,isDone:!todo.isDone}: todo ))

    console.log("I am here")
  
  
  }

  const handleDelete = (id:number) => {

    setTodos(todos.filter((todo)=>todo.id!== id))
    console.log("I am here")
  }


  const handleEdit = (e:React.FormEvent<HTMLFormElement>, id:number)=> {

    e.preventDefault();

    setTodos(todos.map((todo) => todo.id===id?  {...todo, todo:editTodo} :todo))
    setEdit(false)
     

    


  }

  useEffect(()=>
    {myref.current?.focus()},
    [edit]
  )
  
  return (
    <form className='todos__single' action=""  onSubmit={(e)=> handleEdit(e,todo.id)}>


      {
        edit?(
          <input 
          ref={myref}
          value={editTodo}
          onChange={(e)=> setEditTodo(e.target.value)} className='todos___single--test'> 
          </input>

        ) :
        
      todo.isDone? (
        <s className="todos__single--text">{todo.todo}</s>
      ):
        <span className="todos__single--text">
            {todo.todo}
        </span>

      }
       

        <div className="div">
            <span className="icon" onClick={()=>
              {if (!edit && !todo.isDone) {

                setEdit(!edit)
              
            }}}>
            <FontAwesomeIcon icon={faPen} />
            </span>
            <span className="icon" onClick = {() => handleDelete(todo.id)}>
            <FontAwesomeIcon icon={faTrash}  />
            </span>
            <span className="icon"  onClick = {() => handleDone(todo.id)}>
           <FontAwesomeIcon icon={faCheck} />
            </span>
      
      
        </div>
    </form>
  )
  
}

export default SingleTodo
