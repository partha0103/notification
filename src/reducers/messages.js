import * as types from '../constants/actionTypes'

const messages = (state= [], action) => {
    switch (action.type){
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat([{
                message: action.message,
                author: action.author,
                notificationType: action.notificationType,
                id: action.id,
                timestamp: action.timestamp
            }])
        case types.REMOVE_NOTIFICATION:
            return state.filter(message => message.id != action.id)
        default:
            return state
    }
}

 export default messages;