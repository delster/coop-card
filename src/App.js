import React, { Component } from "react";
import "./App.sass";

import Header from "./components/layouts/Header";
import Game from "./components/Game";
//import Footer from "./components/layouts/Footer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
