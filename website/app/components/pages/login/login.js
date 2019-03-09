import React, { Component } from 'react';
import { ReactTextField, validator } from 'react-textfield';

class Login extends Component {
  render() {
    return (
      <div>
        <button onClick={(e) => this.handleClick(e)}>
            Se connecter
        </button>
        <ReactTextField
        name="Identifiant"
        type="text"
        placeholder="Identifiant"
        validators={[
          {
            message: "La longueur de l'identifiant doit être compris entre 4 et 12 charactères.",
            validator: value => validator.length(value, { min: 4, max: 12 }),
          },
          {
            message: "L'identifiant doit comporter seulement des lettres.",
            validator: value => validator.isAlphanumeric(value),
          },
        ]}
        successMessage="Cet identifiant est invalide"
        />
        <ReactTextField
        name="Mot de passe"
        type="text"
        placeholder="Mot de passe"
        validators={[
          {
            message: "La longueur de l'identifiant doit être compris entre 4 et 12 charactères.",
            validator: value => validator.length(value, { min: 4, max: 12 }),
          },
        ]}
        successMessage="Le mot de passe est invalide"
        />
      </div>
    )
  }
}

export default Login;
