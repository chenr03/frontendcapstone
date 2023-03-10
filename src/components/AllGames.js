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
        fetch(`http://localhost:8080/games/`)
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
        <div className="main-listings">
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
                                    <TableCell delete = {props.games.delete}
                                    />
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
                                    {/*<TableCell  scope="row">{c.courseId.courseName["Course Name"]}</TableCell>*/}

                                    {
                                        props.online && (
                                            <TableCell>
                                                <DeleteIcon
                                                    // add onClick method here
                                                    onClick={() => props.removeGame(g.gameId)}
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