import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ReactComponent as Logo } from "assets/logo/logo.svg";
import { ReactComponent as PhoneIcon } from "assets/images/phone.svg";

import colors from "../../index.scss";
import Wrapper from "./wrapper";

const links = [
  { text: "Obtenir un tarif", path: "/formulaire" },
  { text: "À propos", path: "/a-propos" },
  { icon: <PhoneIcon />, text: "01.84.80.40.37", path: "" },
];

const StyledDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    width: "60%",
    backgroundColor: colors.background,
    padding: "50px 30px 0",
  },
}));

const TopBar = () => {
  const { pathname } = useLocation();
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <Wrapper>
      <Box className="top-bar">
        <Box sx={{ zIndex: 99 }}>
          <Link to="/accueil" style={{ textDecoration: "none" }}>
            <Logo className="logo-size" />
          </Link>
        </Box>
        <Box className="buttons">
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { phone: "block", xxxs: "block", xxs: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuRoundedIcon
              sx={{
                width: { phone: 40, xxxs: 50 },
                height: { phone: 40, xxxs: 50 },
                color: colors.secondary,
              }}
            />
          </IconButton>
          {links.map(({ icon, text, path }) => (
            <Link key={path} to={path} style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: { phone: "none", xxxs: "none", xxs: "flex" },
                  alignItems: "center",
                  marginLeft: { phone: "auto", xxxs: "auto", xxs: 0 },
                }}
              >
                {icon && React.cloneElement(icon, { className: "phone-icon" })}
                <Typography
                  variant="h3"
                  className={`text bold ${pathname === path ? "selected" : ""}`}
                >
                  {text}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
      <StyledDrawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        <List>
          {links.map(({ text, path, icon }) => (
            <ListItem
              key={text}
              component={Link}
              to={path}
              onClick={toggleDrawer(false)}
            >
              <Box
                sx={{ display: "flex", alignItems: "center", mb: 3, gap: 1 }}
              >
                {icon && <PhoneIcon width={23} />}
                <Typography variant="h3" className="bold secondary">
                  {text}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
    </Wrapper>
  );
};

export default TopBar;
