import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  linkClasses,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectCard({ image, title, description, technologies, github }) {
  return (
    <Card
      sx={{
        display: "flex",
        minWidth: 600,
        minHeight: 400,
        maxWidth: 800,
        maxHeight: 200,
        margin: "auto",
        mt: 2.5,
        my: 2.5,
        border: "1px solid black",
        mx: 3,
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ width: 400, height: 400, objectFit: "cover" }}
        image={image}
        alt={title}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="div"
            variant="h4"
            sx={{
              color: "black",
              fontWeight: "bold",
              fontFamily: "'Roboto', sans-serif",
              marginBottom: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {title}
            {console.log(github)}
            <a href={github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon
                sx={{ fontSize: 30, "&:hover": { color: "lightblue" } }}
              />
            </a>
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            component="div"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              marginBottom: "1rem",
            }}
          >
            {description}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography
            variant="h6"
            // color="text.secondary"
            component="div"
            sx={{
              fontFamily: "'Roboto', sans-serif",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Technologies Used: {technologies}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}

export default ProjectCard;
