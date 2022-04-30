import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './services/store';
import App from './App';
import Interceptor from './services/auth/Interceptor';
import reportWebVitals from './reportWebVitals';
import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);

Interceptor();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
