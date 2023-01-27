import Dashboard from '../components/Dashboard'
import { connect } from "react-redux";
import {logout} from '../redux/actions'


const mapStateToProps = (state) => {
    return {
        user: state.user.username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (username) => dispatch(logout(username))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)