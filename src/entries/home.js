import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';
import myplaylist from '../myplaylist.json';
import { createStore } from 'redux';
import reducer from '../reducers/data';

const initialSate = {
    data: {
        ...data
    },
    myplaylist : {
        ...myplaylist
    }
}

const store = createStore(
    reducer,
    initialSate,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store.getState());


const homeContainer = document.getElementById('home-container');

render( <Home data={data} myplaylist={myplaylist} />, homeContainer);