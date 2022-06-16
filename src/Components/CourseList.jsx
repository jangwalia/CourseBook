import React from 'react'
import CourseItem from './CourseItem'
import './CourseItem.css'
export default function CourseList({courses,name,handleClick}) {
  return (
    <ul>
      {courses.map(course => 
      <CourseItem
      key = {course.id}
      name = {course.name}
      handleClick={()=>handleClick(course.name)}
      
      />)}
    </ul>
  )
}
