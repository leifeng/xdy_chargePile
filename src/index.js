require('antd/style/index.less');
require('./css/app.less');
import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/app.js';
ReactDom.render(<App/>,document.getElementById('root'))