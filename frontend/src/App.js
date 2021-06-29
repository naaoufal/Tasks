import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./component/Home";
import Orders from "./component/Orders";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Orders" component={Orders} />
    </Router>
  );
}

export default App;
