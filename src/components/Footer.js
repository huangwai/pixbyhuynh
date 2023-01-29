import React from 'react';
import { Box, Container, Row, Column, FooterLink} from '../css/FooterStyles';
import "../css/FooterStyles2.css";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: 'White', textAlign: 'center', marginTop: '-50px' }}>POWOW</h1>
      <Container>
        <Row>
          <Column>
            <FooterLink href="/">Home</FooterLink>
          </Column>
          <Column>
            {/* <Heading>Chat</Heading> */}
            <FooterLink href="/people">About</FooterLink>
            {/* <FooterLink href="createRoom">Create Room</FooterLink>
            <FooterLink href="publicChat">Start Chatting</FooterLink> */}
          </Column>
          <Column>
            {/* <Heading>Contact Us</Heading> */}
            <FooterLink href="/things">Things</FooterLink>
          </Column>
          <Column>
            {/* <Heading>Social Media</Heading> */}
            <FooterLink href="/contact">Contact</FooterLink>

            {/* <i className="fab fa-facebook-f">
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: '10px' }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: '10px' }}>Youtube</span>
              </i>
            </FooterLink> */}
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

// src/componetns/Footer.tsx

// import React, { FC, ReactElement } from "react";
// import { Box, Container, Grid, Typography } from "@mui/material";

// export const Footer: FC = (): ReactElement => {
//   return (
//     <Box
//       sx={{
//         width: "100%",
//         height: "auto",
//         backgroundColor: "secondary.main",
//         paddingTop: "1rem",
//         paddingBottom: "1rem",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container direction="column" alignItems="center">
//           <Grid item xs={12}>
//             <Typography color="black" variant="h5">
//               React Starter App
//             </Typography>
//           </Grid>
//           <Grid item xs={12}>
//             <Typography color="textSecondary" variant="subtitle1">
//               {`${new Date().getFullYear()} | React | Material UI | React Router`}
//             </Typography>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;