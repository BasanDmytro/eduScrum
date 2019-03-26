import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Route, Switch, Redirect, withRouter } from 'react-router-dom';
import NotFoundPage from '../components/pages/NotFoundPage/NotFoundPage';
import PublicHeader from '../components/PublicHeader';
import Login from '../components/pages/login/login'
import Registration from '../components/pages/registration/registration'
import Info from '../components/pages/info/info'
import BoardProject from '../components/pages/trello/trello'
import Admin from '../components/pages/admin/admin'
import * as authActions from "../redux/modules/auth/authActions";

const RouteWithHeader = ({component: Component, ...rest}) => (
  <div>
    <Route exact component={Component} {...rest} />
  </div>
);

class AppComponent extends React.Component {
  render() {
    return (
        <div>
          <PublicHeader
            user={this.props.user}
            logout={this.props.logout}
          />
          <div style={{'margin-top': '64px'}}>
            <Switch>
              <Route exact path="/" component={Info} />
              <Route path="/trello" component={BoardProject} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Registration} />
              <Route path="/admin" component={Admin} />
              <Route exact path="/" render={() => <Redirect to="/" component={Info} />} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  user: state.auth.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login: authActions.login,
  logout: authActions.logout,
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppComponent));
