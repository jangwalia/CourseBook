import React from 'react';
import { useState } from 'react';
import './App.css';
import Courselist from './Components/Courselist';
function App() {
  const coursesList = [
    {id : 1, name : "Object Oriented Programming", isRequired : true},
    {id : 2, name : "React", isRequired : true},
    {id : 3, name : "C++", isRequired : true}
  ]

  const [course,setCourse] = useState("Object Oriented Programming")
  
  return (
    <div className="App">
    <Courselist courses = {coursesList} name = {course} setCourse = {setCourse} />
    </div>
  );
}

export default App;
