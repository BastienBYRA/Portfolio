import React from "react";
import Accueil from "../components/Accueil/Accueil";
import Parcours from "../components/Parcours/Parcours";
import Stack from "../components/Stack/Stack";
import Project from "../components/Project/Project";
import { nanoid } from "nanoid";
import Contact from "../components/Contact/Contact";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Accueil key={nanoid()} />
        <Parcours key={nanoid()} />
        <Stack key={nanoid()} />
        <Project key={nanoid()} />
        <Contact key={nanoid()} />
      </div>
    );
  }
}

export default Home;
