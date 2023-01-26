import { connect } from 'react-redux'
import AddPlayer from '../components/AddGame'
import { addPlayer } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        games: state.games,
        online: state.online
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlayer: (player) => dispatch(addPlayer(player))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddPlayer)