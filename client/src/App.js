import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styling/semantic.less';
import { About, Landing } from 'components';

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </div>
);

export default App;
