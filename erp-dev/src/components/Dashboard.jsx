import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import Navigation from './Navigation';

const Dashboard = () => {

  const [isActive, setIsActive] = useState(false)


function handleToggle(){
    setIsActive(!isActive)
}

  return (
    <div className='w-full h-screen '>
      <div className="container w-full h-screen flex">

        {/* Conditional rendering for Navigation */}
<Navigation isActive={isActive} setIsActive={setIsActive}/>
        <nav className='w-full h-15 flex justify-between'>
          <IoMenu onClick={handleToggle}/>
          <h5>this is something....</h5>
        </nav>
      </div>
    </div>
  )
}

export default Dashboard
