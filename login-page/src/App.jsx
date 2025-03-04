import React from 'react'
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
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

      
      <Navbar />
      <Login/>
    </div>
  )
}

export default App
