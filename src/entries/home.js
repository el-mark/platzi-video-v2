import React from 'react';
import { render } from 'react-dom';
import Home from '../pages/containers/home';
import data from '../api.json';
import myplaylist from '../myplaylist.json';


const homeContainer = document.getElementById('home-container');

render( <Home data={data} myplaylist={myplaylist} />, homeContainer);