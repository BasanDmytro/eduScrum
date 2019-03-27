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
import '../assets/styles/PublicHeader.css';

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
                  Student
                </Link>

                <Link to="/admin" style={{color: 'white', 'margin-left': '20px'}}>
                  Admin
                </Link>

                <Link to="/prof" style={{color: 'white', 'margin-left': '20px'}}>
                  Professor
                </Link>
              </div>

              <div className="right-action" style={{'margin-left': '65%', color: 'red'}}>
                {!this.props.user ?
                  <div>
                    <Link to="/login"  style={{'margin-left': '20px'}}><button class="button" id="buttonCo">Connexion</button></Link>
                    <Link to="/signup" style={{'margin-left': '20px'}}><button class="button" id="buttonIns">S'inscrire</button></Link>
                  </div>
                  :
                  <button class="button" id="buttonDec" onClick={() => this.props.logout()}>Se déconnecter</button>
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
