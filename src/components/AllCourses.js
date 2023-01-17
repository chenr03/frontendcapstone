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
import AddCourse from '../containers/AddCourse'

const AllCourses = (props) => {
    const {id} = useParams();

    const course = props.courses.find((course) => course.id === +id);
    console.log(course);
    console.log('Currently online: ', props.online)


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
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Hours</TableCell>
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
                        {props.courses.map((courses, idx) => {
                            // console.log('Listings inside Listing Prop: ', listings);
                            return( <TableRow key={courses.id}>
                                    <TableCell  scope="row" style={{color: 'white'}}>
                                        <Typography>
                                            <Link
                                                to={`/CourseDetails/${courses.id}`}
                                                component="button"
                                                variant="header1"
                                                style={{ color: 'white'}}>
                                                {courses["name"] }
                                            </Link>
                                        </Typography>
                                    </TableCell>
                                    <TableCell  scope="row">{courses["description"]}</TableCell>
                                    <TableCell  scope="row">{courses["address"]}</TableCell>
                                    <TableCell  scope="row">{courses["hours"]}</TableCell>
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
