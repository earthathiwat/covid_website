import React from "react";
import "whatwg-fetch";
import { Route } from "react-router-dom";
import "./style.css";
import Home from "./Home";
import About from "./About";
import NavBar from "./NavBar";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Footer />
    </div>
  );
}

export default App;
