import { connect } from 'react-redux';
import NotificationCountComponent from '../components/NotificationCount';


const mapStateToProps = state => {
    return {
        notificationCount: state.notificationCount
    }
}

export default connect(mapStateToProps)(NotificationCountComponent)