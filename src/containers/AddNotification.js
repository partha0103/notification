import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddNotification'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
    dispatch: (message, notificationType,author) => {
        dispatch(addMessage(message, notificationType,author))
    }
})

const getUsers = (users, username) => (
    users.filter(user => {
        if(user.name !== username){
            return user.name
        }})
)

const mapStateToProps = state => ({
    users: getUsers(state.users, state.username)
})

export const AddNotification = connect(mapStateToProps, mapDispatchToProps)(AddMessageComponent)