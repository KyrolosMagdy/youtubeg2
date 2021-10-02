import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MainNavComponent from './components/MainNav/MainNav.component';

import Videos from './components/Videos/Videos';
import SingleVideoDisplayerPage from './components/SingleVideoDisplayer/SingleVideoDisplayerPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <MainNavComponent />
        <Switch>
          <Route path='/' exact>
            <Videos />
          </Route>
          <Route path='/video/:videoId'>
            <SingleVideoDisplayerPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
