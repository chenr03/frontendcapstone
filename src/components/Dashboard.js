import React from 'react'

function Dashboard(props) {
    // console.log('Props Dashboard Comp: ', props)
return (

    <section className = "welcomeDashboard">
        Welcome to Community Disc {props.user} !
    </section>

)}


export default Dashboard;