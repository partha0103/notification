import { connect } from 'react-redux'
import MessagesListComponent from '../components/NotificationList'
import {removeNotification} from "../actions";

const getCurrentUserNotification = (user, messages) => (
    messages.filter(message => message.author === user)
)
const mapDispatchToProps = dispatch => ({
    dispatch: (id) => {
        dispatch(removeNotification(id))
    }
})
export const NotificationList = connect(state => ({
    messages: getCurrentUserNotification(state.username, state.messages)
}), mapDispatchToProps)(MessagesListComponent)