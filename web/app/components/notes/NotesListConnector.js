
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'
import NotesList from './NotesList'

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

const NotesListConnector = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotesList)

export default NotesListConnector
