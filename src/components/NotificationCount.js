import React from 'react';

const NotificationCount = ({notificationCount}) =>(
    <ul>
        <li>Reminders: {notificationCount.reminder}</li>
        <li>Assignment: {notificationCount.assignment}</li>
        <li>General: {notificationCount.general}</li>
    </ul>
)

export default NotificationCount