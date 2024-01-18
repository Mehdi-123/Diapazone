import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import colors from "../../index.scss";

const Wrapper = styled(Box)`
  .accordion {
    box-shadow: none;
    .accordion-summary {
      border-bottom: 2px solid ${colors.primary};
      .accordion-title {
        margin-top: 50px;
        margin-bottom: 15px;
      }
      .ml-auto {
        margin-left: auto;
      }
    }
    .accordion-content {
      line-height: 1.8;
    }
    .pt-20 {
      padding-top: 20px;
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
