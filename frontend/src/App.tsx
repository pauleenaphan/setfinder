import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { SetList } from './pages/SetList';
import { Login, Signup } from './pages/Login-Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/SetList/:artistName" element={<SetList/>}/>
      </Routes>
    </Router>
  )
}

export default App
