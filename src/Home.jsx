import React from "react";
import Hero from "./components/Hero";
import Walking from "./components/Walking";
import Background from "./assets/bg.jpg";

function Home() {
  return (
    <div style={{ backgroundImage: `url(${Background})`, height: "100vh" }}>
      <Hero />
      <Walking />
    </div>
  );
}

export default Home;
