import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'styling/semantic.less';
import { Navbar, Home, About } from 'components';

const App = () => (
  <div>
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
