import React, { Component } from 'react';
import BoardProject from '../pages/trello/trello'
import Login from '../pages/login/login'
import Registration from '../pages/registration/registration'
import '../../assets/styles/App.css';

class Menu extends Component {
  render() {
    return (
      <div>
        <Login />
        <Registration />
        <BoardProject />
      </div>
    )
  }
}

export default Menu;
