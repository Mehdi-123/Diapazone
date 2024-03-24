import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import colors from "../../index.scss";

const Wrapper = styled(Box)`
  .accordion {
    box-shadow: none;
    .accordion-summary {
      border-bottom: 2px solid ${colors.primary};
      .accordion-dash {
        margin-left: auto;
        margin-top: 20px;
      }
    }
    .accordion-content {
      line-height: 1.5;
    }
  }
  .MuiAccordion-root::before {
    display: none !important;
  }
  .MuiAccordionSummary-root {
    padding: 0;
  }
`;

export default Wrapper;
