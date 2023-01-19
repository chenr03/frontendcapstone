import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Login from './containers/Login';
import Players  from './components/Players';
import Register from './components/Register';
import AllGames  from './components/AllGames';
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
            <div className="header" >
                <div className="App">

                    <Sidebar>
                        <Routes>
                            {/* Normal Routing Paths */}
                            <Route path="/home" element={<Home/>} />
                            <Route path="/about" element={<About/>} />
                            <Route path="/login" element={<Login/>} />
                            <Route path="/register" element={<Register/>} />
                            <Route path="/players" element={<Players/>} />
                            <Route path="/player/:id" element={<Players/>} />
                            <Route path="/games" element={<AllGames/>} />
                            <Route path="/game/:id" element={<Game/>} />
                            <Route path="/courses" element={<AllCourses/>} />
                            <Route path="/course/:id" element={<Course/>} />
                            <Route path="/dashboard" element={<Dashboard/>} />
                            <Route path="/CourseDetails/:id" element={<CourseDetails />} />

                            {/* Protected Routing Paths */}
                            <Route path="/users" element={<ProtectedRoute component={Users} />} />
                            <Route path="/users/:id" element={<ProtectedRoute component={User} />} />
                            <Route path="/AddCourse" element={<ProtectedRoute component={AddCourse} />} />
                            <Route path="/FindCourse" element={<ProtectedRoute component={FindCourse} />} />

                        </Routes>
                    </Sidebar>
                </div>
            </div>
        </Router>
  </Provider>
  );
}

export default App;
