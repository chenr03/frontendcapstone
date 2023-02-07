import React, { Component, Fragment } from 'react'
import {
    TextField,
    Dialog,
    DialogContent,
    DialogTitle,
    Button
} from '@mui/material'




class AddPlayer extends Component {
    state = {
        open: false,
        playerName: ''
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
        payload.id = this.props.players.length + 1
        delete payload.open
        console.log('players payload', payload)

        const setPlayer = {
            // Post GAME to Database
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({ playerName: this.state.name})
        };

        // console.log('this.state.games:', this.state.games);

        fetch('http://localhost:8080/player/', setPlayer)
            .then(response => response.json())
            .then(data => this.setState({
                name: '',
            }))
        this.setState({ open: false })
    }


    componentDidUpdate = (prevProps, prevState) => {

        if (prevState.open !== this.state.open) {
            this.setState({
                name: ''

            })

        }
        console.log('this.state.playerName:', this.state.name);
    }


    render() {
        return (
            <Fragment>
                <div className = "addPlayerButton">
                    <Button
                        variant="contained"
                        className="addNewPlayer"
                        onClick={this.toggleDialog}
                        style={{ background: 'green', fontSize: '20px', marginTop: '15px' }}
                    >
                        New Player
                    </Button>

                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle style={{textAlign: 'center'}}> Add New Player </DialogTitle>
                        <DialogContent style={{display: 'flex', justifyContent: 'center'}}>
                            <form
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField
                                    id="name"
                                    placeholder=" Player Name "
                                    value={this.state.name}
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

export default AddPlayer;
