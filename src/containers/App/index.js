import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useInjectReducer, useInjectSaga } from 'redux-injectors';

import Home from '../Home/index';
import reducer from './reducer';
import saga from './saga';
const key = 'app';

const App = () => {
  useInjectSaga({
    key: 'app',
    saga: saga,
  });
  useInjectReducer({ key: key, reducer });
    return (
      <Router>
        <Switch>
        <Route
            path="/"
            render={() => <Home />} />
        </Switch>
      </Router>
    );
}

export default App;