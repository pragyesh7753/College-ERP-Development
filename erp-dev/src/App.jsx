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
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Logo */}
      <Navbar />
      {/* Main Content */}
      <main className="z-10 flex flex-col items-center">
        {/* Glass Card */}
        <div className="backdrop-blur-sm bg-white/1 rounded-2xl shadow-xl border border-white/20 p-8 z-10">
          {showForgotPassword ? (
            <ForgotPassword onBack={() => setShowForgotPassword(false)} />
          ) : (
            <Login onForgotPassword={() => setShowForgotPassword(true)} />
          )}
        </div>
      </main>
    </div>
  )
}

export default App