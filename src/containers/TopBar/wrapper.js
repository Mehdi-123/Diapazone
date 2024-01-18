import { styled } from "@mui/system";
import { Box } from "@mui/material";

import colors from "../../index.scss";

const Wrapper = styled(Box)`
  z-index: 99;
  .text {
    color: ${colors.secondary};
    position: relative;
    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2.5px;
      background-color: ${colors.primary};
      bottom: -6px;
      left: 15%;
      border-radius: 2px;
      transition: width 0.3s ease-in-out;
    }
    &:hover,
    &.selected {
      cursor: pointer;
      &::after {
        width: 70%;
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
