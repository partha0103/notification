import { connect } from 'react-redux'
import SidebarComponent from '../components/Users'

export const Users = connect(state => ({
    users: state.users
}), {})(SidebarComponent)