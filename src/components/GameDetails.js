import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Container} from '@mui/material';


const GameDetails = (props) => {
    let { id } = useParams();
    // console.log(id);
    const game = props.games.find(game => game.id === +id)

    const [games, setGame] = useState()
    console.log(games)

    console.log('Games object', game);

    useEffect(() => {
        // Get all courses
        fetch(`http://localhost:8080/game/${id}`)
            .then(response => {
                console.log('All Games:', response)
                return response.json()
            }).then((data) => {
            console.log('this game:', data)
            setGame(data)
        })

        // empty dependency array means this effect will only run once
    }, [id]);


    if(!games) return <div> Loading.... </div>


    return (
        <Container maxWidth="sm" className="gameContainer" style={{marginTop: '15%'}} >
            <h1 className = "gamesBoxH1" style={{textAlign: 'center', backgroundColor: '#343a40', color: 'white', border: '2px solid white'}}> {games.gameName} </h1>
            <p className = "gamesBoxH1" style={{height: '50px', width: '100vw', padding: '5px', textAlign: 'center', display: "table-cell", verticalAlign: "center", backgroundColor: '#343a40', color: 'white', border: '2px solid white'}}> {games.gameDate} </p>


        </Container>
    )
}

export default GameDetails