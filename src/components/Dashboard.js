import React from 'react'

function Dashboard(props) {



    console.log('Props Dashboard Comp: ', props)
return (

    <section>
       Hello {props.user}!
    </section>

)}


export default Dashboard;