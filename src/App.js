import React from 'react';
import {
  BrowserRouter, NavLink, Routes, Route,
} from 'react-router-dom';
import './App.css';
import './styles/style.css';
import './styles/homestyle.css';
import Home from './pages/Home';
import CalculatorDisplay from './pages/CalculatorDisplay';
import DisplayQuotes from './components/DisplayingQuotes';

function App() {
  const activeClassName = 'nav-active';
  return (
    <BrowserRouter>
      <header>
        <h1>Math Magicians</h1>
        <nav>
          <NavLink to="home" className={({ isActive }) => (isActive ? activeClassName : undefined)}> Home </NavLink>
          <li>| </li>
          <NavLink to="calculatordisplay" className={({ isActive }) => (isActive ? activeClassName : undefined)}> Calculator </NavLink>
          <li>| </li>
          <NavLink to="displayquote" className={({ isActive }) => (isActive ? activeClassName : undefined)}>Quote</NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/calculatordisplay" element={<CalculatorDisplay />} />
        <Route path="/displayquote" element={<DisplayQuotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
