import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import registerServiceWorker from './utils/registerServiceWorker';
import store from './store/store';
import Wrapper from './hoc/Wrapper/Wrapper';
import Routes from './components/Routes/Routes';
import Navbar from './components/Header/Navbar/Navbar';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Navbar />
        <Routes />
      </Wrapper>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
