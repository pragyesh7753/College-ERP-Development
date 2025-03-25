import { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import { getBarrierToken } from './networking/RequestInterceptor';
import SideBar from './components/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router';
import Students from './pages/Students';
import Faculty from './pages/Faculty';
import Schedule from './pages/Schedule';
import Courses from './pages/Courses';
import  Settings  from './pages/Settings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  // Update document title based on login state
  useEffect(() => {
    document.title = isLoggedIn ? "Admin Dashboard" : "Login Page";
  }, [isLoggedIn]);
  
  useEffect(() => {
    getBarrierToken('accessToken') ? setIsLoggedIn(true) : setIsLoggedIn(false);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isLoggedIn ? (
        <BrowserRouter>
          <div className="flex">
            <SideBar />
            <div className="flex-grow p-4">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/students" element={<Students />} />
                <Route path="/faculty" element={<Faculty />} />
                <Route path="/schedule" element={<Schedule />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      ) : (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;