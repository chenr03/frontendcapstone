import React, {useEffect} from 'react';


function AllPlayers(props) {
    console.log('Props: ', props);
    const Players = props.players

    console.log('Players Props from AllPlayers Function: ', Players);

useEffect(() => {
    fetch('http://localhost:8080/Players')
        .then((response) => {
            console.log('AllPlayers response:', response)
            return response.json()

        }).then((data)=>{
        console.log('AllPlayers Data:', data)
    })
}, [])




    return (
            <section>

            </section>
        )
}

export default AllPlayers;