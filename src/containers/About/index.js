import * as React from "react";

import { Box, Typography } from "@mui/material";

import GreenTitle from "components/GreenTitle";
import BackgroundMotif from "assets/images/background-motif.png";

import { aboutUsData } from "./staticData";

const About = () => {
  return (
    <Box sx={{ padding: "100px 140px", position: "relative" }}>
      <img
        src={BackgroundMotif}
        alt="contract-one"
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-150px",
          zIndex: -1,
        }}
      />
      <Box sx={{ marginBottom: "60px" }}>
        <GreenTitle title="À propos de nous" />
      </Box>
      <Typography
        variant="h3"
        className="black semi-bold"
        sx={{ marginBottom: "60px" }}
      >
        Diapazone, votre partenaire de confiance pour une protection d'assurance
        fiable et personnalisée. Nous sommes votre allié dévoué dans la création
        d'un avenir sécurisé.
      </Typography>
      {aboutUsData.map((data, index) => (
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

export default About;
