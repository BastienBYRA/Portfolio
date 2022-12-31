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

  render() {
    return (
      <div className="App bg-zinc-800">
        {/* <Header key={nanoid()} /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<Details />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
