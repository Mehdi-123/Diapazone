import * as React from "react";

import { Box, Typography } from "@mui/material";

import GreenTitle from "components/GreenTitle";

import { faqData } from "./staticData";

const Cgv = () => {
  return (
    <Box
      sx={{
        maxWidth: "2200px",
        margin: "0 auto",
        padding: {
          phone: "25px 30px",
          xxxs: "40px 50px",
          xxs: "40px 50px",
          xs: "80px 100px",
        },
      }}
    >
      <Box sx={{ marginBottom: "60px" }}>
        <GreenTitle title="Conditions Générales de Vente (CGV)" />
        <Typography sx={{ mt: "10px" }} variant="h3" className="red mb-15 bold">
          Diapazone By Olm Assurance
        </Typography>
      </Box>
      {faqData.map((data, index) => (
        <Box key={index}>
          <Typography variant="h3" className="primary mb-15 bold">
            {data.title}
          </Typography>
          <Typography
            variant="h3"
            className="black semi-bold"
            sx={{ marginBottom: "60px", lineHeight: 1.4 }}
          >
            {data.desc}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Cgv;
