import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import {render} from 'react-dom';
import App from './App';

render(React.createElement(hot(App)), document.querySelector('#root'));
