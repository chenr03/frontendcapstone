import React from 'react'

function Dashboard(props) {
    // console.log('Props Dashboard Comp: ', props)

    // const playerName = props.name
    // const courseName = props.name
    // const gameName = props.name
return (

    <section className = "dashboardSection">
        <header className = "welcomeDashboard" style={{textAlign: 'center'}}>
            Welcome to Community Disc {props.user} !
        </header>
        <div className = "dashboardHeader" style={{border: '5px solid red', flexDirection: 'row', textAlign: 'center' }}>
            <h1 >
                Dashboard
            </h1>
        </div>
        <div className = "allBoxes">
            <div className = "playersBox" style={{border: '5px solid white', display: 'flex', flexDirection: 'row'}}>
                <h4> Players:  </h4>
                {/*{playerName}*/}
            </div>
            <div className = "coursesBox" style={{border: '5px solid white'}}>
                <h4> Courses:  </h4>
                {/*{courseName}*/}
            </div>
            <div className = "gamesBox" style={{border: '5px solid white'}}>
                <h4> Games:  </h4>
                {/*{gameName}*/}
            </div>
         </div>
    </section>

)}


export default Dashboard;