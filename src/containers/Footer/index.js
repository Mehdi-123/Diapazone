import { Link } from "react-router-dom";

import { Box, Grid, Typography } from "@mui/material";

import { ReactComponent as LogoWhite } from "assets/logo/logo-white.svg";

import { footerLinks1, footerLinks2 } from "./staticData";
import Wrapper from "./wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <Box
        className="footer-container"
        sx={{ pt: 3, pb: 5, px: { phone: 3, xxxs: 5, xxs: 5, xs: 10 } }}
      >
        <Box className="footer-top" sx={{ mb: 3 }}>
          <Link to="/accueil" style={{ textDecoration: "none" }}>
            <LogoWhite className="logo-size" />
          </Link>
        </Box>
        <Box className="footer-middle" sx={{ mb: 3 }}>
          <Grid container className="top-container">
            {footerLinks1.map((link, index) => (
              <Grid key={index}>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold" }}
                  className="white mb-20"
                >
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
                <Typography
                  variant="h4"
                  sx={{ fontWeight: "bold" }}
                  className="white mb-20"
                >
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
          <Typography
            variant="h4"
            className="white"
            sx={{ textAlign: { phone: "center", xxxs: "flex-start" } }}
          >
            <span className="bold">Diapazone</span> est une marque exploitée par{" "}
            <span className="bold">OLM Assurances</span> société à
            responsabilité limitée, immatriculée sous le SIREN 922287735
          </Typography>
          <Typography
            sx={{ mt: 2, textAlign: { phone: "center", xxxs: "flex-start" } }}
            variant="h4"
            className="white"
          >
            Siège social : 16 RUE CUVIER 69006 LYON, FRANCE. Lyon B 922 287 735,
            code APE 6622Z - courtier d'assurances. ORIAS N° 23000591
            www.orias.fr .
          </Typography>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Footer;
