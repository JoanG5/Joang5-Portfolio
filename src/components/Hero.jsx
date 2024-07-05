import React, { useEffect, useState } from "react";
import { Box, Container, Fade, Typography, Grow } from "@mui/material";
import Picture from "../assets/JoanGuzmanPic.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

function Hero() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <Fade in={fadeIn} timeout={1000}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
          backgroundSize: "300% 300%",
          padding: 3,
          margin: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          marginBottom: 10,
        }}
      >
        <Grow in={fadeIn} timeout={1700}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              marginLeft: "10%",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                color: "white",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
              }}
            >
              Hi, I'm Joan Guzman | Aspiring Software Engineer
            </Typography>
            <Typography
              variant="h6"
              component="p"
              sx={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                marginTop: 2,
              }}
            >
              <a
                href="https://github.com/JoanG5"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "underline" }}
              >
                <GitHubIcon sx={{ fontSize: 40 }} />
              </a>
              <a
                href="https://www.linkedin.com/in/jguzman5/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "underline" }}
              >
                <LinkedInIcon sx={{ fontSize: 40, marginLeft: 10 }} />
              </a>
            </Typography>
          </Container>
        </Grow>
        <Grow in={fadeIn} timeout={2500}>
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "10%",
            }}
          >
            <img
              src={Picture}
              alt="Profile Image"
              style={{
                borderRadius: "25%",
                width: "400px",
                height: "400px",
                objectFit: "cover",
                border: "10px solid white",
                outline: "3px solid black",
              }}
            />
          </Container>
        </Grow>
      </Box>
    </Fade>
  );
}

export default Hero;
