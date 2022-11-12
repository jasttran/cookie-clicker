
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import SignupPage from './pages/SignupPage';


function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <HomePage setToken={setToken} />
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<LoginPage />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/signup" element={<SignupPage />}/>
    </Routes>
  );
}

export default App;
