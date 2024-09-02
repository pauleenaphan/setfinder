import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from './pages/home';
import { SetList } from './pages/SetList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SetList/:artistName" element={<SetList/>}/>
      </Routes>
    </Router>
  )
}

export default App
