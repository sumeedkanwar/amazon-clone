import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Router } from "@mui/icons-material";
import { Switch } from "@mui/material";
import { Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
