import "./App.css";
import Header from "./layouts/Header";
import React from "react";
import Accueil from "./components/Accueil/Accueil";
import Parcours from "./components/Parcours/Parcours";
import Stack from "./components/Stack/Stack";
import { nanoid } from "nanoid";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App	bg-neutral-100">
        <Header key={nanoid()} />
        <Accueil key={nanoid()} />
        <Parcours key={nanoid()} />
        <Stack key={nanoid()} />
      </div>
    );
  }
}

export default App;
