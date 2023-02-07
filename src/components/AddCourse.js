import React, { Component, Fragment } from 'react'
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@mui/material'
import Map from './Map'



class AddCourse extends Component {
    state = {
        open: false,
        name: '',
        description: '',
        address: '',
        hours: '',
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
        payload.id = this.props.courses.length + 1
        delete payload.open
        console.log('payload', payload)
        // console.log("THE Listing", payload)
        // add this.props.addCar function here
        // also add this.setState to close the dialog
        // this.props.addCourse(payload)
        const setCourse = {
            // Post Course to Database
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({ courseName: this.state.name, courseDescription: this.state.description, Hole1: this.state.Hole1, Hole2: this.state.Hole2, Hole3: this.state.Hole3, Hole4: this.state.Hole4, Hole5: this.state.Hole5})
        };

        console.log('this.state.name:', this.state.name);

        fetch('http://localhost:8080/course/', setCourse)
            .then(response => response.json())
        .then(data => this.setState({
            name: '',
            description: '',
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
        }))
        this.setState({ open: false })
    }


    componentDidUpdate = (prevProps, prevState) => {

        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                description: '',
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

        }
        console.log('this.state.name:', this.state.name);
    }


    render() {
        return (
            <Fragment>
                <div className = "addCourseButton">
                    <Button
                        variant="contained"
                        className="addCourse"
                        onClick={this.toggleDialog}
                        style={{ background: 'green', fontSize: '20px', marginTop: '15px' }}
                    >
                      New Course
                    </Button>

                </div>
                <div>
                    <Dialog open={this.state.open} onClose={this.toggleDialog} >
                        <DialogTitle style={{textAlign: 'center'}}>Add New Course</DialogTitle>
                        <DialogContent sx={{display: 'flex', justifyContent: 'center'}}>
                            <form
                                onSubmit={this.handleSubmit}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField
                                    id="name"
                                    placeholder="Name"
                                    value={this.state.name}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="description"
                                    placeholder="Description"
                                    value={this.state.description}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole1"
                                    placeholder="Hole 1"
                                    value={this.state.Hole1}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole2"
                                    placeholder="Hole 2"
                                    value={this.state.Hole2}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole3"
                                    placeholder="Hole 3"
                                    value={this.state.Hole3}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole4"
                                    placeholder="Hole 4"
                                    value={this.state.Hole4}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole5"
                                    placeholder="Hole 5"
                                    value={this.state.Hole5}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole6"
                                    placeholder="Hole 6"
                                    value={this.state.Hole6}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole7"
                                    placeholder="Hole 7"
                                    value={this.state.Hole7}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole8"
                                    placeholder="Hole 8"
                                    value={this.state.Hole8}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole9"
                                    placeholder="Hole 9"
                                    value={this.state.Hole9}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole10"
                                    placeholder="Hole 10"
                                    value={this.state.Hole10}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole11"
                                    placeholder="Hole 11"
                                    value={this.state.Hole11}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole12"
                                    placeholder="Hole 12"
                                    value={this.state.Hole12}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole13"
                                    placeholder="Hole 13"
                                    value={this.state.Hole13}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole14"
                                    placeholder="Hole 14"
                                    value={this.state.Hole14}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole15"
                                    placeholder="Hole 15"
                                    value={this.state.Hole15}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole16"
                                    placeholder="Hole 16"
                                    value={this.state.Hole16}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole17"
                                    placeholder="Hole 17"
                                    value={this.state.Hole17}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="Hole18"
                                    placeholder="Hole 18"
                                    value={this.state.Hole18}
                                    onChange={this.handleTextChange}
                                    required />

                                <br />
                                <Button variant="contained" color="primary" type="submit" sx={{backgroundColor: 'green'}}>Submit</Button>
                            </form>
                        </DialogContent>
                        <Map name={this.state.name}
                             address={this.state.address}



                        />
                    </Dialog>

                </div>
            </Fragment>
        )
    }
}

export default AddCourse