import React, { Component } from 'react';
import * as authActions from '../../../redux/modules/auth/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends Component {

  state = {
    email: '',
    password: ''
  };

  handleClick(e) {
    this.props.login(this.state.email, this.state.password);
  }

  handleInputChangePassword = (event) => {
    this.setState({password: event.target.value});
  };

  handleInputChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };

  render() {
    return (
      <div>
        <input onChange={this.handleInputChangeEmail} type="email" />
        <input onChange={this.handleInputChangePassword} type="password" />
        <button onClick={(e) => this.handleClick(e)}>
            Se connecter
        </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);

