import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import moment from 'moment';
const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    vertical:{
        float: "left",
        clear: "none"
}
});

function NotificationList(props) {
    return (
            <List component="nav">
                <ListItem button>
                    <ListItemText secondary={moment(props.timestamp).fromNow()} primary={props.message} />
                </ListItem>
            </List>
    );
}

NotificationList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotificationList);