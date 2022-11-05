import React from 'react';
import { useState } from 'react';
import { questions } from './practice1';
import Task from './practice'
    const Arr=()=>{
        const[data,setdata]=useState(questions)
    
    return(
        <>
            {
             data.map((show)=>{
                return <Task/>
             })   
            }
        </>
    )
}

export default Arr;
