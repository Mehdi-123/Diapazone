import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import colors from "../../index.scss";

const Wrapper = styled(Box)`
  .intensity-option {
    padding: 20px;
    cursor: pointer;
    color: ${colors.black};
    font-weight: bold;
    &.selected {
      border: solid 2px;
      color: ${colors.secondary};
      border-color: ${colors.secondary};
      &.right {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
      &.left {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
    }
  }
`;

export default Wrapper;
