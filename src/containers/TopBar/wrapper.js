import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import colors from "../../index.scss";

const Wrapper = styled(Box)`
  z-index: 99;
  .phone-icon {
    width: 22px;
    margin-right: 10px;
    z-index: 99;
  }
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
    max-width: 2200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .buttons {
      display: flex;
      gap: 20px;
      justify-content: flex-end;
      align-items: center;
    }
  }
  @media (max-width: 1050px) {
    .top-bar {
      flex-direction: row-reverse;
    }
  }
  @media (max-width: 500px) {
    .top-bar {
      flex-direction: row-reverse;
    }
  }
`;

export default Wrapper;
