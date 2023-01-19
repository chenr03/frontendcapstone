import React from 'react'

function Dashboard(props) {
    // console.log('Props Dashboard Comp: ', props)
return (

    <section>
        <div className = "welcomeDashboard">
            Welcome to Community Disc, {props.user} !
        </div>
    </section>


)}


export default Dashboard;