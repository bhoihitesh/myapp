import React from 'react'

const Deltodo = (props) => {
  return (
    <>
      <li><i class="fa-duotone fa-trash" onClick={()=>{props.onSelect(props.id)}}></i>
      {props.text}
      </li>
    </>
  )
}

export default Deltodo
