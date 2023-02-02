import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Container} from '@mui/material';


const GameDetails = (props) => {
    let { gameId } = useParams();
    // console.log(id);
    const game = props.games.find(game => game.id === +gameId)

    const [games, setGames] = useState()
    console.log(games)

    console.log('Games object', game);

    useEffect(() => {
        // Get all courses
        fetch(`http://localhost:8080/game/${gameId}`)
            .then(response => {
                console.log('All Games:', response)
                return response.json()
            }).then((data) => {
            console.log('this game:', data)
            setGames(data)
        })

        // empty dependency array means this effect will only run once
    }, []);


    if(!games) return <div> Loading.... </div>


    return (
        <Container maxWidth="sm" className="gameContainer" style={{marginTop: '15%'}} >
            <h1 className = "gamesBoxH1" style={{textAlign: 'center', backgroundColor: '#343a40', color: 'white', border: '2px solid white'}}> {this.games.gameName}  </h1>

        </Container>
    )
}

export default GameDetails