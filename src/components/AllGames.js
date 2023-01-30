import React, {useEffect, useState} from 'react'
import '../App.css'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import {
    Link,
    useParams
} from 'react-router-dom'
import DeleteIcon from "@mui/icons-material/Delete";
import AddGame from '../containers/AddGame'

const AllGames = (props) => {
    const {id} = useParams();
    const [games, setGames] = useState([])

    const game = props.games.find((game) => game.id === +id);
    console.log(game);
    console.log('Currently online: ', props.online)

    useEffect(() => {
        // Get all courses
        fetch(`http://localhost:8080/Games/`)
            .then(response => {
                console.log('All Games:', response)
                return response.json()
            }).then((data) => {
            console.log('All Games Data:', data)
            setGames(data)
        })

        // empty dependency array means this effect will only run once
    }, []);


    return (
        <div className="gameListings">
            {props.online && (
                <AddGame
                    games = {props.games}
                />
            )}

            <Container>
                <Table className = "gamesTable">
                    <TableHead style={{textDecoration: 'none'}}>
                        <TableRow>
                            <TableCell style={{color: '#343a40', fontWeight: 'Bolder', fontSize: '20px'}}> Name </TableCell>

                            {
                                props.online && (
                                    <TableCell>
                                        Delete
                                    </TableCell>
                                )
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {console.log('Games:', games)}

                        {games.map((g, idx) => {
                            return( <TableRow key={g.gameId}>
                                    <TableCell  scope="row" style={{color: 'white'}}>
                                        <Typography>
                                            <Link
                                                to={`/GameDetails/${g.gameId}`}
                                                component="button"
                                                variant="header1"
                                                style={{ color: '#343a40'}}>
                                                {g.gameName}
                                            </Link>
                                        </Typography>
                                    </TableCell>
                                    {/*<TableCell  scope="row">{courses.description["description"]}</TableCell>*/}
                                    {/*<TableCell  scope="row">{courses.address["address"]}</TableCell>*/}
                                    {/*<TableCell  scope="row">{courses.hours["hours"]}</TableCell>*/}
                                    {
                                        props.online && (
                                            <TableCell>
                                                <DeleteIcon
                                                    // add onClick method here
                                                    onClick={() => props.removeGame(games.id)}
                                                    className="iconTextRed" />
                                            </TableCell>
                                        )
                                    }
                                </TableRow>
                            )})}
                    </TableBody>
                </Table>
            </Container>
        </div>
    );
};



export default AllGames;