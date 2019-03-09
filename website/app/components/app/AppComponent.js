import React, { Component } from 'react';
import BoardProject from '../pages/trello/trello'
import Login from '../pages/login/login'
import Registration from '../pages/registration/registration'
import '../../assets/styles/App.css';

import * as authActions from 'redux/modules/auth/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Menu extends Component {
  render() {
    return (
      <div>
        {!this.props.user ?
          <Login /> :
          ''
        }
        <Registration />
        <BoardProject />
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login: authActions.login,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
