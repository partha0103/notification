import React from 'react'
import PropTypes from 'prop-types'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import moment from "moment/moment";

const Users = ({ users }) => (
        <div>
            <h1>Current Users</h1>
            {users.map(user => (
                <ListItem button key={user.id}>
                    <ListItemText primary={user.name} />
                </ListItem>
            ))}
        </div>
)


export default Users