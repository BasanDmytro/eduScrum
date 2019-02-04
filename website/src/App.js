import React, { Component } from 'react';
import Board from 'react-trello'
import logo from './logo.svg';
import { Chart } from "react-google-charts";
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
    return (
      <div>
        <NewCard />
        <div className={"my-pretty-chart-container"}>
          <Chart
            width={'600px'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['x', 'Ideal Tasks Remaining', 'Actual Tasks Remaining'],
              [0, 5, 5],
              [1, 4, 3],
              [2, 3, 3],
              [3, 2, 3],
              [4, 1, 3],
              [5, 0, 0]
            ]}
            options={{
              hAxis: {
                title: 'Time',
              },
              vAxis: {
                title: 'Popularity',
              },
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
      </div>
    )
  }
}

export default App;
