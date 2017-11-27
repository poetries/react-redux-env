import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Root from './containers/Root'
import configureStore from './store/configureStore';

const store = configureStore();


ReactDOM.render(<Root store={store} />, document.getElementById('root'));
