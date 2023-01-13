import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {  createTheme, ThemeProvider, TextField, Button, Container } from "@mui/material";
import { grey } from "@mui/material/colors"

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: grey[800],
            background: grey[500]
        }
    }
});



const Register = (props) => {
    console.log('Props inside of Register Comp: ', props)
    const navigate = useNavigate();

    const [state, setState] = useState({
        username: "",
        password: "",
    });

    const handleTextChange = (e) => {
        const {name, value} = e.target;
        setState((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const register = (e) => {

        e.preventDefault();
        console.log('State: ', state)

        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: state.username,
                passwordHash: state.password
            })
        }).then((response) => {
            console.log('response:', response)
            return response

        }).then((data)=>{
            navigate('/login')
            console.log('Data:', data)


        })
        // POST REQUEST FOR USERS

        // props.login();
        // console.log('props.login(): ', props.login())
        // SEND POST REQ TO SERVER FOR USER

        // set cookie here

        // set loggedIn = true and max-age = 60*1000 (one minute)


        // navigate("/");
    };

    // const logout = (e) => {
    // e.preventDefault()
    // props.logout()
    //}

    // need to set a logged out cookie here
    //document.cookie = "loggedin=false

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Container maxWidth="sm">
                    <form className="login-form"
                          onSubmit={register}
                          style = {{padding: '20px',
                              backgroundColor: 'white'

                          }} >

                        <TextField
                            required
                            onChange={handleTextChange}
                            value={state.username}
                            name="username"
                            label="Username"
                            type="text"
                        />
                        <TextField
                            required
                            onChange={handleTextChange}
                            value={state.password}
                            name="password"
                            label="Password"
                            type="password"
                        />
                        <Button
                            style={{background: 'grey'}}
                            type="submit"
                            className="login-button"
                            variant="contained"
                            color="primary"
                        >
                            Register
                        </Button>
                    </form>
                </Container>
            </div>
        </ThemeProvider>
    );
};

export default Register;