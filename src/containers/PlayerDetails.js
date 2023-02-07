import { connect } from 'react-redux';
import PlayerDetails from '../components/PlayerDetails';

const mapStateToProps = (state) => {
    return {
        players: state.players
    }
}

export default connect(mapStateToProps)(PlayerDetails);