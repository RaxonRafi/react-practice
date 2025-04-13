import React, { memo } from 'react'

export const Button = memo(({onClick,children}) => {
    console.log(`Button Clicked ${children}`);
  return (
    <button className='bg-black p-5 text-white' onClick={onClick}>{children}</button>
  )
})
