import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import  setupSpcket  from './sockets';
import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger'

import handleNewMessage from './sagas';
import username from './utils/name'
window.username = username;
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    reducers,
    {username},
    applyMiddleware(sagaMiddleware, logger));

const  socket  = setupSpcket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, {socket, username})

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
