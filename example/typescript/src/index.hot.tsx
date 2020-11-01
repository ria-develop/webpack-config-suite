import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import {render} from 'react-dom';
import App from './App';

const HotApp = hot(App);

render(<HotApp />, document.querySelector('#root'));
