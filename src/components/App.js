import React from 'react';
import Header from "./Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './Home'
import SearchMovie from "./SearchMovie"
import Contact from "./Contact";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path={'/'}><Home/></Route>
          <Route exact path={'/search'}><SearchMovie/></Route>
          <Route exact path={'/contact'}><Contact/></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
