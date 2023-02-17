import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'




function Course(){

    const params = useParams();
    console.log('Params: ', params)


    useEffect(() => {
            // Get Single Course by id...
        fetch(`http://localhost:8080/course/${params.id}`)
            .then(response => {
                console.log('Course by id:', response)
                return response.json()
            }).then((data) => {
            console.log('Course Data 2:', data)
        })

        // empty dependency array means this effect will only run once
    }, [params.id]);







    return (
        <section>

        </section>
    )
}

export default Course;