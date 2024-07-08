import React from "react";
import Hero from "./components/Hero";
import Walking from "./components/Walking";
import Background from "./assets/bg.jpg";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <Hero />
      <Projects />
      {/* <Walking /> */}
      <Footer />
    </div>
  );
}

export default Home;
