import React, { Component } from 'react';
import Board from 'react-trello'
import logo from './logo.svg';
import NewCard from './trello.js'
import './App.css';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make', label: '30 mins'},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '1/1',
      cards: [{id: 'Card1', title: 'Write Blog', description: 'Can AI make 32', label: '30 mins'},]
    }
  ]
};

class App extends Component {
  render() {
    return <NewCard />
  }
}

export default App;
