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
        <Container maxWidth="sm" className="playerContainer" style={{marginTop: '15%'}} >
            <h1 className = "playersBoxH1" style={{textAlign: 'center', backgroundColor: '#343a40', color: 'white', border: '2px solid white'}}> {players.playerName} </h1>
                <p className = 'playerDescription' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{players.playerDescription}</p>


        </Container>
    )
}

export default PlayerDetails;


