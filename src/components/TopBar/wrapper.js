import { styled } from "@mui/system";
import { Box } from "@mui/material";

import { colors } from "../../theme/colors";

const Wrapper = styled(Box)`
  z-index: 99;

  .text {
    color: ${colors.secondary};
    position: relative;

    &::after {
      content: "";
      position: absolute;
      width: 0; /* Initial width set to 0 */
      height: 2.5px;
      background-color: ${colors.primary};
      bottom: -6px;
      left: 15%;
      border-radius: 2px;
      transition: width 0.3s ease-in-out; /* Add transition property */
    }

    &:hover,
    &.selected {
      cursor: pointer;

      &::after {
        width: 70%; /* Set the width to 70% on hover or when selected */
      }
    }
  }

  .top-bar {
    background-color: ${colors.background};
    height: 170px;
    padding: 0 120px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .buttons {
      display: flex;
      gap: 20px;
      justify-content: flex-end;
    }
  }
`;

export default Wrapper;
