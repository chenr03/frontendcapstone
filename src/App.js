import React from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Login from './containers/Login';
import Players  from './components/Players';
import Register from './components/Register';
import Games  from './components/Games';
import AllCourses from './components/AllCourses';
import Course from './components/Course';
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
    return checkAuth() === true ? <Component /> : <Navigate to='/login'></Navigate>;
}



function App() {
  return (
  <Provider store={store} >
        <Router>
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
                        <Route path="/games" element={<Games/>} />
                        <Route path="/game/:id" element={<Games/>} />
                        <Route path="/courses" element={<AllCourses/>} />
                        <Route path="/course/:id" element={<Course/>} />
                        <Route path="/dashboard" element={<Dashboard/>} />
                        <Route path="/CourseDetails/:id" element={<CourseDetails />} />

                        {/* Protected Routing Paths */}
                        <Route path="/users" element={<ProtectedRoute component={Users} />} />
                        <Route path="/users/:id" element={<ProtectedRoute component={User} />} />
                        <Route path="/AddCourse" element={<ProtectedRoute component={AddCourse} />} />

                    </Routes>
                    </Sidebar>
                </div>

        </Router>
  </Provider>
  );
}

export default App;
