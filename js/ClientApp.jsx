// @flow
import React from 'react'; // the same as const React = require(react)
import { render } from 'react-dom'; // Only including render from react-dome
import App from './App';

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();

if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp(); // Automatic refresh
  });
}
