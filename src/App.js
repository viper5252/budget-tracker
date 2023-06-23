import './App.css';
import Chart from './components/Chart'
import Assistant from './components/Assistant'
import Home from './components/Home'
// import { useState, useEffect } from 'react';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <nav className='nav'>
      <ul className='ul'>
        <Link to="/" >
        <li className='li' >Home</li>
        </Link>
        <Link to="/Chart" >
        <li className='li' >Chart</li>
        </Link>
        <Link to="/Assistant" >
        <li className='li' >Assistant</li>
        </Link>
      </ul>
    </nav>
    <Routes>
      <Route path='/'index element={<Home/>}></Route>
      <Route path='/chart'index element={<Chart/>}></Route>
      <Route path='/assistant'index element={<Assistant/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
