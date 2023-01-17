import { connect } from 'react-redux'
import AddCourse from '../components/AddCourse'
import { addCourse } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        courses: state.courses,
        online: state.online
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCourse: (course) => dispatch(addCourse(course))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddCourse)