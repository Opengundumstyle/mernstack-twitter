import { connect } from 'react-redux';
import { logout } from '../../actions/session_action';

import NavBar from './navbar';

const mapStateToProps = state => ({
    loggedIn: state.session.isAuthenticated
  });
  
  export default connect(
    mapStateToProps,
    { logout }
  )(NavBar);