import { connect } from 'react-redux'
import AddScore from '../components/AddScore'
import { addScore } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        scores: state.scores,
        online: state.online
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addScore: (score) => dispatch(addScore(score))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddScore)