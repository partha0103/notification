import { combineReducers } from "redux"
import messages from "./messages"
import users from "./users"
import username from './username'
import notificationCount from "./notificationCount";

const chat = combineReducers({
    messages,
    users,
    username,
    notificationCount
})

export default chat