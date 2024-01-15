import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

import { ReactComponent as Logo } from "assets/logo/logo.svg";

import Wrapper from "./wrapper";

const links = [
  { text: "Obtenir un tarif", path: "/" },
  { text: "À propos", path: "/accueil" },
  { text: "Contactez nous", path: "/contact-us" },
];

const TopBar = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <Box className="top-bar">
        <Link to="/accueil" style={{ textDecoration: "none" }}>
          <Logo className="logo-size" />
        </Link>
        <Box className="buttons">
          {links.map(({ text, path }) => (
            <Link key={path} to={path} style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                className={`text bold ${pathname === path ? "selected" : ""}`}
              >
                {text}
              </Typography>
            </Link>
          ))}
        </Box>
      </Box>
    </Wrapper>
  );
};

export default TopBar;
