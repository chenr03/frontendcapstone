import React, {useEffect} from 'react';


function Users(){

    useEffect(() => {
        fetch('http://localhost:8080/users')
            .then((response) => {
                console.log('Users response:', response)
                return response.json()

            }).then((data)=>{
            console.log('Users Data:', data)
        })
    }, [])




    return (
        <h2>

        </h2>
    )

}


export default Users;