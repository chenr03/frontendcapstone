import React, {useEffect} from 'react';
// import Button from '@mui/material/Button';

function AllGames(){

    useEffect(() => {
        fetch('http://localhost:8080/games')
            .then((response) => {
                console.log('AllGames response:', response)
                return response.json()

            }).then((data)=>{
            console.log('AllGames Data:', data)
        })
    }, [])




    return (
        <h2>
            {/*<Button variant="contained">Contained</Button>*/}
        </h2>
    )

}


export default AllGames;