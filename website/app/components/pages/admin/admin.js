import React, { Component } from 'react';
import * as authActions from '../../../redux/modules/auth/authActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TableView from 'react-table-view'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import * as taskActions from "../../../redux/modules/tasks/tasksActions";

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});






let id = 0;
function createData(firstName, lastName, group, gender, birthday, university, course, role, email) {
  id += 1;
  return { id, firstName, lastName, group, gender, birthday, university, course, role, email };
}

class Admin extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const styles = theme => ({
      root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
      },
      table: {
        minWidth: 700,
      },
    });

    const rows = [];
    if (this.props && this.props.users) {
      this.props.users.forEach(user => {
        rows.push(createData(user.firstName, user.lastName, user.group, user.gender, user.birthday, user.university, user.course, user.role, user.email));
      });
    }

    return (
      <Paper className={styles.root}>
        <Table className={styles.table}>
          <TableHead>
            <TableRow>
              <TableCell>firstName</TableCell>
              <TableCell align="right">lastName</TableCell>
              <TableCell align="right">group</TableCell>
              <TableCell align="right">gender</TableCell>
              <TableCell align="right">birthday</TableCell>
              <TableCell align="right">university</TableCell>
              <TableCell align="right">course</TableCell>
              <TableCell align="right">role</TableCell>
              <TableCell align="right">email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.group}</TableCell>
                <TableCell align="right">{row.gender}</TableCell>
                <TableCell align="right">{row.birthday}</TableCell>
                <TableCell align="right">{row.university}</TableCell>
                <TableCell align="right">{row.course}</TableCell>
                <TableCell align="right">{row.role}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
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

export default connect(mapStateToProps, mapDispatchToProps)(Admin);


