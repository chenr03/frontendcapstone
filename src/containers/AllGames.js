import { connect } from 'react-redux'
import AllGames from '../components/AllGames'
import { removeGame } from'../redux/actions'


const mapStateToProps = (state) => {
    return {
        games: state.games,
        online: state.online
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeGame: (id) => dispatch(removeGame(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGames)