import React from 'react';
import { render } from 'react-dom';

const App: React.FC = () => <h1>Hello world</h1>;

render(<App />, document.querySelector('#app'));
