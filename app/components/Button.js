import React from 'react'

const Button = (props) => {
  return (
  <button
    onClick={props.handeClick}>{props.text}
  </button>
  )
}

export default Button
