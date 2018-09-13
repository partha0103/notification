import { connect } from 'react-redux'
import MessagesListComponent from '../components/NotificationList'

const getCurrentUserNotification = (user, messages) => (
    messages.filter(message => message.author === user)
)

export const NotificationList = connect(state => ({
    messages: getCurrentUserNotification(state.username, state.messages)
}), {})(MessagesListComponent)