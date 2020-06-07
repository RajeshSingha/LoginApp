import React, {Component, useState, useEffect} from 'react'
import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import routes from './routes';

export const StatusContext = React.createContext(false);


function App() {
  const [status, setStatus] = useState(null);
  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });
  return (
    <StatusContext.Provider value={{status, setStatus}}>
        <Router history={history} basename={process.env.PUBLIC_URL}>
          <Switch>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Switch>
        </Router>
    </StatusContext.Provider>
  );
}

export default App;
