import Cookie from './components/HomePage'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/login" element={<h1> hi</h1>}/>
    </Routes>
      <HomePage />
    </div>
  );
}

export default App;
