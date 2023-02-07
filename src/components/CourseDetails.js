import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { Container} from '@mui/material';
import Map from '../components/Map'

const CourseDetails = (props) => {
    let { id } = useParams();

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
            {/*<h2 style={{backgroundColor: '#343a40', color: 'white'}}> {courses.address}</h2>*/}
            {/*<h2 style={{backgroundColor: '#343a40', color: 'white'}}> {courses.hours}</h2>*/}
            <h2 style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.courseDescription}</h2>
            <Map name={courses.courseName} address={courses.address} style={{ borderColor: '5px solid white', textAlign: 'center' }}/>
            <article>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole1}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole2}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole3}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole4}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole5}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole6}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole7}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole8}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole9}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole10}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole11}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole12}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole13}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole14}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole15}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole16}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole17}</p>
                <p style={{ textAlign: 'center', backgroundColor: '#343a40', color: 'white' }}>{courses.Hole18}</p>
            </article>
        </Container>
    )
}

export default CourseDetails