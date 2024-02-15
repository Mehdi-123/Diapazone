import * as React from "react";

import { Typography } from "@mui/material";

const GreenTitle = ({ title }) => {
  return (
    <Typography variant="h2" className="secondary bold">
      {title}
    </Typography>
  );
};

export default GreenTitle;
