import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import mainCss from '../public/stylesheets/main-css.css'
import cssReset from '../public/stylesheets/css-reset.css'


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
