import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';


const ScoreDetails = (props) => {
    let { id } = useParams();
    // console.log(id);
    const score = props.scores.find(score => score.id === +id)

    const [scores, setScores] = useState()
    console.log(scores)

    console.log('scores object', score);

    useEffect(() => {
        // Get all courses
        fetch(`http://localhost:8080/score/${id}`)
            .then(response => {
                console.log('All Scores by Id:', response)
                return response.json()
            }).then((data) => {
            console.log('this score:', data)
            setScores(data)
        })

        // empty dependency array means this effect will only run once
    }, [id]);


    if(!scores) return <div> Loading.... </div>


    return (
        <Container maxWidth="sm" className="scoreContainer" style={{marginTop: '5%'}} >
            <h1 className = "scoreBoxH1" style={{textAlign: 'center', backgroundColor: '#343a40', color: 'white', border: '2px solid white'}}> {scores.playerScoreName} </h1>

            <p className = 'Hole1Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole1Score}</p>
            <p className = 'Hole2Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole2Score}</p>
            <p className = 'Hole3Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole3Score}</p>
            <p className = 'Hole4Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole4Score}</p>
            <p className = 'Hole5Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole5Score}</p>
            <p className = 'Hole6Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole6Score}</p>
            <p className = 'Hole7Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole7Score}</p>
            <p className = 'Hole8Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole8Score}</p>
            <p className = 'Hole9Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole9Score}</p>
            <p className = 'Hole10Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole10Score}</p>
            <p className = 'Hole11Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole11Score}</p>
            <p className = 'Hole12Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole12Score}</p>
            <p className = 'Hole13Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole13Score}</p>
            <p className = 'Hole14Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole14Score}</p>
            <p className = 'Hole15Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole15Score}</p>
            <p className = 'Hole16Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole16Score}</p>
            <p className = 'Hole17Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole17Score}</p>
            <p className = 'Hole18Score' style={{ textAlign: 'left', backgroundColor: '#343a40', color: 'white' }}>{scores.Hole18Score}</p>


        </Container>
    )
}

export default ScoreDetails;


