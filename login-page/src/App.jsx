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
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(src/assets/saitm-bg.png)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.4',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Logo */}
      <Navbar />
      {/* Main Content */}
      <main className="z-10 flex flex-col items-center min-h-[calc(100vh-80px)]">


        {showForgotPassword ? (
          <ForgotPassword onBack={() => setShowForgotPassword(false)} />
        ) : (
          <Login onForgotPassword={() => setShowForgotPassword(true)} />
        )}
      </main>

      {/* <Login />
      <ForgotPassword/> */}
    </div>
  )
}

export default App
