import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';

const styles = theme => ({
    container: {
        display: 'block'
    },
    margin: {
        margin: theme.spacing.unit,
        minWidth: "50%",
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: purple[500],
        },
    },
    button: {
        margin: theme.spacing.unit,
        backgroundColor: "#26a69a"
    }
});

const theme = createMuiTheme({
    palette: {
        primary: green,
    },
});

class CustomizedInputs extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
        this.state = {
            "username": "",
            "messagetype": "",
            "message": ""
        }
    }
    handleSubmit(event){
        event.preventDefault();
        const {username, messagetype,message } = this.state;
        this.props.dispatch(message, messagetype, username);
        this.setState({
            "username": "",
            "messagetype": "",
            "message": "",
            "open": true
        })
    }
    handleCloseSnackbar(){
        this.setState({ open: false });
    }
    handleChange(event){
        let name= event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    render(){
        const { classes, users } = this.props;
        return (
            <div className={classes.container}>
                <form onSubmit={this.handleSubmit}>
                    <FormControl className={classes.margin}>
                        <InputLabel
                            FormLabelClasses={{
                                root: classes.cssLabel,
                                focused: classes.cssFocused,
                            }}
                            htmlFor="custom-css-input"
                        >
                            Enter Message
                        </InputLabel>
                        <Input
                            classes={{
                                underline: classes.cssUnderline,
                            }}
                            id="custom-css-input"
                            name="message"
                            value={this.state.message}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="age-simple">Type</InputLabel>
                        <Select name="messagetype"  value={this.state.messagetype} onChange={this.handleChange}>
                            <MenuItem value="reminder">reminder</MenuItem>
                            <MenuItem value="general">general</MenuItem>
                            <MenuItem value="assignment">assignment</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="age-simple">User</InputLabel>
                        <Select name="username"  value={this.state.username} onChange={this.handleChange}>
                            {
                                users.map(item => (
                                    <MenuItem value={item.name || item}>
                                        {item.name || item}
                                    </MenuItem>
                                ))
                            }
                        </Select>
                    </FormControl>
                    <br/>
                    <Button variant="contained" className={classes.button} type="submit" >
                        Send
                    </Button>
                </form>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleCloseSnackbar}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Msssage send successfully</span>}
                />
            </div>
        );
    }
}

CustomizedInputs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);