import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Cấu hình router
import { Router,BrowserRouter } from "react-router-dom";

// Cấu hình redux
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./Redux/reducers/rootReducer";

// reduxThunk
import reduxThunk from "redux-thunk";
import {history} from "./Util/history";

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
