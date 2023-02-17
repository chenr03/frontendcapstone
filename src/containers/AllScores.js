import { connect } from 'react-redux'
import AllScores from '../components/AllScores'
import { removeScore } from'../redux/actions'


const mapStateToProps = (state) => {
    return {
        scores: state.scores,
        online: state.online
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeScore: (id) => dispatch(removeScore(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllScores)