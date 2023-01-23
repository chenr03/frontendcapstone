import React, {useEffect} from 'react';


function Players(props) {
    console.log('Players props:', props)

useEffect(() => {
    fetch('http://localhost:8080/Players')
        .then((response) => {
            console.log('Players response:', response)
            return response.json()

        }).then((data)=>{
        console.log('Players Data:', data)
    })
}, [])

// useEffect(() => {
//     fetch('http://localhost:8080/Players/playerId')
//         .then((response) => {
//             console.log('player/ playerId Response: ', response)
//             return response.json()
//
//         }).then((data) => {
//         console.log('Players by PlayerId Data: ', data)
//     })
// }, [])




    return (
            <section>
                <table>
                    <thead>
                        <tr>
                            <th> Player Name </th>
                            <th> Hole 1 </th>
                            <th> Hole 2 </th>
                            <th> Hole 3 </th>
                            <th> Hole 4 </th>
                            <th> Hole 5 </th>
                            <th> Hole 6 </th>
                            <th> Hole 7 </th>
                            <th> Hole 8 </th>
                            <th> Hole 9 </th>
                            <th> Hole 10 </th>
                            <th> Hole 11 </th>
                            <th> Hole 12 </th>
                            <th> Hole 13 </th>
                            <th> Hole 14 </th>
                            <th> Hole 15 </th>
                            <th> Hole 16 </th>
                            <th> Hole 17 </th>
                            <th> Hole 18 </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cesar</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Chris</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>
        )
}

export default Players;