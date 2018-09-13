import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { connect } from 'react-redux';
import {  Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import  { NotificationList }  from '../containers/NotificationList';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ListItemText from "@material-ui/core/ListItemText";

import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#26a69a',
        },
        secondary: {
            main: '#c6ff00',
        },
    },
});

const styles = theme => ({
    root: {
        width: '100%'
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        fontSize: 50,
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    card: {
        minWidth: 275,
    },
    messagescontent:{
        maxHeight: 250,
        overflowY: "scroll",
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
});

class PrimarySearchAppBar extends React.Component {
    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: !this.state.anchorEl });
    };



    render() {
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const { classes, notificationCount, username } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const count = notificationCount.assignment + notificationCount.general + notificationCount.reminder;
        return (
            <div className={classes.root}>
                <MuiThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                            <MenuIcon />
                        </IconButton>
                        <Link to="/" >
                            <Typography className={classes.title} variant="title" color="inherit" noWrap>
                                    Welcome {username}
                            </Typography>
                        </Link>
                        <div className={classes.grow} />
                        <Link to="/addmessage"  ><Button color="inherit">Send</Button></Link>
                        <Link to="/notification" ><Button color="inherit">View</Button></Link>
                        <div>
                            <IconButton
                                aria-owns={isMenuOpen ? 'material-appbar' : null}
                                aria-haspopup="true"
                                onClick={this.handleMenuClose}
                                color="inherit"
                            >
                                <Badge className={classes.margin} badgeContent={count} color="secondary">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
                </MuiThemeProvider>
                {
                    isMenuOpen &&
                    <div style={{
                        position: "fixed",
                        zIndex: "7777",
                        right: "4%"
                    }}>
                        <Card className={classes.card}>
                            <CardContent>
                                <List component="nav">
                                    <ListItem>
                                        <ListItemText primary={`${notificationCount.assignment} Assigned Tasks`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`${notificationCount.reminder} Reminders`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`${notificationCount.general} Notification`} />
                                    </ListItem>
                                </List>
                              <Divider/>
                              <div className={classes.messagescontent}>
                                  <NotificationList/>
                              </div>
                            </CardContent>
                            <CardActions>
                                <Link to="/notification"><Button size="small">Show All</Button></Link>
                            </CardActions>
                        </Card>
                    </div>
                }
            </div>
        );
    }
}

PrimarySearchAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default connect(((state)=>({username: state.username, notificationCount: state.notificationCount})))(withStyles(styles)(PrimarySearchAppBar))