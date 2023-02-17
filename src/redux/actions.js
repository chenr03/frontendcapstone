export const login = (username) => {
    return {
        type: 'LOGIN',
        value: username

    }
}

export const logout = (username) => {
    return {
        type: 'LOGOUT',
        value: username
    }
}

export const addCourse = (course) => {
    return {
        type: 'ADD_COURSE',
        value: course
    }
}

export const removeCourse = (id) => {
    return {
        type: 'REMOVE_COURSE',
        value: id
    }
}

export const addGame = (game) => {
    return {
        type: 'ADD_GAME',
        value: game
    }
}

export const removeGame = (id) => {
    return {
        type: 'REMOVE_GAME',
        value: id
    }
}

export const addPlayer = (player) => {
    return {
        type: 'ADD_PLAYER',
        value: player
    }
}

export const removePlayer = (id) => {
    return {
        type: 'REMOVE_PLAYER',
        value: id
    }
}

export const addScore = (score) => {
    return {
        type: 'ADD_SCORE',
        value: score
    }
}

export const removeScore = (id) => {
    return {
        type: 'REMOVE_SCORE',
        value: id
    }
}


export const register = () => {
    return {
        type: 'REGISTER'
    }
}
