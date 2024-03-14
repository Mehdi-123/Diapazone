import { Link } from "react-router-dom";

import { Box, Grid, Typography } from "@mui/material";

import { ReactComponent as LogoWhite } from "assets/logo/logo-white.svg";
// import { ReactComponent as FacebookIcon } from "assets/icons/facebook-icon.svg";
// import { ReactComponent as LinkedinIcon } from "assets/icons/linkedin-icon.svg";
// import { ReactComponent as InstagramIcon } from "assets/icons/instagram-icon.svg";
// import { ReactComponent as TwitterIcon } from "assets/icons/twitter-icon.svg";

import { footerLinks1, footerLinks2, footerLinks3 } from "./staticData";
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
                  <Link
                    key={i}
                    to={item.link}
                    style={{ textDecoration: "none" }}
                  >
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
                  <Link
                    key={i}
                    to={item.link}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography key={i} variant="h4" className="white mb-10">
                      {item.text}
                    </Typography>
                  </Link>
                ))}
              </Grid>
            ))}
            {footerLinks3.map((link, index) => (
              <Grid key={index}>
                <Typography variant="h4" className="bold white mb-20">
                  {link.title}
                </Typography>
                {link.text.map((item, i) => (
                  <Link key={i} style={{ textDecoration: "none" }}>
                    <Typography key={i} variant="h4" className="white mb-10">
                      {item}
                    </Typography>
                  </Link>
                ))}
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box>
          <Typography variant="h5" className="white bold">
            Diapazone est une Société par Actions Simplifiée (SAS) est régie par
            le Code des Assurances et est immatriculée au Registre ORIAS
            (https://www.orisas.fr), sous le numéro 18001949.
          </Typography>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Footer;
