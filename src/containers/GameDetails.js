import { connect } from 'react-redux';
import GameDetails from '../components/GameDetails';

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(GameDetails);