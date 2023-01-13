import Register from '../components/Register'
import { connect } from "react-redux";
import { register } from '../redux/actions'


const mapDispatchToProps = (dispatch) => {
    return {
        register: () => dispatch(register())
    }
}

export default connect(null, mapDispatchToProps)(Register)