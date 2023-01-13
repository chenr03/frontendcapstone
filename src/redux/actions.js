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

export const register = () => {
    return {
        type: 'REGISTER'
    }
}
