import React from 'react'
import './Button.css'
import classNames from "classnames";
export default function Button({useClass,label,handleClick,disabled}) {
  const btnClass =  classNames("button",{
    'base' : useClass === 'base',
    'cancel' : useClass === 'cancel',
    'disabled' : useClass === 'disabled'
  })
  return (
   <button disabled onClick = {handleClick}  className={btnClass}>{label}</button>
  ) 
}
