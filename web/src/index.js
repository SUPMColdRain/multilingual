import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { mainRoutes } from './routes';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        {mainRoutes.map(route => {
          return <Route key={route.path} {...route}/>;
        })}
        <Route render={routeProps => <App {...routeProps}/>}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
