import React from 'react'
import './Button.css'

function Button(props) {
  return (
    <button type="submit" onClick={props.onClick}>
    {props.label}
  </button>
  )
}

export default Button