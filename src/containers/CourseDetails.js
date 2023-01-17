import { connect } from 'react-redux';
import CourseDetails from '../components/CourseDetails';

const mapStateToProps = (state) => {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps)(CourseDetails);