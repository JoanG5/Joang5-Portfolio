import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

function ProjectCard({ image, title, description }) {
return (
    <Card
        sx={{
            display: "flex",
            maxWidth: 600,
            margin: "auto",
            mt: 5,
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
            sx={{ width: 200, height: 200, objectFit: "cover" }}
            image={image}
            alt={title}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                    {title}
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                >
                    {description}
                </Typography>
            </CardContent>
        </Box>
    </Card>
);
}

export default ProjectCard;
