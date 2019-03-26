import React, {Component} from 'react'
import Board from 'react-trello'
import { Chart } from "react-google-charts";
import * as taskActions from '../../../redux/modules/tasks/tasksActions';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Admin from '../admin/admin'
import * as authActions from "../../../redux/modules/auth/authActions";
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import Chip from '@material-ui/core/Chip';
import deepPurple from '@material-ui/core/colors/deepPurple';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
});

class BoardProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      totalTasks: 2,
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.tasks.length !== state.data.lanes[0].cards + state.data.lanes[1].cards ) {
      state.data.lanes[0].cards = [];
      state.data.lanes[1].cards = [];
      props.tasks.forEach(task => {
        if (task.laneId === 'backlog') {
          const cardnew = {
            title: task.title,
            description: task.description,
            label: task.label,
            id: task._id,
            laneId: 'backlog'
          };
          state.data.lanes[0].cards.push(cardnew);
        }
        if (task.laneId === 'done') {
          const cardnew = {
            title: task.title,
            description: task.description,
            label: task.label,
            id: task._id,
            laneId: 'done'
          };
          state.data.lanes[1].cards.push(cardnew);
        }
      });
      state.data.lanes[0].id = 'backlog';
      state.data.lanes[1].id = 'done';
      state.data.lanes[0].laneId = 'backlog';
      return {
        data: state.data
      };
    }

    // Return null to indicate no change to state.
    return null;
  }



  componentDidMount() {
    this.props.getTasks();
    this.props.getUsers();
    const data = this.state.data;
    data.lanes[0].cards = [];
    data.lanes[1].cards = [];
    this.props.tasks.forEach(task => {
      if (task.laneId === 'backlog') {
        const cardnew = {
          title: task.title,
          description: task.description,
          label: task.label,
          id: task._id,
          laneId: 'backlog'
        };
        data.lanes[0].cards.push(cardnew);
      }
      if (task.laneId === 'done') {
        const cardnew = {
          title: task.title,
          description: task.description,
          label: task.label,
          id: task._id,
          laneId: 'done'
        };
        data.lanes[1].cards.push(cardnew);
      }
    });
    this.setState({data});
  }

  shouldReceiveNewData = (card, laneId) => {
    console.log(card);
    console.log('Board has changed');
    console.log(laneId)
  };

  handleCardDelete = (cardId, laneId) => {

    console.log(`Card: ${cardId} deleted from lane: ${laneId}`)
  };


  handleDragStart = (cardId, laneId) => {
    console.log('drag started')
    console.log(`cardId: ${cardId}`)
    console.log(`laneId: ${laneId}`)
  }

  handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    console.log('drag ended')
    console.log(`cardId: ${cardId}`)
    console.log(`sourceLaneId: ${sourceLaneId}`)
    console.log(`targetLaneId: ${targetLaneId}`)
  }

  render() {
    const data = this.state.data;
    return (
      <div>
        <Grid container justify="center" alignItems="center" style={{backgroundColor: '#6a4dff'}}>
          {
            this.props.user.group.map(user => (
              <Chip
                avatar={<Avatar>{user.charAt(0)}</Avatar>}
                label={user}
                style={styles.chip}
                color="primary"
              />
            ))
          }
        </Grid>
        <Board
          data={data}
          draggable
          id="EditableBoard1"
          onDataChange={this.shouldReceiveNewData}
          onCardDelete={this.handleCardDelete}
          handleDragStart={this.handleDragStart}
          handleDragEnd={this.handleDragEnd}
          onCardAdd={this.handleCardAdd}
          onCardClick={(cardId, metadata, laneId) => alert(`Card with id:${cardId} clicked. Card in lane: ${laneId}`)}
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
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getTasks: taskActions.getTasks,
  createTask: taskActions.createTask,
  updateTask: taskActions.updateTask,
  getUsers: authActions.getUsers,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BoardProject);
