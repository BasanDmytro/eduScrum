import React, {Component} from 'react'
import Board from 'react-trello'
import { Chart } from "react-google-charts";
import * as taskActions from '../../../redux/modules/tasks/tasksActions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Admin from '../admin/admin'
import * as authActions from "../../../redux/modules/auth/authActions";

class Professor extends Component {

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

  componentWillMount() {
    this.props.getTasks();
    this.props.getUsers();
  }

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
    const newCard = {
      name: card.title,
      description: card.description,
      time: card.label,
      laneCode: laneId
    };
    this.props.createTask(newCard);
    this.props.getTasks();
  };

  render() {
    return (
      <div>
        <Board
          data={this.state.data}
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

const mapStateToProps = (state, props) => ({
  tasks: state.tasks.tasks,
  users: state.auth.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTasks: taskActions.getTasks,
  createTask: taskActions.createTask,
  updateTask: taskActions.updateTask,
  getUsers: authActions.getUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Professor);
