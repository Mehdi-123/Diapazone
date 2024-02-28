import * as React from "react";

import { Box, Typography } from "@mui/material";

import GreenTitle from "components/GreenTitle";
import BackgroundMotif from "assets/images/background-motif.png";

import { faqData } from "./staticData";

const LegalNotice = () => {
  return (
    <Box
      sx={{
        padding: { phone: "25px 30px", xxxs: "30px 40px", xxs: "100px 140px" },
        position: "relative",
      }}
    >
      <img
        src={BackgroundMotif}
        alt="contract-one"
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "0",
          zIndex: -1,
        }}
      />
      <Box sx={{ marginBottom: "60px" }}>
        <GreenTitle title="Mentions légales" />
      </Box>
      <Typography
        variant="h3"
        className="black semi-bold"
        sx={{ marginBottom: "60px" }}
      >
        Conformément aux dispositions des articles 6-III et 19 de la loi pour la
        confiance dans l’économie numérique, nous vous informons que :
      </Typography>
      {faqData.map((data, index) => (
        <Box key={index}>
          <Typography variant="h3" className="secondary mb-15 bold">
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

export default LegalNotice;
