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
        gameName: '',
    }


    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {

        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.games.length + 1
        delete payload.open
        console.log('payload', payload)

        const setGame = {
            // Post GAME to Database
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({ gameName: this.state.name, gameDate: this.state.date})
        };


        fetch('http://localhost:8080/game/', setGame)
            .then(response => response.json())
            .then(data => this.setState({
                name: '',
                date: '',
            }))
        this.setState({ open: false })
    }


    componentDidUpdate = (prevProps, prevState) => {

        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                date: '',

            })

        }
        console.log('gameName:', this.state.name);
    }


    render() {
        return (
            <Fragment>
                <div className = "addGameButton">
                    <Button
                        variant="contained"
                        className="addNewGame"
                        onClick={this.toggleDialog}
                        style={{ background: 'green', fontSize: '20px', marginTop: '15px' }}
                    >
                        Select Game
                    </Button>

                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle style={{textAlign: 'center'}}>Add New Game </DialogTitle>
                        <DialogContent style={{display: 'flex', justifyContent: 'center'}}>
                            <form
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField
                                    id="name"
                                    placeholder=" Game Name "
                                    value={this.state.name}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="date"
                                    placeholder=" Today's Date "
                                    value={this.state.date}
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

export default AddGame