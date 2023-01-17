import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './containers/Login';
import Players  from './components/Players';
import Register from './components/Register';
import Games  from './components/Games';
import Courses from './components/Courses';
import Course from './components/Course';
import Dashboard from './containers/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store'
import Sidebar from './components/Sidebar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <Provider store={store} >
        <Router>
                <div className="App">
                    <Sidebar>
                    <Routes>
                        <Route path="/home" element={<Home/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/players" element={<Players/>} />
                        <Route path="/player/:id" element={<Players/>} />
                        <Route path="/games" element={<Games/>} />
                        <Route path="/game/:id" element={<Games/>} />
                        <Route path="/courses" element={<Courses/>} />
                        <Route path="/course/:id" element={<Course/>} />
                        <Route path="/dashboard" element={<Dashboard/>} />
                    </Routes>
                    </Sidebar>
                </div>

        </Router>
  </Provider>
  );
}

export default App;
