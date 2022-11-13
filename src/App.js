import "./App.css";
import Header from "./components/Header";
import React from "react";
import Profile from "./components/Profile";
import Description from "./components/Description";
import Parcours from "./components/Parcours";

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   listItem: null,
    //   position: [],
    //   frenchCity: null,
    //   chooseCity: null,
    //   errorMap: null,
    //   errorInApp: null,
    // };
    // this.APIkey = "Enter here the API KEY";
    // this.defaultValue = "--- Selectionner une ville ---";
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App	bg-neutral-100">
        <Header />
        {/* Main */}
        <Profile />
        <Description />
        <Parcours />
        {/* Stack */}
      </div>
    );
  }
}

export default App;
