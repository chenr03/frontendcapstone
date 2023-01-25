import { connect } from 'react-redux'
import AddGame from '../components/AddGame'
import { addGame } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        games: state.games,
        online: state.online
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addGame: (game) => dispatch(addGame(game))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddGame)