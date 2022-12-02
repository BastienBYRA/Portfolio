import "./App.css";
import Header from "./layouts/Header";
import React from "react";
import { nanoid } from "nanoid";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="App	bg-neutral-100">
        <Header key={nanoid()} />

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
