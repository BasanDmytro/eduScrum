import React, { Component } from 'react';
import Board from 'react-trello'
import logo from './logo.svg';
import './App.css';

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Planned Tasks',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins'},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
};

const CustomCard = props => {
  return (
    <div>
      <header
        style={{
          borderBottom: '1px solid #eee',
          paddingBottom: 6,
          marginBottom: 10,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          color: props.cardColor
        }}>
        <div style={{fontSize: 14, fontWeight: 'bold'}}>{props.name}</div>
        <div style={{fontSize: 11}}>{props.dueOn}</div>
      </header>
      <div style={{fontSize: 12, color: '#BD3B36'}}>
        <div style={{color: '#4C4C4C', fontWeight: 'bold'}}>{props.subTitle}</div>
        <div style={{padding: '5px 0px'}}>
          <i>{props.body}</i>
        </div>
        <div style={{marginTop: 10, textAlign: 'center', color: props.cardColor, fontSize: 15, fontWeight: 'bold'}}>
          {props.escalationText}
        </div>
      </div>
    </div>
  )
}

class App extends Component {
  render() {
    return <Board data={data} />
  }
}

export default App;
