import * as React from "react";

import { Box, Typography } from "@mui/material";

const GreenTitle = ({ title }) => {
  return (
    <Box>
      <Typography variant="h2" className="secondary bold">
        {title}
      </Typography>
    </Box>
  );
};

export default GreenTitle;
