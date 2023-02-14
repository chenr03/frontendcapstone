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
import AddPlayer from '../containers/AddPlayer'

const AllPlayers = (props) => {
    const {id} = useParams();
    const [players, setPlayers] = useState([])

    const player = props.players.find((player) => player.id === +id);
    console.log(player);
    console.log('Currently online: ', props.online)

    useEffect(() => {
        // Get all courses
        fetch(`http://localhost:8080/Players/`)
            .then(response => {
                console.log('All Players:', response)
                return response.json()
            }).then((data) => {
            console.log('All Players Data:', data)
            setPlayers(data)
        })

        // empty dependency array means this effect will only run once
    }, []);


    return (
        <div className="main-listings">
            {props.online && (
                <AddPlayer
                    players = {props.players}
                />
            )}

            <Container>
                <Table className = "playersTable">
                    <TableHead style={{textDecoration: 'none'}}>
                        <TableRow>
                            <TableCell style={{color: '#343a40', fontWeight: 'Bolder', fontSize: '20px'}}> Name </TableCell>

                            {
                                props.online && (
                                    <TableCell delete =  {props.players.delete}
                                    />
                                )}

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {console.log('Players:', players)}

                        {players.map((p, idx) => {
                            return( <TableRow key={p.playerId}>
                                    <TableCell  scope="row" style={{color: 'white'}}>
                                        <Typography>
                                            <Link
                                                to={`/PlayerDetails/${p.playerId}`}
                                                component="button"
                                                variant="header1"
                                                style={{ color: '#343a40'}}>
                                                {p.playerName}
                                            </Link>
                                        </Typography>
                                    </TableCell>
                                    {/*<TableCell  scope="row">{c.courseId.courseName["Course Name"]}</TableCell>*/}

                                    {
                                        props.online && (
                                            <TableCell>
                                                <DeleteIcon
                                                    // add onClick method here
                                                    onClick={() => props.removePlayer(p.playerId)}
                                                    className="iconTextRedPlayer" />
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



export default AllPlayers;