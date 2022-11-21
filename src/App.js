import "./App.css";
import Header from "./layouts/Header";
import React from "react";
import Accueil from "./components/Accueil/Accueil";
import Parcours from "./components/Parcours/Parcours";
import Stack from "./components/Stack/Stack";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App	bg-neutral-100">
        <Header />
        <Accueil />
        <Parcours />
        <Stack />
      </div>
    );
  }
}

export default App;
