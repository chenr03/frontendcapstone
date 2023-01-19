import React, {useEffect, useState} from "react";
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



const Login = (props) => {
    console.log('Props inside of Login Comp: ', props)
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

    const login = (e) => {

        e.preventDefault();
        console.log('State: ', state)

        fetch('http://localhost:8080/login', {
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
            return response.json()

        }).then((data)=>{
            props.login(state.username)
            navigate('/dashboard')
            console.log('Data:', data)
            document.cookie = "loggedin=true;max-age=60*1000";
            document.cookie = `token=${data};max-age=60*1000`;
        })
        // POST REQUEST FOR USERS



        // navigate("/dashboard");

    };

    useEffect(()=>{
        console.log('redux props useEffect', props)

    }, [])

    //props.user.username

    // const logout = (e) => {
    // e.preventDefault()
    // props.logout()
    //}

    // need to set a logged out cookie here
    //document.cookie = "loggedin=false

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="sm">
                <form className="login-form"
                      onSubmit={login}
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
                        Login
                    </Button>
                </form>
            </Container>
        </ThemeProvider>
    );
};

export default Login;