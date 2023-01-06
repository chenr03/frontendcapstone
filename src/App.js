import './App.css';
import React from 'react';
import Nav from './components/Nav';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
  <Router>
     <div className="App">
         <Nav />
         <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/Tweets" element={<Tweet/>} />
         </Routes>
     </div>
   </Router>
  );
}

export default App;
