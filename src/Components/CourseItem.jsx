import React from 'react'
import './CourseItem.css'
export default function CourseItem({name,setcourse}) {
  return (
   <li>
    <div onClick = {setcourse} className="courseName">
      <h3>{name}</h3>
    </div>
   </li>
  )
}
