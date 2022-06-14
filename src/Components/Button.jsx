import React from 'react'
import './Button.css'
export default function Button({label,useClass,size}) {
  
  return (
   <button className={useClass}>{label}</button>
  )
}
