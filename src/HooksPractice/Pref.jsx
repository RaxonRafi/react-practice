import React, { useRef } from 'react'

export const Pref = () => {
    let vedioRef = useRef(null)

    function handleplay(){
        vedioRef.current.play();
    }
    function handlepause(){
        vedioRef.current.pause();
    }
    
  return (
    <>
        <h1>useRef Practice</h1>
        <video ref={vedioRef} width="560" height="315" src="/demo.mp4"></video>
        <div>
            <button onClick={handleplay}>play</button>
            <button onClick={handlepause}>pause</button>
        </div>
    </>
  )
}
