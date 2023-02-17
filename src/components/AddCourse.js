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
        description: ''
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

        const setCourse = {
            // Post Course to Database
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            body: JSON.stringify({ courseName: this.state.name, courseDescription: this.state.description})
        };

        fetch('http://localhost:8080/course/', setCourse)
            .then(response => response.json())
            .then(data => this.setState({
                name: '',
                description: '',

        }))
            this.setState({ open: false })
    }


    componentDidUpdate = (prevProps, prevState) => {

        if (prevState.open !== this.state.open) {
            this.setState({
                name: '',
                description: '',

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
                      Add Course
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
                                    placeholder="Course Name"
                                    value={this.state.name}
                                    onChange={this.handleTextChange}
                                    required />
                                <TextField
                                    id="description"
                                    placeholder="Size of Course"
                                    value={this.state.description}
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