import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Login from './containers/Login';
import AllPlayers  from './components/AllPlayers';
import Register from './components/Register';
import AllGames  from './components/AllGames';
import AddGame from './components/AddGame'
import Game from './components/Game'
import AllCourses from './containers/AllCourses';
import Course from './components/Course';
import FindCourse from './components/FindCourse'
import Dashboard from './containers/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store'
import Sidebar from './components/Sidebar';
import cookie from 'cookie';
import Users from './components/Users';
import User from './components/User';
import AddCourse from './containers/AddCourse';
import CourseDetails from "./containers/CourseDetails";
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
                            <Route path="/home" element={<Home/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/login" element={<Login/>} />
                            <Route path="/register" element={<Register/>} />
                            <Route path="/players" element={<AllPlayers/>} />
                            {/*<Route path="/player/:id" element={<Player/>} />*/}
                            <Route path="/games" element={<AllGames/>} />
                            <Route path="/game/:id" element={<Game/>} />
                            <Route path="/courses" element={<AllCourses/>} />
                            <Route path="/course/:id" element={<Course/>} />
                            <Route path="/CourseDetails/:id" element={<CourseDetails />} />
                             <Route path="/dashboard" element={<Dashboard/>} />

                            {/* Protected Routing Paths */}
                            <Route path="/users" element={<ProtectedRoute component={Users} />} />
                            <Route path="/users/:id" element={<ProtectedRoute component={User} />} />
                            <Route path="/AddCourse" element={<ProtectedRoute component={AddCourse} />} />
                            <Route path="/AddGame" element={<ProtectedRoute component={AddGame} />} />
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
