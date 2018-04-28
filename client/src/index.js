import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store';
import App from './App';
// import reducers from './reducers';

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);
if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
