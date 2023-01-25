import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Container} from '@mui/material';
import Map from '../components/Map'

const CourseDetails = (props) => {
    let { id } = useParams();
    console.log(id);
    const course = props.courses.find(course => course.id === +id)
    const [courses, setCourses] = useState()
    console.log(courses)

    console.log('courses object', course);

        useEffect(() => {
            // Get all courses
            fetch(`http://localhost:8080/course/${id}`)
                .then(response => {
                    console.log('All Courses:', response)
                    return response.json()
                }).then((data) => {
                console.log('this course:', data)
                setCourses(data)
            })

            // empty dependency array means this effect will only run once
        }, []);


        if(!courses) return <div> Loading.... </div>

    return (
        <Container maxWidth="sm" className="list-container" style={{marginTop: '15%'}} >
            <h1 style={{textAlign: 'center', backgroundColor: '#343a40', color: 'white', border: '2px solid white'}}> {courses.courseName}  </h1>
            <h2 style={{backgroundColor: '#343a40', color: 'white'}}> {courses.address}</h2>
            <h2 style={{backgroundColor: '#343a40', color: 'white'}}> {courses.hours}</h2>
            <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.description}</p>
            <Map name={courses.courseName} address={courses.address} style={{ borderColor: '5px solid white', textAlign: 'center' }}/>
        </Container>
    )
}

export default CourseDetails