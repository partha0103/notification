import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Clear';
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
    console.log(props, "prrrrr")
    return (
            <List component="nav">
                <ListItem button>
                    <ListItemText secondary={moment(props.timestamp).fromNow()} primary={props.message} />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Comments">
                            <Delete onClick={() => props.onClick(props.id)} />
                        </IconButton>
                    </ListItemSecondaryAction>

                </ListItem>
            </List>
    );
}

NotificationList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NotificationList);