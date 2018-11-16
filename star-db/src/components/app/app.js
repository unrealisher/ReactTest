import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import PeoplePage from "../people-page";

import "./app.css";

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="main-body">
        <Header />
        <RandomPlanet />
        <PeoplePage />
      </div>
    );
  }
}
