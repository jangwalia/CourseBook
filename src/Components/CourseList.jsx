import React from 'react'
import Courseitem from './Courseitem'
import './CourseItem.css'
export default function CourseList({courses,name,setcourse}) {
  return (
    <ul className='courseContainer'>
      {courses.map(course => 
      <Courseitem
      key = {course.id}
      name = {course.name}
      setcourse={()=>console.log(course.name)}
      
      />)}
    </ul>
  )
}
