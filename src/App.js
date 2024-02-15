import Router from "Router";

import { Box } from "@mui/material";

import Footer from "containers/Footer";
import TopBar from "containers/TopBar";

function App() {
  return (
    <Box>
      <TopBar />
      <Router />
      <Footer />
    </Box>
  );
}

export default App;
