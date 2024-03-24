import * as React from "react";

import { Typography } from "@mui/material";

const GreenTitle = ({ title }) => {
  return (
    <Typography variant="h2" sx={{ fontWeight: "bold" }} className="secondary">
      {title}
    </Typography>
  );
};

export default GreenTitle;
