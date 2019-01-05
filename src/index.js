import React from 'react';
import { render } from 'react-dom';
import App from './App';
import WebFont from 'webfontloader';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as serviceWorker from './serviceWorker';

WebFont.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material+Icons']
  }
});

render(
  <React.Fragment>
    <CssBaseline />
    <App />
  </React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();