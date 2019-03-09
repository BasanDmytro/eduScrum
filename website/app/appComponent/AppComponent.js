import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
      <Router>
        <div>
          <Route exact path="/" component={Menu} />
          <Route path="/about" component={Menu} />
          <Route component={NotFoundPage} />
          <Route path="/topics" component={Menu} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, props) => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
