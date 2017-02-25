import React from 'react'

import { Post } from 'utils/api'

const Button = ({name, text, url, body}) => {
  const handleClick = () => Post(url, body)

  return (
    <div className='button' id={name}>
      <button onClick={handleClick}>{text}</button>
    </div>
  )
}

export { Button }
