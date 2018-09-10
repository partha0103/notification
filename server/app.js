const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8989 })

const users = []

const broadcast = (data, ws) => {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN && client !== ws ) {
            client.send(JSON.stringify(data))
        }
    })
}
let currentUserNotification ;
const getNotificationCount = (data) => {
    for (var i=0; i<users.length; i++){
        if(users[i].name == data.author){
            users[i].notificationCount[data.notificationType] = users[i].notificationCount[data.notificationType] + 1;
        }
    }
}

wss.on('connection', (ws) => {
    let index
    ws.on('message', (message) => {
        const data = JSON.parse(message)
        switch (data.type) {
            case 'ADD_USER': {
                index = users.length
                users.push({
                    name: data.name,
                    id: index + 1,
                    notificationCount: {
                        reminder: 0,
                        assignment: 0,
                        general: 0
                    }
                })
                ws.send(JSON.stringify({
                    type: 'USERS_LIST',
                    users
                }))
                broadcast({
                    type: 'USERS_LIST',
                    users
                }, ws)
                break
            }
            case 'ADD_MESSAGE':
                getNotificationCount(data);
                broadcast({
                    type: 'ADD_MESSAGE',
                    message: data.message,
                    notificationType: data.notificationType,
                    author: data.author
                }, ws)
                broadcast({
                    type: 'NOTIFIATION_COUNT',
                    users: users
                }, ws)
                break
            default:
                break
        }
    })

    ws.on('close', () => {
        users.splice(index, 1)
        broadcast({
            type: 'USERS_LIST',
            users
        }, ws)
    })
})