import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Connection from "./pages/Connection";
import Registration from "./pages/Registration";
import Workspace from "./pages/Workspace";
import Concepts from "./pages/wsPages/Concepts";
import Characters from "./pages/wsPages/Characters";
import Historic from "./pages/wsPages/Historic";
import Geography from "./pages/wsPages/Geography";
import Scenario from "./pages/wsPages/Scenario";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/scenario">
            <Scenario />
          </Route>
          <Route path="/geography">
            <Geography />
          </Route>
          <Route path="/historic">
            <Historic />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="/concepts">
            <Concepts />
          </Route>
          <Route path="/workspace">
            <Workspace />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/connection">
            <Connection />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
export default App;