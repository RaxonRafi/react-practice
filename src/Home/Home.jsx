import React, { useState } from 'react'

export const Home = () => {
    const [code, setCode] = useState('')
  return (
    <div>
        <button onClick={()=>setCode('C/C++')}>C/C++</button>
        <button onClick={()=>setCode('Python')}>Python</button>
        <button onClick={()=>setCode('PHP')}>PHP</button>
        <button onClick={()=>setCode('JavaScript')}>JavaScript</button>
        <button onClick={()=>setCode('Java')}>Java</button>
        <button onClick={()=>setCode('Go')}>Go</button>
        <button onClick={()=>setCode('Ruby')}>Ruby</button>
        <button onClick={()=>setCode('Swift')}>Swift</button>
        <button onClick={()=>setCode('Kotlin')}>Kotlin</button>
        <button onClick={()=>setCode('Rust')}>Rust</button>
        <button onClick={()=>setCode('Dart')}>Dart</button>
        <button onClick={()=>setCode('R')}>R</button>
        <button onClick={()=>setCode('Scala')}>Scala</button>
        <button onClick={()=>setCode('Haskell')}>Haskell</button>

        <div>
            <span>{code}</span>
        </div>

    </div>
  )
}
