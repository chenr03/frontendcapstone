import React from 'react'
import { useParams } from 'react-router-dom';
import { Container} from '@mui/material';
import Map from '../components/Map'

const CourseDetails = (props) => {
    let { id } = useParams();
    console.log(id);
    const course = props.courses.find(course => course.id === +id)

    return (
        <Container maxWidth="sm" className="list-container" >
            <h1>{course.name} </h1>
            <h2>{course.address}</h2>
            <h2>{course.hours}</h2>
            <p style={{ textAlign: 'center'}}>{course.description}</p>
            <Map name={course.name} address={course.address}/>
        </Container>
    )
}

export default CourseDetails