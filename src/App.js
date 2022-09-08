import React from "react";
// Import all the components
import NavBar from "./Components/Header/NavBar";
import Home from "./Components/Home/Home";
import SocialLinks from "./Components/SocialMedia/SocialLinks";
import About from "./Components/About/About";
import Skills from "./Components/Portfolio/Skills";
import Experience from "./Components/Experience/Experience";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
