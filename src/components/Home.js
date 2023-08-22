import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  const styleColor = {
    color: 'firebrick'
  
  };

  return <div id="home">
    <h1 style={styleColor}>{name} is a Web Developer from {city}</h1>
  </div>;
}

export default Home;
