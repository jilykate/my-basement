import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import myBasementApp from './reducers';
import Root from './root';
import { render } from 'react-dom';

import initialState from './initialState';
import * as localDB from './database/localDB';

console.log(initialState);

localDB.getAllCategories().then(data => {
    console.log(data);
})

const store = createStore(myBasementApp, initialState);
render(<Root store={ store } />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
