import React, { Component } from 'react';
import BoardProject from '../pages/trello/trello'
import Login from '../pages/login/login'
import '../../assets/styles/App.css';

class Menu extends Component {
  render() {
    return (
      <div>
        <Login />
        <BoardProject />
      </div>
    )
  }
}

export default Menu;
