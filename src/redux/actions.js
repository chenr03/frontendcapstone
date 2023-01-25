export const login = (username) => {
    return {
        type: 'LOGIN',
        value: username

    }
}

// export const logout = () => {
//     return {
//         type: 'LOGOUT'
//     }
// }

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


export const register = () => {
    return {
        type: 'REGISTER'
    }
}
