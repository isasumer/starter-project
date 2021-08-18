import React from "react";
import Card from "./components/card/Card"
import Logo from "./assets/react.svg"
import './App.css';

const App = () => {
  return (
    <div className = "App">
      <div className ="logo">
        <img id="logo1" src= {Logo} alt="logo"></img>
      </div>
      <div className = "cards">
      <h2 className= "language">Languages</h2>
        <Card/>
      </div>
    </div>
  )
}

export default App;
