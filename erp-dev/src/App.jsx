import React, { useState } from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Dash_board from './pages/Dash_board';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import SideBar from './components/SideBar';
import LoginPage from './components/LoginPage';



function App() {
 


const [isLoggedIn, setIsLoggedIn] = useState(false);

return (
  <BrowserRouter>
    {isLoggedIn ? (
      <div className="flex">
        <SideBar />
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dash_board />} />
            <Route path="/" element={<Dash_board />} />
          </Routes>
        </main>
      </div>
    ) : (
      <LoginPage setIsLoggedIn={setIsLoggedIn} />
    )}
  </BrowserRouter>
);
};

 



  


export default App