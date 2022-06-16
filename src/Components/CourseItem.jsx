import React from 'react'
import './CourseItem.css'
export default function CourseItem({name,handleClick}) {
  return (
   <li>
    <div onClick = {()=>handleClick(name)} className="courseName">
      <h3>{name}</h3>
    </div>
   </li>
  )
}
