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

const games = (state = [], action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case 'ADD_GAME':
            return [...state, action.value]

        case 'REMOVE_GAME':
            const newGame = state.filter((game) => {
                return game.id !== action.value
            })
            return newGame
    }
    return state
}

const players = (state = [], action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case 'ADD_PLAYER':
            return [...state, action.value]

        case 'REMOVE_PLAYER':
            const newPlayer = state.filter((player) => {
                return player.id !== action.value
            })
            return newPlayer
    }
    return state
}

const scores = (state = [], action) => {
    // eslint-disable-next-line
    switch (action.type) {
        case 'ADD_SCORE':
            return [...state, action.value]

        case 'REMOVE_SCORE':
            const newScore = state.filter((score) => {
                return score.id !== action.value
            })
            return newScore
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
        case 'LOGOUT':
            console.log('LoggedOut in reducer', state)
            state.username = null;
            state.online = false;
            return state;
        default:
            return state

    }

}

export default combineReducers({ user, courses, games, players, scores } )