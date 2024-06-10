import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Todos = () => {
  const [todos,setTodos] = useState([])
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then(response=>{
      console.log(response)
      setTodos(response.data)
    })
  },[])
  return (
    <div className='todos'>
      <h1 className='text-center my-3'>Todos</h1>
     <table className='table table-bordered table-hover table-striped'>
      <thead>
        <tr>
          <th>userId</th>
          <th>id</th>
          <th>title</th>
          <th>completed</th>
          
          
          
        </tr>
      </thead>
      <tbody>
        {
          todos.map((item,index)=>(
            <tr key={index}>
            <td>{item.userId}</td>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.completed}</td>
           
            
            </tr>
          ))
        }
      </tbody>
     </table>
    </div>
  )
}

export default Todos
