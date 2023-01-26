import Logout from '../components/Login'
import { connect } from "react-redux";
import {logout} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user:state.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (username) => dispatch(logout(username))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Logout)