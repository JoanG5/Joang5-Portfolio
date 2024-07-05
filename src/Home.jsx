import React from "react";
import Hero from "./components/Hero";
import Walking from "./components/Walking";
import Background from "./assets/bg.jpg";
import Divider from "@mui/material/Divider";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <Hero />
      {/* <Divider variant="middle" sx={{ borderBottomWidth: 3 }} /> */}
      <Projects />
      {/* <Walking /> */}
      <Footer />
    </div>
  );
}

export default Home;
