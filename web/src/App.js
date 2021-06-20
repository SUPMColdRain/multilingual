import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Frame from './components/Frame/Frame';
import { userRoutes } from './routes';
import { isLogined } from './utils/auth';

function App() {
  return isLogined() ? (
    <Frame>
      <Switch>
        {userRoutes.map(route => {
          return <Route key={route.path} path={route.path} render={routeProps => <route.component {...routeProps}/>}/>;
        })}
      </Switch>
    </Frame>
  ) : (<Redirect to="/login"/>);
}

export default App;
