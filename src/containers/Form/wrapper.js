import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import colors from "index.scss";

const Wrapper = styled(Box)`
  .box-date {
    &:hover {
      cursor: pointer;
    }
    &.selected {
      border: 2px solid ${colors.secondary};
    }
  }
`;

export default Wrapper;
