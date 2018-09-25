import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todoapp from './todoapp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Todoapp/>, document.getElementById('root'));
registerServiceWorker();