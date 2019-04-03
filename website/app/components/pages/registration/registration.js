import React, { Component } from 'react';
import '../../../assets/styles/registration.css';
import {bindActionCreators} from "redux";
import * as authActions from "../../../redux/modules/auth/authActions";
import {connect} from "react-redux";
class Registration extends Component {

  state = {
    firstName : '',
    lastName : '',
    email: '',
    password: '',
    passwordConfirmation: '',
    gender: '',
    birthday: '',
  };

  handleInputChangeFirstName = (event) => {
    this.setState({firstName: event.target.value});
  };

  handleInputChangeLastName = (event) => {
    this.setState({lasttName: event.target.value});
  };

  handleInputChangeEmail = (event) => {
    this.setState({email: event.target.value});
  };

  handleInputChangePassword = (event) => {
    this.setState({password: event.target.value});
  };

  handleInputChangePasswordConfirmation = (event) => {
    this.setState({passwordConfirmation: event.target.value});
  };

  handleInputChangeGender = (event) => {
    this.setState({gender: event.target.value});
  };

  handleInputChangeBirthday = (event) => {
    this.setState({birthday: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    alert('Création compte: ' + this.state.firstName);
    this.props.registration(this.state);
  };

  checkPassword = () => {
    if (this.state.password !== this.state.passwordConfirmation) {
      return 'red'
    } else {
      return 'black'
    }
  };

  render() {
    return (
      <form id="form" onSubmit={this.handleSubmit}>
      <h2 id="titre">S'inscrire :</h2>
      <label>
        Prénom:
        <input type="text" class="zoneText" onChange={this.handleInputChangeFirstName} name="Prénom"/>
      </label>
      <label>
        Nom:
        <input type="text" class="zoneText" onChange={this.handleInputChangeLastName} />
      </label>
      <label>
        Adresse mail:
        <input type="email"class="zoneText"  onChange={this.handleInputChangeEmail} />
      </label>
      <label>
        Mot de passe:
        <input type="password" class="zoneText" onChange={this.handleInputChangePassword} />
      </label>
      <label>
        Confirmation du mot de passe:
        <input type="password" style={{color: this.checkPassword()}} class="zoneText" onChange={this.handleInputChangePasswordConfirmation} />
      </label>
      <label>
        Sexe:
        <label class="container">Homme
          <input type="radio" name ="gender" onChange={this.handleInputChangeGender}/>
          <span class="checkmark"></span>
        </label>
          <label class="container">Femme
            <input type="radio"  name ="gender" onChange={this.handleInputChangeGender} />
            <span class="checkmark"></span>
        </label>
      </label>
      <br/><br/>
      <label>
        Date de naissance :
        <input type="date" id="dateNaissance" onChange={this.handleInputChangeBirthday} />
      </label>
      <br/><br/>
      <input type="submit" id="valider" value="S'inscrire" />
    </form>
    )
  }
}

const mapStateToProps = (state, props) => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({
  registration: authActions.registration,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
