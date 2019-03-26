import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


// eslint-disable-next-line
class PublicHeader extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar className="main-header" id="main-header">
            <Toolbar className="top-toolbar">
              <div className="left-action">
                <Link to="/trello" style={{color: 'white'}}>
                  EduScrum
                </Link>

                <Link to="/admin" style={{color: 'white', 'margin-left': '20px'}}>
                  Admin
                </Link>
              </div>

              <div className="right-action" style={{'margin-left': '85%', color: 'red'}}>
                {!this.props.user ?
                  <div>
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/signup"><button>Sign Up</button></Link>
                  </div>
                  :
                  <button onClick={() => this.props.logout()}>Logout</button>
                }
              </div>
            </Toolbar>
          </AppBar>

        </div>
      </div>
    );
  }
}

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/guides/blocked-updates.md#quick-solution
export default (withStyles( { withTheme: true }))(PublicHeader);
