import React from "react";
import Router from "Router";

import { Box } from "@mui/material";

import Footer from "containers/Footer";
import TopBar from "containers/TopBar";
import CookiesManagement from "CookiesManagement";

function App() {
  return (
    <Box>
      <TopBar />
      <Router />
      <Footer />
      <CookiesManagement />
    </Box>
  );
}

export default App;
