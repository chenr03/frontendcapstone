
import { combineReducers } from 'redux'



const courses = (state = [], action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case 'ADD_COURSE':
            return [...state, action.value]

        case 'REMOVE_COURSE':
            const newCourse = state.filter((course) => {
                return course.id !== action.value
            })
            return newCourse
    }
    return state
}

const user = (state = null, action) => {
    console.log('State in reducer', state);
    switch (action.type) {
        case 'LOGIN':
            console.log('State in reducer', state);
            state.username = action.value;
            state.online = true;
            return state;
        // case 'LOGOUT':
        //     console.log('LoggedOut in reducer', state)
        //     return state = false
        default:
            return state

    }

}


export default combineReducers({ user, courses } )