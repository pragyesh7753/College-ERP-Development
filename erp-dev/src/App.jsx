import React, { useState } from 'react'
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import ForgotPassword from './components/ForgotPassword';
import Dashboard from './components/SideBar';
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Dash_board from './pages/Dash_board';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SideBar from './components/SideBar';


function App() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);



//     <div className="min-h-screen relative">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-0 "
//         style={{
//           backgroundImage: "url(src/assets/saitm-bg.png)",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           opacity: '0.4',
//           backgroundRepeat: 'no-repeat',
//           backgroundAttachment: 'fixed',
//         }}
//       />

//       
//       <main className="z-10 flex flex-col items-center  ">

        
//         {/* Glass Card */}
//         <div className={`relative  bg-white rounded-2xl shadow-2xl border border-white/20 p-8 top-40 z-10`}>

// <div className='flex transition-transform duration-500' >
// {showForgotPassword ? (
//             <ForgotPassword onBack={() => setShowForgotPassword(false)} />
//           ) : (
//             <Login onForgotPassword={() => setShowForgotPassword(true)} />
//           )}
         
// </div>
//          <p className='my-6 mx-10 text-sm font-normal'>© 2025 St. Andrews Institute of Technology and Management All Rights Reserved</p>
        
//         </div>
        
//       </main>
//     </div>


  return (
<>

<BrowserRouter>
<SideBar >
<Routes>
    <Route path='/' element ={<Dash_board/>}/>
    <Route path='/Home' element ={<Home/>}/>
    <Route path='/Contact' element ={<Contact />}/>
    <Route path='/About' element ={<About/>}/>
</Routes>
</SideBar>
  </BrowserRouter>


 
</>

  )

  
}

export default App