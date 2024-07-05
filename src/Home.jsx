import React from "react";
import Hero from "./components/Hero";
import Walking from "./components/Walking";
import Background from "./assets/bg.jpg";
import Divider from "@mui/material/Divider";
import Projects from "./components/Projects";


function Home() {
  return (
    <div
    // style={{ backgroundImage: `url(${Background})`, height: "100vh" }}
    >
      <Hero />
      <Divider variant="middle" sx={{ borderBottomWidth: 3 }} />
      <Projects
        title="Projects"
        description="Here are some of the projects I have worked on."
        image={Background}
      />
      {/* <Walking /> */}
    </div>
  );
}

export default Home;
