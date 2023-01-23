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
import AddCourse from '../containers/AddCourse'

const AllCourses = (props) => {
    const {id} = useParams();
    const [courses, setCourses] = useState([])

    const course = props.courses.find((course) => course.id === +id);
    console.log(course);
    console.log('Currently online: ', props.online)

    useEffect(() => {
        // Get all courses
        fetch(`http://localhost:8080/Courses/`)
            .then(response => {
                console.log('All Courses:', response)
                return response.json()
            }).then((data) => {
            console.log('All Courses Data:', data)
            setCourses(data)
        })

        // empty dependency array means this effect will only run once
    }, []);


    return (
        <div className="main-listings">
            {props.online && (
                <AddCourse
                    courses = {props.courses}
                />
            )}

            <Container>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{color: 'white', fontWeight: 'Bolder', fontSize: '20px', textDecoration: 'underline'}}>Name </TableCell>

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
                        {courses.map((courses, idx) => {
                            return( <TableRow key={courses.id}>
                                    <TableCell  scope="row" style={{color: 'white'}}>
                                        <Typography>
                                            <Link
                                                to={`/CourseDetails/${courses.id}`}
                                                component="button"
                                                variant="header1"
                                                style={{ color: 'white'}}>
                                                {courses["courseName"] }
                                            </Link>
                                        </Typography>
                                    </TableCell>

                                    {
                                        props.online && (
                                            <TableCell>
                                                <DeleteIcon
                                                    // add onClick method here
                                                    onClick={() => props.removeCourse(courses.id)}
                                                    className="icon text-red" />
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

export default AllCourses;
