import { connect } from 'react-redux'
import AllPlayers from '../components/AllPlayers'
import { removePlayer } from'../redux/actions'


const mapStateToProps = (state) => {
    return {
        players: state.players,
        online: state.online
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removePlayer: (id) => dispatch(removePlayer(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllPlayers)