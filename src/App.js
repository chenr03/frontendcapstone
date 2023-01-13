import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './containers/Login';
import Players  from './components/Players';
import Register from './components/Register';
import Games  from './components/Games';
import Courses from './components/Courses';
import Dashboard from './containers/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Provider store={store} >
      <Router>
         <div className="App">
             <Nav />
             <Routes>
                 <Route path="/" element={<Home/>} />
                 <Route path="/login" element={<Login/>} />
                 <Route path="/register" element={<Register/>} />
                 <Route path="/players" element={<Players/>} />
                 <Route path="/games" element={<Games/>} />
                 <Route path="/courses" element={<Courses/>} />
                 <Route path="/dashboard" element={<Dashboard/>} />


            </Routes>
         </div>
       </Router>
  </Provider>
  );
}

export default App;
