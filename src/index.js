import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CarPark from "./carpark/CarPark";
import {createStore,applyMiddleware,compose} from "redux";
import rootReducer from "./root";
import thunk from "redux-thunk";
import {Provider, useSelector} from "react-redux";
import "./App.css";
import TokenService from "./TokenService";
import Login from "./carpark/Login";
import App from "./App";


const initialState = {};
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
);

export default store;


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Suspense >
            <App />
        </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
