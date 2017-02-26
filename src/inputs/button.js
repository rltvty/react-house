import React from 'react'

import { Post } from 'utils/api'
import './button.css'

const Button = ({name, text, url, body}) => {
  const handleClick = () => Post(url, body)

  return (
    <div className='button' id={name}>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

export { Button }
