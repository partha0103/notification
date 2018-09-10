import React from 'react';

const NotificationCount = ({notificationCount}) =>(
    <div>
        <div>Reminders: {notificationCount.reminder}</div>
        <div>Assignment: {notificationCount.assignment}</div>
        <div>General: {notificationCount.general}</div>
    </div>
)

export default NotificationCount