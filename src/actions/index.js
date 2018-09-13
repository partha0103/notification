import * as types from '../constants/actionTypes'

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, notificationType, author, timestamp) => ({
    type: types.ADD_MESSAGE,
    id: nextMessageId++,
    message,
    notificationType,
    author,
    timestamp
})

export const addUser = name => ({
    type: types.ADD_USER,
    id: nextUserId++,
    name
})

export const messageReceived = (message, notificationType,author,timestamp) => ({
    type: types.MESSAGE_RECEIVED,
    id: nextMessageId++,
    message,
    notificationType,
    author,
    timestamp
})

export const populateUserList = users => ({
    type: types.USERS_LIST,
    users
})

export const notificationCount = notificationCount => ({
    type: types.NOTIFICATION_COUNT,
    notificationCount
})

export const removeNotification = id => ({
    type: types.REMOVE_NOTIFICATION,
    id
})

