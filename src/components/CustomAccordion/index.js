import React, { useState } from "react";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

import { ReactComponent as AccordionDash } from "assets/images/accordion-dash.svg";
import { ReactComponent as AccordionPlus } from "assets/images/accordion-plus.svg";

import Wrapper from "./wrapper";

const CustomAccordion = ({ accordionData }) => {
  const [expandedAccordion, setExpandedAccordion] = useState(null);

  const handleAccordionChange = (index) => {
    setExpandedAccordion(expandedAccordion === index ? null : index);
  };

  return (
    <Wrapper>
      <Box>
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            expanded={expandedAccordion === index}
            onChange={() => handleAccordionChange(index)}
            className="accordion"
          >
            <AccordionSummary
              className="accordion-summary"
              expandIcon={
                <AccordionPlus
                  style={{
                    display: expandedAccordion === index ? "none" : "block",
                  }}
                  width={20}
                />
              }
            >
              <Typography
                variant="h3"
                className={`accordion-title ${
                  expandedAccordion === index ? "bold" : "medium"
                }`}
              >
                {item.title}
              </Typography>
              {expandedAccordion === index ? (
                <Box className="accordion-dash">
                  <AccordionDash width={20} />
                </Box>
              ) : null}
            </AccordionSummary>
            <AccordionDetails className="pt-20">
              <Typography className="accordion-content medium" variant="h3">
                {item.content}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Wrapper>
  );
};

export default CustomAccordion;
