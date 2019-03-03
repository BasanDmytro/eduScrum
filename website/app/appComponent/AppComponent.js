import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from '../components/pages/NotFoundPage/NotFoundPage';
import Menu from '../components/app/AppComponent';


const RouteWithHeader = ({component: Component, ...rest}) => (
  <div>
    <Route exact component={Component} {...rest} />
  </div>
);

class AppComponent extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <main className="main-wrapper">
            <Switch>
              <Route path="/login" component={Menu} />
              <RouteWithHeader path="/trello" component={Menu} />
              <Route exact path="/" render={() => <Redirect to="/trello" component={Menu} />} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
