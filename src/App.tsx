import React from 'react';
import MainNavComponent from './components/MainNav/MainNav.component';
import './App.css';
import Videos from './components/Videos/Videos';

function App() {
  return (
    <div className='App'>
      <MainNavComponent />
      <Videos />
    </div>
  );
}

export default App;
