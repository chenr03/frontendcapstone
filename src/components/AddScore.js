import React, { Component, Fragment } from 'react'
import {
    TextField,
    Dialog,
    DialogContent,
    DialogTitle,
    Button
} from '@mui/material'




class AddScore extends Component {
    state = {
        open: false,
        name: '',
        hole1Score: '',
        hole2Score: '',
        hole3Score: '',
        hole4Score: '',
        hole5Score: '',
        hole6Score: '',
        hole7Score: '',
        hole8Score: '',
        hole9Score: '',
        hole10Score: '',
        hole11Score: '',
        hole12Score: '',
        hole13Score: '',
        hole14Score: '',
        hole15Score: '',
        hole16Score: '',
        hole17Score: '',
        hole18Score: ''

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
        payload.id = this.props.scores.length + 1
        delete payload.open
        console.log('Scores payload', payload)

        const setScore = {
            // Posts to Scores from Players table in SQL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({

                playerScoreName: this.state.name,
                Hole1Score: this.state.Hole1Score,
                Hole2Score: this.state.Hole2Score,
                Hole3Score: this.state.Hole3Score,
                Hole4Score: this.state.Hole4Score,
                Hole5Score: this.state.Hole5Score,
                Hole6Score: this.state.Hole6Score,
                Hole7Score: this.state.Hole7Score,
                Hole8Score: this.state.Hole8Score,
                Hole9Score: this.state.Hole9Score,
                Hole10Score: this.state.Hole10Score,
                Hole11Score: this.state.Hole11Score,
                Hole12Score: this.state.Hole12Score,
                Hole13Score: this.state.Hole13Score,
                Hole14Score: this.state.Hole14Score,
                Hole15Score: this.state.Hole15Score,
                Hole16Score: this.state.Hole16Score,
                Hole17Score: this.state.Hole17Score,
                Hole18Score: this.state.Hole18Score
            })
        };

        // console.log('this.state.games:', this.state.games);

        fetch('http://localhost:8080/score/', setScore)
            .then(response => response.json())
            .then(data => this.setState({
                name: this.state.name,
                Hole1Score: this.state.Hole1Score,
                Hole2Score: this.state.Hole2Score,
                Hole3Score: this.state.Hole3Score,
                Hole4Score: this.state.Hole4Score,
                Hole5Score: this.state.Hole5Score,
                Hole6Score: this.state.Hole6Score,
                Hole7Score: this.state.Hole7Score,
                Hole8Score: this.state.Hole8Score,
                Hole9Score: this.state.Hole9Score,
                Hole10Score: this.state.Hole10Score,
                Hole11Score: this.state.Hole11Score,
                Hole12Score: this.state.Hole12Score,
                Hole13Score: this.state.Hole13Score,
                Hole14Score: this.state.Hole14Score,
                Hole15Score: this.state.Hole15Score,
                Hole16Score: this.state.Hole16Score,
                Hole17Score: this.state.Hole17Score,
                Hole18Score: this.state.Hole18Score
            }))
        this.setState({ open: false })
    }


    componentDidUpdate = (prevProps, prevState) => {

        if (prevState.open !== this.state.open) {
            this.setState({
                name: this.state.name,
                Hole1Score: this.state.Hole1Score,
                Hole2Score: this.state.Hole2Score,
                Hole3Score: this.state.Hole3Score,
                Hole4Score: this.state.Hole4Score,
                Hole5Score: this.state.Hole5Score,
                Hole6Score: this.state.Hole6Score,
                Hole7Score: this.state.Hole7Score,
                Hole8Score: this.state.Hole8Score,
                Hole9Score: this.state.Hole9Score,
                Hole10Score: this.state.Hole10Score,
                Hole11Score: this.state.Hole11Score,
                Hole12Score: this.state.Hole12Score,
                Hole13Score: this.state.Hole13Score,
                Hole14Score: this.state.Hole14Score,
                Hole15Score: this.state.Hole15Score,
                Hole16Score: this.state.Hole16Score,
                Hole17Score: this.state.Hole17Score,
                Hole18Score: this.state.Hole18Score

            })

        }
        // console.log('this.state.playerName:', this.state.name);
    }


    render() {
        return (
            <Fragment>
                <div className = "addScoreButton">
                    <Button
                        variant="contained"
                        className="addScore"
                        onClick={this.toggleDialog}
                        style={{ background: 'green', fontSize: '20px', marginTop: '5px' }}
                    >
                        Add Scores
                    </Button>

                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle style={{textAlign: 'center'}}> Add Player Scores </DialogTitle>
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
                                <TextField
                                    id="Hole1Score"
                                    placeholder="Hole 1"
                                    value={this.state.Hole1Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole2Score"
                                    placeholder="Hole 2"
                                    value={this.state.Hole2Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole3Score"
                                    placeholder="Hole 3"
                                    value={this.state.Hole3Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole4Score"
                                    placeholder="Hole 4"
                                    value={this.state.Hole4Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole5Score"
                                    placeholder="Hole 5"
                                    value={this.state.Hole5Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole6Score"
                                    placeholder="Hole 6"
                                    value={this.state.Hole6Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole7Score"
                                    placeholder="Hole 7"
                                    value={this.state.Hole7Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole8Score"
                                    placeholder="Hole 8"
                                    value={this.state.Hole8Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole9Score"
                                    placeholder="Hole 9"
                                    value={this.state.Hole9Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole10Score"
                                    placeholder="Hole 10"
                                    value={this.state.Hole10Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole11Score"
                                    placeholder="Hole 11"
                                    value={this.state.Hole11Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole12Score"
                                    placeholder="Hole 12"
                                    value={this.state.Hole12Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole13Score"
                                    placeholder="Hole 13"
                                    value={this.state.Hole13Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole14Score"
                                    placeholder="Hole 14"
                                    value={this.state.Hole14Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole15Score"
                                    placeholder="Hole 15"
                                    value={this.state.Hole15Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole16Score"
                                    placeholder="Hole 16"
                                    value={this.state.Hole16Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole17Score"
                                    placeholder="Hole 17"
                                    value={this.state.Hole17Score}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole18Score"
                                    placeholder="Hole 18"
                                    value={this.state.Hole18Score}
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

export default AddScore;
