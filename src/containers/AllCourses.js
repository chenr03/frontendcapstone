import { connect } from 'react-redux'
import AllCourses from '../components/AllCourses'
import { removeCourse } from'../redux/actions'


const mapStateToProps = (state) => {
    return {
        courses: state.courses,
        online: state.online
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCourse: (id) => dispatch(removeCourse(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCourses)