import React from "react";
import { Box, Container, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
return (
    <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.8)", color: "white", py: 6, mt: 5 }}>
        <Container
            maxWidth="md"
            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
        >
            <Typography variant="h4" component="p" sx={{ fontWeight: "bold", fontFamily: "'Roboto', sans-serif" }}>
                Feel Free To Connect With Me!
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
                <Link
                    href="mailto:Joanguzman553@gmail.com"
                    color="inherit"
                    sx={{ mx: 1 }}
                >
                    <IconButton color="inherit">
                        <EmailIcon
                            sx={{
                                "&:hover": { color: "lightblue" },
                                width: 30,
                                height: 30,
                            }}
                        />
                    </IconButton>
                </Link>
                <Link
                    href="https://github.com/JoanG5"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="inherit"
                    sx={{ mx: 1 }}
                >
                    <IconButton color="inherit">
                        <GitHubIcon
                            sx={{
                                "&:hover": { color: "lightblue" },
                                width: 30,
                                height: 30,
                            }}
                        />
                    </IconButton>
                </Link>
                <Link
                    href="https://www.linkedin.com/in/jguzman5/"
                    target="_blank"
                    color="inherit"
                    sx={{ mx: 1 }}
                >
                    <IconButton color="inherit">
                        <LinkedInIcon
                            sx={{
                                "&:hover": { color: "lightblue" },
                                width: 30,
                                height: 30,
                            }}
                        />
                    </IconButton>
                </Link>
            </Box>
        </Container>
    </Box>
);
}

export default Footer;
