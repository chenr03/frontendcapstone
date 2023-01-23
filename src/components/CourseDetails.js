import React from 'react'
import { useParams } from 'react-router-dom';
import { Container} from '@mui/material';
import Map from '../components/Map'

const CourseDetails = (props) => {
    let { id } = useParams();
    console.log(id);
    const course = props.courses.find(course => course.id === +id)


    return (
        <Container maxWidth="sm" className="list-container" style={{marginTop: '25%', marginLeft: '75%' }} >
            <h1 style={{textAlign: 'center', backgroundColor: '#343a40', color: 'white', border: '2px solid white'}}> {course.name}  </h1>
            <h2 style={{backgroundColor: '#343a40', color: 'white'}}> {course.address}</h2>
            <h2 style={{backgroundColor: '#343a40', color: 'white'}}> {course.hours}</h2>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{course.description}</p>
            <Map name={course.name} address={course.address} style={{ borderColor: '5px solid white', textAlign: 'center' }}/>
        </Container>
    )
}

export default CourseDetails