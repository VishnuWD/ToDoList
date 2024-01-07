import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { add , remove } from "./features/todo/todoSlice"
import { MdDeleteOutline } from "react-icons/md";


const App = () => {
  const date = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()
  const week = new Date().getDay()

  const weekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
  const [value, setValue] = useState("")
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todos)
  
  return (
    
    <main 
    className="bg-slate-950 w-full h-screen text-slate-200 text-center"
    >

      <h1 className='font-extrabold text-8xl pt-20'>ToDoList.</h1>
      <p className="pb-20">{date}/{month + 1}/{year} {weekNames[week]}</p>
      <div>
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value} className='bg-slate-800  rounded-md w-1/4 h-10 rounded-r-none' />
      <button onClick={(e)=> {
        e.preventDefault()
        dispatch(add(value))
        setValue("")
      }} className='bg-emerald-500 h-10 rounded-md w-16 rounded-l-none font-bold'>+Add</button>
      </div>
      <div className="flex flex-col items-center gap-4 justify-center w-full my-12">

{todo.lists.map((data)=> {
  return (
      <div key={data.id} className="flex justify-between items-center bg-gray-800 p-4 w-2/3 rounded-md">
      <p className="w-11/12">{data.text}</p>
      <button onClick={() => dispatch(remove(data.id))} className="text-red-500 text-[1.5rem]"><MdDeleteOutline /></button>
    </div>
  )
})}
      </div>
      
    </main>
  )
}

export default App