import { connect } from 'react-redux';
import ScoreDetails from '../components/ScoreDetails';

const mapStateToProps = (state) => {
    return {
        scores: state.scores
    }
}

export default connect(mapStateToProps)(ScoreDetails);