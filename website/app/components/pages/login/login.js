import React, { Component } from 'react';
import * as authActions from '../../../redux/modules/auth/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link, Redirect} from "react-router-dom";
import Info from "../info/info";
import BoardProject from '../trello/trello'
import '../../../assets/styles/login.css';

class Login extends Component {

  state = {
    email: '',
    password: ''
  };

  handleClick(e) {
    const user = this.props.login(this.state.email, this.state.password);
    if (user) {
      return <Redirect to="/trello" component={BoardProject} />
    }
  }

  handleInputChangePassword = (event) => {
    this.setState({password: event.target.value});
  };

  handleInputChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };

  render() {
    return (
      <div id="form">
        <h2 id="titre">Connexion :</h2>
        <input onChange={this.handleInputChangeEmail} class="imputText" type="email" placeholder="Entrez votre adresse mail" />
        <input onChange={this.handleInputChangePassword} class="imputText" type="password" placeholder="Entrez votre mot de passe" />
        <Link to="/trello">
          <button id="valider" onClick={(e) => this.handleClick(e)}>
            Se connecter
          </button>
        </Link>
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