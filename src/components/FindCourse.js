// admin view
import React from 'react'
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
// import AddCourse from '../containers/AddCourse'

const Courses = (props) => {
    const {id} = useParams();

    const course = props.courses.find((course) => course.id === +id);
    console.log(course);



    return (
        <div>
            <Container>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Hours</TableCell>
                            <TableCell>Delete</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.courses.map((courses, idx) => {
                            // console.log('Courses inside Course Prop: ', courses);
                            return( <TableRow key={courses.id}>
                                    <TableCell  scope="row">
                                        <Typography>
                                            <Link
                                                to={`/CourseDetails/${courses.id}`}
                                                component="button"
                                                variant="header1"
                                                style={{ color: 'green'}}>
                                                {courses["name"]}
                                            </Link>
                                        </Typography>
                                    </TableCell>
                                    <TableCell  scope="row">{courses["description"]}</TableCell>
                                    <TableCell  scope="row">{courses["address"]}</TableCell>
                                    <TableCell  scope="row">{courses["hours"]}</TableCell>
                                    <DeleteIcon
                                        // add onClick method here
                                        onClick={() => props.removeCourse(idx)}
                                        className="icon-text-red" />

                                </TableRow>
                            )})}
                    </TableBody>
                </Table>
            </Container>
        </div>
    );
};

export default Courses;