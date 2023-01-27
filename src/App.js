// Starter Components
import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Sidebar from './components/Sidebar';
import Dashboard from './containers/Dashboard';

// Auth Components
import Login from './containers/Login';
import Register from './components/Register';
// import Logout from './components/Logout';

// Player Components
import AllPlayers  from './components/AllPlayers';
import Player from './components/Player';
import AddPlayer from './components/AddPlayer';

// Game Components
import AllGames  from './components/AllGames';
import Game from './components/Game';
import AddGame from './components/AddGame';

// Course Components
import AllCourses from './containers/AllCourses';
import Course from './components/Course';
import AddCourse from './containers/AddCourse';
import CourseDetails from "./containers/CourseDetails";
import FindCourse from './components/FindCourse';

// User Components
import Users from './components/Users';
import User from './components/User';

// App Components
import { Provider } from 'react-redux';
import store from './redux/store'
import cookie from 'cookie';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return !!cookies['loggedin']

};



const ProtectedRoute = (props) => {
    const {component: Component} = props
    return checkAuth() === true ? <Component /> : <Navigate to='/home'></Navigate>;
}



function App() {
  return (
  <Provider store={store} >
        <Router>
            <main style={{width: '100%'}}>
                <header className="header" >


                    <Sidebar>
                         <Routes>
                            {/* Normal Routing Paths */}
                            <Route path="/" element={<Home/>} />
                            <Route path="/home" element={<Home/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/login" element={<Login/>} />
                            {/*<Route path="/logout" element={<Logout/>} />*/}
                            <Route path="/register" element={<Register/>} />
                            <Route path="/players" element={<AllPlayers/>} />
                            <Route path="/player/:id" element={<Player/>} />
                            <Route path="/games" element={<AllGames/>} />
                            <Route path="/game/:id" element={<Game/>} />
                            <Route path="/courses" element={<AllCourses/>} />
                            <Route path="/course/:id" element={<Course/>} />
                            <Route path="/CourseDetails/:id" element={<CourseDetails />} />


                            {/* Protected Routing Paths */}
                            <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
                            <Route path="/users" element={<ProtectedRoute component={Users} />} />
                            <Route path="/users/:id" element={<ProtectedRoute component={User} />} />
                            <Route path="/AddCourse" element={<ProtectedRoute component={AddCourse} />} />
                            <Route path="/AddGame" element={<ProtectedRoute component={AddGame} />} />
                            <Route path="/AddPlayer" element={<ProtectedRoute component={AddPlayer} />} />
                            <Route path="/FindCourse" element={<ProtectedRoute component={FindCourse} />} />


                        </Routes>
                    </Sidebar>
                </header>
                <footer className="footer"></footer>
            </main>
        </Router>
  </Provider>
  );
}

export default App;
