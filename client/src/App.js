import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.scss";
import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact Path="/bubble-page" component={BubblePage}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
