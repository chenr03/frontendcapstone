import React, {useEffect, useState,} from 'react';
import {
    Button
} from '@mui/material'



function AllCourses() {

    const [state, setState] = useState({
        courseName: ''
    })


    useEffect(() => {
        // GET Request for Courses
        fetch('http://localhost:8080/courses')
            .then((response) => {
                console.log('Courses response:', response)
                return response.json()

            }).then((data) => {
            console.log('Course Data 1:', data)
        })
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };


    function addCourseHandler() {
        fetch(`http://localhost:8080/course`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state),
        }).then((response) => {
            console.log('response:', response)
            return response.json()

        }).then((data) => {
            console.log('Post Course by Id Data:', data)

        })


    }


        return (
            <section>

                <form>
                    <input name='courseName' value={state.courseName} onChange={handleChange}/>


                    <br/>
                    <Button onClick={function () {
                        addCourseHandler()
                    }}> Add New Course </Button>
                </form>

            </section>
        )

}



export default AllCourses;
