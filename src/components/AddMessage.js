
import React from 'react'
import PropTypes from 'prop-types'
import {addMessage} from "../actions";


class  AddMessage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            notificationType: "reminder"
        }
        console.log(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    handleChange(event){
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.dispatch(
            this.state.value,
            this.state.notificationType,
            "me")
        this.setState({
            value: ""
        })
    }

    handleDropdownChange(event){
        this.setState({
            notificationType: event.target.value
        })
    }

    render(){
        return(
            <div>
                <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <select onChange={this.handleDropdownChange}>
                    <option value="reminder">Reminder</option>
                    <option value="assignment">Assignment</option>
                    <option value="general">General</option>
                </select>
                <button
                    onClick={this.handleSubmit}
                >
                    Submit
                </button>
            </div>
        )
    }
}


export default AddMessage