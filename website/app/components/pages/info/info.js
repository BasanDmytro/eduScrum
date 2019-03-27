import React, { Component } from 'react';
import * as authActions from '../../../redux/modules/auth/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../../assets/styles/info.css';
import image from '../../../assets/styles/eduscrum.png';
class Info extends Component {

  render() {
    return (
      <div id = "page">
        <img src={image} id="image" alt="logo"/>
      </div>
    )
  }
}


export default Info;

