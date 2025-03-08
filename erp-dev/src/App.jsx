import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ForgotPassword from './components/ForgotPassword';

function App() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: "url(src/assets/saitm-bg.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.4',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Logo */}
      {/* <Navbar /> */}
      {/* Main Content */}
      <main className="z-10 flex flex-col items-center  ">

        
        {/* Glass Card */}
        <div className={`relative  bg-white rounded-2xl shadow-2xl border border-white/20 p-8 top-40 z-10`}>

<div className='flex transition-transform duration-500' >
{showForgotPassword ? (
            <ForgotPassword onBack={() => setShowForgotPassword(false)} />
          ) : (
            <Login onForgotPassword={() => setShowForgotPassword(true)} />
          )}
         
</div>
         <p className='my-6 mx-10 text-sm font-normal'>© 2025 St. Andrews Institute of Technology and Management All Rights Reserved</p>
        
        </div>
        
      </main>
    </div>
  )
}

export default App