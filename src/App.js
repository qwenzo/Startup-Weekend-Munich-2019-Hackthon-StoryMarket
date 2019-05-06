import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Main from './components/main/main';
import Header from './components/header/header';
import Project from './components/project/project'

function App() {
  return (
  <div>
    <Header />
    <Route path="/project" component={Project} />
  <Route path="/" exact component={Main} />
  </div>
  );
}

export default App;
