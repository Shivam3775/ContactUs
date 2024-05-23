import React from 'react'


const Button=(props)=> {
  return (
    <button className={props.isOutline ? 'outline_btn': 'primary_btn'}>
     {props.icon}
     {props.text}
    </button>
  )
}

export default Button