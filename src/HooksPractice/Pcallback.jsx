import React, { useCallback, useState } from 'react'
import { Button } from '../components/Button'

const Pcallback = () => {
    const [count,setCount] = useState(0);
    const increment = useCallback(() => {
        setCount((prev)=> prev + 1)
            },[])
    const decrement =useCallback( () =>{
        setCount((prev)=> prev - 1)
            },[])
  return (
    <div className='text-center'>
        <h1 className='text-2xl font-bold'>{count}</h1>
        <div className='flex justify-center gap-4 mt-8'>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    </div>
  )
}

export default Pcallback