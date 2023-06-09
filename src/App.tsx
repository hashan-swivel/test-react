import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Typography } from './UI/atoms';

const App = () => (
  <div>
    <Typography variant="h2">This host app is used only to share atomic components to other apps</Typography>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
