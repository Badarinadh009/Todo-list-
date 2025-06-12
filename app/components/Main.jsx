'use client'
import React, { useState } from 'react'
import { FaMapPin } from "react-icons/fa6";
import { IoMdRemoveCircle } from "react-icons/io";

function Main() {
  const [task, setTask]= useState('')
  const [todo, setTodo]= useState([])

  const addTask=()=>{
    if (task.trim() === '') return;
    setTodo([...todo, {text:task, completed:false}])
    setTask('')

  }
  const deleteTask=(index)=>{
    const updatedTodo=todo.filter((_,i)=>(i!==index))
    setTodo(updatedTodo)

  }
  const toggleTask=(index)=>{
    const toggleTodo= [...todo]
    toggleTodo[index].completed=!toggleTodo[index].completed
    setTodo(toggleTodo)
  }
    
  return (
    <div className='w-full h-[100vh] text-center grid grid-cols-2'>
      <div className='text-3xl pt-4 bg-amber-400 h-full'>
      <h1 className='font-bold text-3xl'>Todo List</h1>
      <div className='p-5'>
        <input className='border-b-2 focus:border-blue-300' type='text' value={task} onChange={(e)=>{setTask(e.target.value)}} placeholder='Enter your task' />
        <button onClick={addTask} className='cursor-pointer rounded-3xl bg-black text-white px-4'>Add</button>
        
      </div>
      </div>
      <div className='text-3xl pt-4 bg-blue-400'>
        <h1 className='font-bold'>Your Tasks</h1>
        <ul className='p-4 grid grid-cols-3'>
          {todo.map((item,index)=>(
            <li className='' key={index}>
              <div className='h-[200px] w-[200px] bg-yellow-300  flex flex-col items-center p-2 border-black border-2'>
                <FaMapPin />
                <div className='p-4'>
                  <span className={item.completed ? 'line-through' : ''}>{item.text} </span>
                  <div className='flex justify-between'>
                  <input type='checkbox' checked={item.completed} onChange={()=>{toggleTask(index)}} />
                  <button className='text-red-600 cursor-pointer' onClick={()=>{deleteTask(index)}}><IoMdRemoveCircle size={20}/></button>
                  </div>
                </div>
              </div>
              </li>
              
          ))}
        </ul>
      </div>
    </div>
    
  )
}

export default Main
