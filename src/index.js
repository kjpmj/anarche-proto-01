import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import React from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
       <App/>
    </Provider>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();