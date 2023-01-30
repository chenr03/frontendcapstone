import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@mui/material'




class AddGame extends Component {
    state = {
        open: false,
        name: ''
    }


    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        console.log('this.state: ', this.state )

        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.games.length + 1
        delete payload.open
        console.log('payload', payload)
        // console.log("THE Listing", payload)
        // add this.props.addCar function here
        // also add this.setState to close the dialog
        // this.props.addCourse(payload)
        const setGame = {
            // Post Course to Database
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({ gameName: this.state.gameName })
        };

        console.log('this.state.name:', this.state.name);

        fetch('http://localhost:8080/game/', setGame)
            .then(response => response.json())
            .then(data => this.setState({
                gameName: ''
            }))
        this.setState({ open: false })
    }


    componentDidUpdate = (prevProps, prevState) => {

        if (prevState.open !== this.state.open) {
            this.setState({
                gameName: ''
            })

        }
        console.log('this.state.name:', this.state.name);
    }


    render() {
        return (
            <Fragment>
                <div className = "addGameButton">
                    <Button
                        variant="contained"
                        className="addGame"
                        onClick={this.toggleDialog}
                        style={{ background: 'green', fontSize: '20px', marginTop: '15px' }}
                    >
                        New Game
                    </Button>

                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle style={{textAlign: 'center'}}>Add New Game </DialogTitle>
                        <DialogContent sx={{display: 'flex', justifyContent: 'center'}}>
                            <form
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField
                                    id="gameName"
                                    placeholder=" Game Name"
                                    value={this.state.gameName}
                                    onChange={this.handleTextChange}
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit" sx={{backgroundColor: 'green'}}>Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        )
    }
}

export default AddGame;