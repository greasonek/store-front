import React from "react";
import { ReactDOM } from "react";
import App from "./components/App";
import { Provider }from 'react-redux';
import { store } from './components/store/beast';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    < Provider store = {store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
