import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'




function User(){

    const params = useParams();
    console.log('Params: ', params)


    useEffect(() => {
        // Get Single User by id...
        fetch(`http://localhost:8080/user/${params.id}`)
            .then(response => {
                console.log('User by id:', response)
                return response.json()
            }).then((data) => {
            console.log('User by id Data:', data)
        })

        // empty dependency array means this effect will only run once
    }, [params.id]);







    return (
        <section>

        </section>
    )
}

export default User;