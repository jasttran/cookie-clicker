
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import LoggedInHomePage from './components/pages/LoggedInHomePage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/loggedIn" element={<LoggedInHomePage />} />
      <Route path="/auth/login" element={<Login />}/>
      <Route path="/about" element={<AboutPage />}/>
      <Route path="/auth/register" element={<Register />}/>
    </Routes>
  );
}

export default App;
