import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Navigation from './components/navigation';

import Home from './components/home';
import About from "./components/about";
import Resume from "./components/resume";
import Projects from "./components/projects";

function App() {
  return (
    <div className={'mainBackground'}>
      <Router>
        <Navigation/>
        <Switch>
            <Route path={"/"} exact component={Home}/>
            <Route path={'/about'}  component={About}/>
            <Route path={'/resume'}  component={Resume}/>
            <Route path={'/projects'}  component={Projects}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
