import Dashboard from '../components/Dashboard'
import { connect } from "react-redux";


const mapStateToProps = (state) => {
    return {
        user:state.user.username
    }
}



export default connect(mapStateToProps)(Dashboard)