const notificationCount = (state={reminder: 0, general:0, assignment: 0}, action) => {
    switch (action.type){
        case "NOTIFICATION_COUNT":
            const {reminder, general, assignment} = action.notificationCount;
            console.log(reminder, "Hello")
            return {
                ...state,
                reminder,
                general,
                assignment
            }
        default:
            return state;
    }
    return state;
}

export default notificationCount;