import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import GlobalStyles from './styles/GlobalStyles';

import Header from './components/Header';

const App: React.FC = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Header />
  </Provider>
);

render(<App />, document.querySelector('#app'));
