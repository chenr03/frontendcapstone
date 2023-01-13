import React, {useEffect} from 'react';
// import axios from 'axios';



function Courses(){

    useEffect(() => {
        // GET Request for Courses
        fetch('http://localhost:8080/courses')
            .then((response) => {
                console.log('Courses response:', response)
                return response.json()

            }).then((data)=>{
            console.log('Course Data:', data)
        })
    }, [])

    // useEffect(() => {
    //     // POST Request for Courses
    //     const course = { title: 'Courses POST Request'};
    //     axios.post('https://localhost:8080/course', course)
    //         .then(response => response(response.data.id));
    //     // empty dependency array means this effect will only run once
    // }, []);

    return (
        <section>

        </section>
    )
}

export default Courses;