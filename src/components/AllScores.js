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
import AddScore from '../containers/AddScore'

const AllScores = (props) => {
    const {id} = useParams();
    const [scores, setScores] = useState([])
    console.log('Scores: ', scores)

    const score = props.scores.find((score) => score.id === +id);
    console.log(score);
    // console.log('Currently online: ', props.online)

    useEffect(() => {
        // Get all courses
        fetch(`http://localhost:8080/scores/`)
            .then(response => {
                console.log('All ScoreCards:', response)
                return response.json()
            }).then((data) => {
            console.log('All Score Data:', data)
            setScores(data)
        })

        // empty dependency array means this effect will only run once
    }, [id]);


    return (
        <div className="scores-listings">
            {props.online && (
                <AddScore
                    scores = {props.scores}
                />
            )}

            <Container>
                <Table className = "scoresTable">
                    <TableHead className = "tableHeadScores" style={{textDecoration: 'none'}}>
                        <TableRow>
                            <TableCell style={{color: '#343a40', fontWeight: 'Bolder', fontSize: '20px'}}> Name </TableCell>

                            {
                                props.online && (
                                    <TableCell delete = {props.scores.delete}
                                    />
                                )
                            }

                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {scores.map((s, idx) => {
                            return( <TableRow key={s.scoreId}>
                                    <TableCell  scope="row" style={{color: 'white'}}>
                                        <Typography>
                                            <Link
                                                to={`/ScoreDetails/${s.scoreId}`}
                                                component="button"
                                                variant="header1"
                                                style={{ color: '#343a40'}}>
                                                {s.playerScoreName}
                                            </Link>
                                        </Typography>
                                    </TableCell>
                                    {/*<TableCell  scope="row">{c.courseId.courseName["Course Name"]}</TableCell>*/}

                                    {
                                        props.online && (
                                            <TableCell>
                                                <DeleteIcon
                                                    // add onClick method here
                                                    onClick={() => props.removeGame(s.scoreId)}
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



export default AllScores;