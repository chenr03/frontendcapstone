import React, {useEffect, useState} from 'react';





function Courses(){

    const [state, setState] = useState({
        courseName: '',
        Hole1: '',
        Hole2: '',
        Hole3: '',
        Hole4: '',
        Hole5: '',
        Hole6: '',
        Hole7: '',
        Hole8: '',
        Hole9: '',
        Hole10: '',
        Hole11: '',
        Hole12: '',
        Hole13: '',
        Hole14: '',
        Hole15: '',
        Hole16: '',
        Hole17: '',
        Hole18: ''
    })



    useEffect(() => {
        // GET Request for Courses
        fetch('http://localhost:8080/courses')
            .then((response) => {
                console.log('Courses response:', response)
                return response.json()

            }).then((data)=>{
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


    function addCourseHandler(){
         fetch(`http://localhost:8080/course`, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(state),
         }).then((response) => {
             console.log('response:', response)
             return response.json()

         }).then((data)=>{
             console.log('Post Course by Id Data:', data)

         })


    }

    return (
        <section>
            <form>
                <input name = 'courseName' value = {state.courseName} onChange = {handleChange}/>
                <input name = 'Hole1' value = {state.Hole1} onChange = {handleChange}/>
                <input name = 'Hole2' value = {state.Hole2} onChange = {handleChange}/>
                <input name = 'Hole3' value = {state.Hole3} onChange = {handleChange}/>
                <input name = 'Hole4' value = {state.Hole4} onChange = {handleChange}/>
                <input name = 'Hole5' value = {state.Hole5} onChange = {handleChange}/>
                <input name = 'Hole6' value = {state.Hole6} onChange = {handleChange}/>
                <input name = 'Hole7' value = {state.Hole7} onChange = {handleChange}/>
                <input name = 'Hole8' value = {state.Hole8} onChange = {handleChange}/>
                <input name = 'Hole9' value = {state.Hole9} onChange = {handleChange}/>
                <input name = 'Hole10' value = {state.Hole10} onChange = {handleChange}/>
                <input name = 'Hole11' value = {state.Hole11} onChange = {handleChange}/>
                <input name = 'Hole12' value = {state.Hole12} onChange = {handleChange}/>
                <input name = 'Hole13' value = {state.Hole13} onChange = {handleChange}/>
                <input name = 'Hole14' value = {state.Hole14} onChange = {handleChange}/>
                <input name = 'Hole15' value = {state.Hole15} onChange = {handleChange}/>
                <input name = 'Hole16' value = {state.Hole16} onChange = {handleChange}/>
                <input name = 'Hole17' value = {state.Hole17} onChange = {handleChange}/>
                <input name = 'Hole18' value = {state.Hole18} onChange = {handleChange}/>

                <button onClick={function(){
                    addCourseHandler()
                 }}> Add New Course
                </button>
            </form>
        </section>
    )
}




export default Courses;