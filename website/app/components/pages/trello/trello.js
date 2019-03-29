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
import moment from "moment";
import BDC from "../../BDC.js";

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
      totalTeam: 0,
      timeSprint: 0,
      totalTasks: 2,
      totalLabel: 0,
      totalLabelDone: 0,
      startProject: new moment(),
      draw: false,
      count: 0
    };
  }


  static getDerivedStateFromProps(props, state) {
    let countDoneProps = 0;
    props.tasks.forEach(task => {
      if (task.laneId === 'done') {
        countDoneProps++;
      }
    });
    if (props.tasks.length !== state.data.lanes[0].cards + state.data.lanes[1].cards || countDoneProps !==  state.data.lanes[1].cards ) {
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
      return {
        data: state.data
      }
    }
    return null;
  };

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
    console.log('Board has changed');
    console.log(laneId)
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

  handleDragStart = (cardId, laneId) => {
    console.log('drag started')
    console.log(`cardId: ${cardId}`)
    console.log(`laneId: ${laneId}`)
  };

  handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    const card = this.state.data.lanes[0].cards.find(x => x.id === cardId);
    card._id = card.id;
    card.laneId = 'done';
    this.props.updateTask(card);

    this.props.getTasks();
  };

  handleInputChangeTimeSprint = (event) => {
    this.setState({timeSprint: parseInt(event.target.value)});
  };

  handleInputChangeTotalTeam = (event) => {
    this.setState({totalTeam: parseInt(event.target.value)});
  };

  labelDoneUpdate = (cards) => {
    let totalLabelDone = 0
    cards.forEach(card => {
      totalLabelDone += +card.label
    });
    console.log(totalLabelDone);
    this.setState({totalLabelDone: totalLabelDone}, function () {
      console.log(this.state.totalLabelDone);
    });
  };

  labelUpdate = ( cards) => {
    let totalLabel = 0
    cards.forEach(card => {
      totalLabel += +card.label
    });
    this.setState({totalLabel: totalLabel}, function () {
      console.log(this.state.totalLabel);
    });
  };


  handleClickMAJ(e) {
    this.props.getTasks();
    console.log(this.state)
    let count = this.state.count
    count++
    const cards = this.state.data.lanes.find(x => x.id === 'done').cards;
    const cardsBacklog = this.state.data.lanes.find(x => x.id === 'backlog').cards;
    let allCards= []
    cards.forEach(card=>{
      allCards.push(card)
    })
    cardsBacklog.forEach(card=>{
      allCards.push(card)
    })

    this.labelDoneUpdate(cards);
    this.labelUpdate(allCards);
      this.setState({draw: true, count});
  }

  render() {
    const group = (this.props && this.props.user && this.props.user.group) || [];
    const dataTable = this.state.data;
    return (
      <div>
        <Grid container justify="center" alignItems="center" style={{backgroundColor: '#6a4dff'}}>
          {
            group.map(user => (
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
          data={dataTable}
          draggable
          id="EditableBoard1"
          onDataChange={this.shouldReceiveNewData}
          onCardDelete={this.handleCardDelete}
          handleDragEnd={this.handleDragEnd}
          onCardAdd={this.handleCardAdd}
          onCardClick={(cardId, metadata, laneId) => alert(`Card with id:${cardId} clicked. Card in lane: ${laneId}`)}
        />
        <div className={"my-pretty-chart-container"}>
        {
          this.state.draw ?
          <BDC
            ll={console.log(this.state.totalLabel)}
            totalLabel={this.state.totalLabel}
            totalLabelDone={this.state.totalLabelDone}
            startProject={this.state.startProject}
            totalTeam={this.state.totalTeam}
            timeSprint={this.state.timeSprint}
            count={this.state.count}
          />:""
        }

        </div>
        <div>
          <input onChange={this.handleInputChangeTotalTeam} />
          <input onChange={this.handleInputChangeTimeSprint} />
        </div>
        <button onClick={(e) => {this.handleClickMAJ(e)} }>
            Mise à jour
        </button>
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
