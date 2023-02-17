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
        <Container maxWidth="sm" className="scoreContainer" style={{marginTop: '5%', justifyContent: 'center'}} >
            <h1 className = "scoreBoxH1" style={{textAlign: 'center', backgroundColor: '#343a40', color: 'white', border: '2px solid white'}}> {scores.playerScoreName} </h1>

            <p className = 'Hole1Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 1: {scores.Hole1Score}</p>
            <p className = 'Hole2Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 2: {scores.Hole2Score}</p>
            <p className = 'Hole3Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 3: {scores.Hole3Score}</p>
            <p className = 'Hole4Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 4: {scores.Hole4Score}</p>
            <p className = 'Hole5Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 5: {scores.Hole5Score}</p>
            <p className = 'Hole6Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 6: {scores.Hole6Score}</p>
            <p className = 'Hole7Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 7: {scores.Hole7Score}</p>
            <p className = 'Hole8Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 8: {scores.Hole8Score}</p>
            <p className = 'Hole9Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 9: {scores.Hole9Score}</p>
            <p className = 'Hole10Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 10: {scores.Hole10Score}</p>
            <p className = 'Hole11Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 11: {scores.Hole11Score}</p>
            <p className = 'Hole12Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 12: {scores.Hole12Score}</p>
            <p className = 'Hole13Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 13: {scores.Hole13Score}</p>
            <p className = 'Hole14Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 14: {scores.Hole14Score}</p>
            <p className = 'Hole15Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 15: {scores.Hole15Score}</p>
            <p className = 'Hole16Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 16: {scores.Hole16Score}</p>
            <p className = 'Hole17Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 17: {scores.Hole17Score}</p>
            <p className = 'Hole18Score' style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}> Hole 18: {scores.Hole18Score}</p>


        </Container>
    )
}

export default ScoreDetails;


