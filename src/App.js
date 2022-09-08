import React from "react";
// Import all the components 
import NavBar from "./Components/Header/NavBar";
import Home from "./Components/Home/Home";
import SocialLinks from "./Components/SocialMedia/SocialLinks";
import About from "./Components/About/About";
// import Portfolio from "./Components/Portfolio/Portfolio";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      {/* <Portfolio /> */}
      <SocialLinks />
    </div>
  );
}

export default App;
