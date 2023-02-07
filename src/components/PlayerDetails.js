import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';


const PlayerDetails = (props) => {
    let { id } = useParams();
    // console.log(id);
    const player = props.players.find(player => player.id === +id)

    const [players, setPlayers] = useState()
    console.log(players)

    console.log('player object', player);

    useEffect(() => {
        // Get all courses
        fetch(`http://localhost:8080/player/${id}`)
            .then(response => {
                console.log('All Players by Id:', response)
                return response.json()
            }).then((data) => {
            console.log('this player:', data)
            setPlayers(data)
        })

        // empty dependency array means this effect will only run once
    }, []);


    if(!players) return <div> Loading.... </div>


    return (
        <Container maxWidth="sm" className="gameContainer" style={{marginTop: '15%'}} >
            <h1 className = "gamesBoxH1" style={{textAlign: 'center', backgroundColor: '#343a40', color: 'white', border: '2px solid white'}}> {players.playerName} </h1>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole1Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole2Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole3Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole4Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole5Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole6Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole7Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole8Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole9Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole10Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole11Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole12Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole13Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole14Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole15Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole16Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole17Score}</p>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.hole18Score}</p>


        </Container>
    )
}

export default PlayerDetails;