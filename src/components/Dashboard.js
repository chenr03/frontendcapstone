import React, {useState} from 'react'

// import {AllCourses} from './AllCourses'

function Dashboard(props) {
    // console.log('Props Dashboard Comp: ', props)

    // const playerName = props.name
    const [courses, setCourses] = useState([])

    // const gameName = props.name
return (

    <section className = "dashboardSection">
        <header className = "welcomeDashboard" style={{textAlign: 'center'}}>
            Welcome to Community Disc {props.user} !
        </header>
        <div className = "dashboardHeader" style={{border: '5px none red', flexDirection: 'row', textAlign: 'center', height: '300px' }}>
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
                <h4 className = "coursesBoxH4"> Courses  </h4>
                <ul>
                    <li>
                        {courses} {setCourses}
                    </li>
                </ul>

            </div>
            <div className = "gamesBox" style={{border: '5px solid white'}}>
                <h4 className = "gamesBoxH4"> Games  </h4>
                {/*{gameName}*/}
            </div>
         </div>
    </section>

)}


export default Dashboard;