import { useEffect, useState } from 'react'
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import { getBarrierToken } from './networking/RequestInterceptor';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  


  
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
        <Dashboard />
      ) : (
        <LoginPage setIsLoggedIn={setIsLoggedIn} />
      )}
    </>
  );
}

export default App;