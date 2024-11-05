import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/scss/global.scss';
import ToastNotification from "./ResuableComponent/ToasterNotification";
import GlobalLoader from "./ResuableComponent/GloaderLoader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastNotification /> 
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
