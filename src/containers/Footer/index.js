import { Link } from "react-router-dom";

import { Box, Grid, Typography } from "@mui/material";

import { ReactComponent as LogoWhite } from "assets/logo/logo-white.svg";

import { footerLinks1, footerLinks2 } from "./staticData";
import Wrapper from "./wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <Box className="footer-container">
        <Box className="footer-top">
          <Link to="/accueil" style={{ textDecoration: "none" }}>
            <LogoWhite className="logo-size" />
          </Link>
        </Box>
        <Box className="footer-middle">
          <Grid container className="top-container">
            {footerLinks1.map((link, index) => (
              <Grid key={index}>
                <Typography variant="h4" className="bold white mb-20">
                  {link.title}
                </Typography>
                {link.text.map((item, i) => (
                  <Link key={i} to={item.link} className="link">
                    <Typography key={i} variant="h4" className="white mb-10">
                      {item.text}
                    </Typography>
                  </Link>
                ))}
              </Grid>
            ))}
            {footerLinks2.map((link, index) => (
              <Grid key={index}>
                <Typography variant="h4" className="bold white mb-20">
                  {link.title}
                </Typography>
                {link.text.map((item, i) => (
                  <Link key={i} to={item.link} className="link">
                    <Typography key={i} variant="h4" className="white mb-10">
                      {item.text}
                    </Typography>
                  </Link>
                ))}
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          <Typography variant="h4" className="white">
            <span className="bold">Diapazone</span> est une marque exploitée par{" "}
            <span className="bold">OLM Assurances</span> société à
            responsabilité limitée, immatriculée sous le SIREN 922287735
          </Typography>
          <Typography sx={{ mt: 1 }} variant="h4" className="white">
            - Siège social : 16 RUE CUVIER 69006 LYON, FRANCE. Lyon B 922 287
            735, code APE 6622Z - courtier d'assurances. ORIAS N° 23000591
            www.orias.fr .
          </Typography>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Footer;
