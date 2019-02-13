import React, {Component} from 'react'
import Board from 'react-trello'
import { Chart } from "react-google-charts";

class BoardProject extends Component {

  state = {
    data: {
      lanes: [
        {
          id: 'backlog',
          title: 'Backlog',
          cards: [{
            description: "Test Task 1",
            id: "e0141ad0-2e0c-11e9-af34-752500e6cd28",
            laneId: "backlog",
            title: "Task 1"
          }, {
            description: "Test Task 2",
            id: "e0141ad0-asd2-11e9-af34-752500e6cd98",
            laneId: "backlog",
            title: "Task 2"
          }
          ]
        },
        {
          id: 'done',
          title: 'Done',
          cards: []
        }
      ],
    },
    totalTasks: 2
  };

  shouldReceiveNewData = nextData => {
    console.log('Board has changed');
    console.log(nextData)
  };

  handleCardDelete = (cardId, laneId) => {
    console.log(`Card: ${cardId} deleted from lane: ${laneId}`)
  };

  handleCardAdd = (card, laneId) => {
    console.log(`New card added to lane ${laneId}`);
    this.setState({totalTasks: this.state.totalTasks + 1});
    console.dir(card)
  };

  render() {
    return (
      <div>
        <Board
          data={this.state.data}
          draggable
          id="EditableBoard1"
          onDataChange={this.shouldReceiveNewData}
          onCardDelete={this.handleCardDelete}
          onCardAdd={this.handleCardAdd}
          onCardClick={(cardId, metadata, laneId) => alert(`Card with id:${cardId} clicked. Card in lane: ${laneId}`)}
          editable
          canAddLanes
        />
        <div className={"my-pretty-chart-container"}>
          <Chart
            width={'600px'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['x', 'Ideal Tasks Remaining', 'Actual Tasks Remaining'],
              [this.state.totalTasks - this.state.totalTasks, this.state.totalTasks, this.state.totalTasks],
              [this.state.totalTasks, this.state.totalTasks - this.state.totalTasks, 0],
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

export default BoardProject;
