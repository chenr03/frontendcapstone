import React from 'react'
import AllCourses from "../containers/AllCourses";
import AddCourse from '../containers/AddCourse';

// import {AllCourses} from './AllCourses'

function Dashboard(props) {
    // console.log('Props Dashboard Comp: ', props)

    // const playerName = props.name


    // const gameName = props.name
return (

    <section className = "dashboardSection">
        <header className = "welcomeDashboard" style={{textAlign: 'center'}}>
            Welcome to Community Disc {props.user} !
        </header>
        <div className = "dashboardHeader" style={{ flexDirection: 'row', textAlign: 'center', height: '100px' }}>
            <h1 className = "dashboardText">
                Dashboard
            </h1>
        </div>
        <div className = "allBoxes">
            <div className = "playersBox" style={{border: '5px solid white'}}>
                <h4 className = "playersBoxH4"> Players  </h4>
                {/*{playerName}*/}
            </div>
            <div className = "coursesBox" style={{border: '5px solid white'}}>

                <h4 className = "coursesBoxH4">  Courses  <AddCourse/>  Please click Button to Add New Course </h4>
                <AllCourses style={{alignItems: 'center'}}/>

            </div>
            <div className = "gamesBox" style={{border: '5px solid white'}}>
                <h4 className = "gamesBoxH4"> Games  </h4>
                {/*{gameName}*/}
            </div>
         </div>
    </section>

)}


export default Dashboard;