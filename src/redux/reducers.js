import { combineReducers } from 'redux'



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





export default combineReducers({ user })