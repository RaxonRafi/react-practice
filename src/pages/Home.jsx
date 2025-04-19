import React, { useState } from 'react'
import FormComp from '../components/FormComp'


const Home = () => {
   const [editData, setEditData] = useState(null);
  return (
    <div className='flex items-center justify-around h-screen'>
        <FormComp editData={editData} setEditData={setEditData}/>
    </div>
  )
}

export default Home