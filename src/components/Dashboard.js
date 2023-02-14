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
                <h5 className = "playersBoxH5">  Click Button to Add New Player </h5>
                <p> <AddPlayer/> <AllPlayers style={{alignItems: 'center'}}/>  </p>
            </div>

            <div className = "coursesBox" style={{border: '5px solid white'}}>

                <h4 className = "coursesBoxH4">  Courses </h4>
                <h5 className = "coursesBoxH5">  Click Button to Add New Course </h5>
                <p> <AddCourse/>  <AllCourses style={{alignItems: 'center'}}/> </p>

            </div>
            <div className = "gamesBox" style={{border: '5px solid white'}}>
                <h4 className = "gamesBoxH4"> Games  </h4>
                <h5 className = "gamesBoxH5">  Click Button to Add New Game </h5>
                <p> <AddGame/> <AllGames style={{alignItems: 'center'}}/></p>
            </div>
         </div>

        <div className = "playTheGameBox" style={{border: '5px solid white'}}>
            <h4 className = "playTheGameBoxH4"> Let's Play Disc Golf </h4>
        </div>


    </section>

)}


export default Dashboard;


/* These are for the last Dashboard Box that keeps track of all the scores */

/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole1Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole2Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole3Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole4Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole5Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole6Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole7Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole8Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole9Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole10Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole11Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole12Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole13Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole14Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole15Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole16Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole17Score}</p>*/
/*<p className = 'playerScores' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.Hole18Score}</p>*/