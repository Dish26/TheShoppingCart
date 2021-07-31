import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider
  //it will take a store prop and then in there we'll pass the store that we created n imported
    store={store}
  >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
