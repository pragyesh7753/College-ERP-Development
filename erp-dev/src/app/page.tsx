import { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import { getBarrierToken } from '../pages/api/RequestInterceptor';
import SideBar from './components/SideBar';

export default function Home() {
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
        <div className="flex">
          <SideBar />
          <div className="flex-grow p-4">
            <Dashboard />
          </div>
        </div>
      ) : (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}
