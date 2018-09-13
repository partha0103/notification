import * as types from '../constants/actionTypes';
import { addUser, populateUserList, messageReceived, notificationCount} from '../actions';
const getCurrentUserNotification = (users) => {
    for (var i=0; i< users.length;i++){
        if(users[i].name === window.username){
            return users[i].notificationCount
        }
    }
}
const setupSocket = (dispatch, username) => {
    const socket = new WebSocket('ws://localhost:8989')
    socket.onopen = () => {
        socket.send(JSON.stringify({
            type: types.ADD_USER,
            name: username
        }))

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);

            switch (data.type ){
                case types.ADD_MESSAGE:
                    dispatch(messageReceived(data.message, data.notificationType,data.author, data.timestamp));
                    break;
                case types.ADD_USER:
                    dispatch(addUser(data.name));
                    break;
                case types.USERS_LIST:
                    dispatch(populateUserList(data.users))
                    break
                case "NOTIFIATION_COUNT":
                    let currentUserNotification  = getCurrentUserNotification(data.users);
                    dispatch(notificationCount(currentUserNotification))
                    break;
                default:
                    break
            }
        }
    }
    return socket;
}

export default setupSocket;
