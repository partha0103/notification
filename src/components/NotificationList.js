import React from 'react'
import PropTypes from 'prop-types'
import Message from './Notification'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";

const NotificationList = ({ messages }) => {
    if(messages.length === 0){
        return (
            <List>
                <ListItem button>
                    <ListItemText primary="No message" />
                </ListItem>
            </List>
        )
    }
    return(
        <List component="nav">
            {messages.slice(0).reverse().map(message => (
                <Message
                    key={message.id}
                    {...message}
                />
            ))}
        </List>
    )

}

NotificationList.PropTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default NotificationList