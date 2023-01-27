import React from 'react'
import AllCourses from "../containers/AllCourses";
import AddCourse from '../containers/AddCourse';
import { useNavigate} from 'react-router-dom';
// import {logout} from '../containers/Dashboard'
// import {Button} from "@mui/material";

// import {AllCourses} from './AllCourses'

function Dashboard(props) {
    const navigate = useNavigate();

    const logout = () => {

        props.logout(null)
        navigate('/login')
        document.cookie = "loggedin=";
        document.cookie = `token=`;
    }

    console.log('Button for Logout', props.user)


return (

    <section className = "dashboardSection">
        <header className = "welcomeDashboard" style={{textAlign: 'center'}}>
            Welcome to Community Disc {props.user} !
            { props.user !== null ? <button className="logoutButton" onClick={() => logout()}
                     style={{color: 'white'}}>Logout</button> : null}
        </header>
        <div className = "dashboardHeader" style={{ flexDirection: 'row', textAlign: 'center', height: '100px' }}>
            <h1 className = "dashboardText">
                Dashboard
            </h1>
        </div>
        <div className = "allBoxes">
            <div className = "playersBox" style={{border: '5px solid white'}}>
                <h4 className = "playersBoxH4"> Players  </h4>
                {/*<AllPlayers> <AddPlayers/>*/}
            </div>
            <div className = "coursesBox" style={{border: '5px solid white'}}>

                <h4 className = "coursesBoxH4">  Courses  <AddCourse/>  Please click Button to Add New Course </h4>
                <AllCourses style={{alignItems: 'center'}}/>

            </div>
            <div className = "gamesBox" style={{border: '5px solid white'}}>
                <h4 className = "gamesBoxH4"> Games </h4>
                {/*/!*<AllGames>*!/ <AddGame/>*/}
            </div>

         </div>


    </section>

)}


export default Dashboard;