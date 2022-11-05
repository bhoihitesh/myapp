import React from "react";

export default function Todo(props){
    return(
        <>
        <li><i className="fa-solid fa-xmark" 
        onClick={()=>{props.onSelect(props.id)}}>
        </i>&nbsp;&nbsp;{props.text}</li>
        </>
      )
}