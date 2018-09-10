import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
    dispatch: (message, notificationType,author) => {
        dispatch(addMessage(message, notificationType,author))
    }
})

const getUsers = (users, username) => (
    users.filter(user => user.name !== username)
)

const mapStateToProps = state => ({
    users: getUsers(state.users, state.username)
})

export const AddMessage = connect(mapStateToProps, mapDispatchToProps)(AddMessageComponent)