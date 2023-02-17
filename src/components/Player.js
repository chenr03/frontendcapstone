import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom'




function Player(){

    const params = useParams();
    console.log('Params: ', params)


    useEffect(() => {
        // Get Single Game by id...
        fetch(`http://localhost:8080/player/${params.id}`)
            .then(response => {
                console.log('Get Single Game by id:', response)
                return response.json()
            }).then((data) => {
            console.log('Get Single Game Data:', data)
        })

        // empty dependency array means this effect will only run once
    }, [params.id]);







    return (
        <section>

        </section>
    )
}

export default Player;