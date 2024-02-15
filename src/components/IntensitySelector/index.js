import React, { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import colors from "index.scss";

import Wrapper from "./wrapper";

const IntensitySelector = ({ label, subLabel }) => {
  const [selectedOption, setSelectedOption] = useState("Minimum");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <Wrapper>
      <Typography
        sx={{ marginBottom: "20px" }}
        variant="h3"
        className="bold primary"
      >
        {label}
      </Typography>
      <Typography
        sx={{ marginBottom: "20px" }}
        variant="h3"
        className="semi-bold black"
      >
        {subLabel}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          width: "fit-content",
          alignItems: "center",
          backgroundColor: colors.background,
          borderColor: colors.secondary,
          borderRadius: "20px",
        }}
      >
        <Typography
          variant="h3"
          className={`intensity-option ${
            selectedOption === "Minimum" ? "selected left" : ""
          }`}
          onClick={() => handleOptionClick("Minimum")}
        >
          Minimum
        </Typography>
        <Typography
          variant="h3"
          className={`intensity-option ${
            selectedOption === "Moyen" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Moyen")}
        >
          Moyen
        </Typography>
        <Typography
          variant="h3"
          className={`intensity-option ${
            selectedOption === "Fort" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Fort")}
        >
          Fort
        </Typography>
        <Typography
          variant="h3"
          className={`intensity-option ${
            selectedOption === "Maximum" ? "selected right" : ""
          }`}
          onClick={() => handleOptionClick("Maximum")}
        >
          Maximum
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default IntensitySelector;
