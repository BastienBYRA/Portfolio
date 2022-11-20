import "./App.css";
import Header from "./components/Header";
import React from "react";
import Home from "./components/Home";
import Parcours from "./components/Parcours";
import Stack from "./components/Stack";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App	bg-neutral-100">
        <Header />
        <Home />
        <Parcours />
        <Stack />
      </div>
    );
  }
}

export default App;
