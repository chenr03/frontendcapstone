import { connect } from 'react-redux'
import AddPlayer from '../components/AddPlayer'
import { addPlayer } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        players: state.players,
        online: state.online
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (player) => dispatch(addPlayer(player))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer)