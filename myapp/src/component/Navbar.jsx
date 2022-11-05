import React, { useState } from 'react';
import Todo from './todolist.jsx';

export default function Fun(){

  const [name,setname]=useState("");
  const [txt,settxt]=useState([]);

  const change=(e)=>{
    setname(e.target.value);
  }


  const click=(e)=>{
    e.preventDefault();
    settxt((event)=>{
      return(
        [...event,name]
      )
    })
    setname(" ")
  }
   const deleteitem=(id)=>{
    return(
      settxt((data)=>{
        return data.filter((arr,index)=>{
          return (
            index!==id
          )
        })
      })
      )
   }
  return(
    <>
    <form>
    <h1></h1>
    <input type="text" placeholder="Enter text" value={name} onChange={change}></input>
    <button onClick={click}><i className="fa-solid fa-plus"></i></button>
    
      <li style={{listStyleType:"none"}}>
        {txt.map((pre,index)=>{
        return <Todo 
        text={pre} 
        key={index}
        id={index}
        onSelect={deleteitem}
        />     
        })}
      </li>
    </form>
    </>
  )
 }