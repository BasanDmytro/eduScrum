import React, { Component } from 'react';
import { ReactTextField, validator } from 'react-textfield';

class Login extends Component {

  state = {
    email: '',
    password: ''
  };

  handleClick(e) {
    console.log(e);
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

export default Login;
