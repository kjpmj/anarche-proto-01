import ReactDOM from 'react-dom';
import App from './App';
import store from './store/store';
import { Provider } from 'react-redux';
import React from 'react';
import './index.css';

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