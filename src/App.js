import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";

import "./App.css";
import Home from "./components/Home";
import Desigines from "./components/Designies";
import Category from "./components/Category";

class App extends Component {
  render() {
    return (
      <div className="Main_container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/Design" element={<Desigines />} />
            <Route exact path="/Category" element={<Category />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
