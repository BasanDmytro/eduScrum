import React, { Component } from 'react';

class Registration extends Component {

  state = {
    firstName : '',
    lastName : '',
    email: '',
    password: '',
    passwordConfirmation: '',
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

  handleSubmit(event) {
    alert('Création compte: ' + this.state.firstName);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>
        Prénom:
        <input type="text" firstName={this.state.value} onChange={this.handleInputChangeFirstName} name="Prénom"/>
      </label>
      <label>
        Name:
        <input type="text" lastName={this.state.value} onChange={this.handleInputChangeLastName} />
      </label>
      <label>
        Adresse mail:
        <input type="email" email={this.state.value} onChange={this.handleInputChangeEmail} />
      </label>
      <label>
        Mot de passe:
        <input type="password" password={this.state.value} onChange={this.handleInputChangePassword} />
      </label>
      <label>
        Confirmation du mot de passe:
        <input type="password" passwordConfirmation={this.state.value} onChange={this.handleInputChangePasswordConfirmation} />
      </label>
      <input type="submit" value="S'inscrire" />
    </form>
    )
  }
}

export default Registration;
