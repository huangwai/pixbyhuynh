import * as React from "react";
import Container from "@mui/material/Container";
// import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
export default function Footer() {
    return (
      <Paper sx={{marginTop: 'calc(10% + 60px)',
      width: '100%',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      }} component="footer" square variant="outlined">
        <Container maxWidth="lg">  
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "center",
              display: "flex",
              mb: 2,
            }}
          >
            <Typography variant="caption" color="initial">
              Copyright ©2022. [] Limited
            </Typography>
          </Box>
        </Container>
      </Paper>
    );
  }