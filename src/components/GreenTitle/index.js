import * as React from "react";

import { Typography } from "@mui/material";

import Wrapper from "./wrapper";

const GreenTitle = ({ title }) => {
  return (
    <Wrapper>
      <Typography variant="h2" className="title bold">
        {title}
      </Typography>
    </Wrapper>
  );
};

export default GreenTitle;
