import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './components/LoginForm/LoginForm';
import Reader from './Reader';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginForm}/>
        <Route path="/dashboard" exact component={App}/>
        <Route path="/reader" exact component={Reader}></Route>
        <Redirect from="*" to="/"/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
