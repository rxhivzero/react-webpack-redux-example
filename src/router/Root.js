import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../components/App';
import { HashRouter } from 'react-router-dom'
import Login from '../container/Login';
import NoMatch from '../components/NoMatch';

const Root = (props) => {
  return (
    <Provider store={props.store}>
      <Router history={props.history}>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/login" component={Login}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;

