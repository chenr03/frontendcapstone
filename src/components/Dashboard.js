import React from 'react'
import AllCourses from "../containers/AllCourses";
import AddCourse from '../containers/AddCourse';
import AllGames from '../containers/AllGames';
import AddGame from '../containers/AddGame'
import AllPlayers from '../containers/AllPlayers';
import AddPlayer from '../containers/AddPlayer'
import { useNavigate} from 'react-router-dom';


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
            { props.user !== null ? <button className="logoutButton" onClick={() => logout()}>Logout</button> : null}
        </header>
        <div className = "dashboardHeader" style={{ flexDirection: 'row', textAlign: 'center', height: '100px' }}>
            <h1 className = "dashboardText">
                Dashboard
            </h1>
        </div>

        <div className = "allBoxes">

            <div className = "playersBox" style={{border: '5px solid white'}}>
                <h4 className = "playersBoxH4"> Players  </h4>
                <p> <AddPlayer/> <AllPlayers/>  </p>
            </div>

            <div className = "coursesBox" style={{border: '5px solid white'}}>

                <h4 className = "coursesBoxH4">  Courses </h4>
                <h5 className = "coursesBoxH5">  Please click Button to Add New Course </h5>
               <p> <AddCourse/>  <AllCourses style={{alignItems: 'center'}}/> </p>

            </div>
            <div className = "gamesBox" style={{border: '5px solid white'}}>
                <h4 className = "gamesBoxH4"> Games  </h4>
                <p> <AddGame/> <AllGames/></p>
            </div>

         </div>


    </section>

)}


export default Dashboard;