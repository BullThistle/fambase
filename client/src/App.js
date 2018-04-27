import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'styling/semantic.less';
import { About, Landing } from 'components';

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
