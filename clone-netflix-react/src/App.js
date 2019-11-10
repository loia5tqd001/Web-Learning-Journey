import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Main from './pages'
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" component={Main}/>
    </Switch>
  );
}

export default App;
