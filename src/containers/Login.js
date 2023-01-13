import Login from '../components/Login'
import { connect } from "react-redux";
import {login} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user:state.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username) => dispatch(login(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)