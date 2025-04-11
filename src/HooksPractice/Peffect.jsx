import React, { useEffect, useState } from 'react'

export const Peffect = () => {
    let [time,setTime] = useState(0)

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString()) 
        },1000)
    },[])
    
  return (
    <>
        <div>
            <h1>useEffect Practice</h1>
            <span>{time}</span>
        </div>
    </>
  )
}
