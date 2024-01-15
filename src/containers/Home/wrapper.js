import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import { colors } from "theme/colors";

const Wrapper = styled(Box)`
  .primary {
    color: ${colors.primary};
  }
  .secondary {
    color: ${colors.secondary};
  }
  .red {
    color: ${colors.red};
  }
  .black {
    color: ${colors.black};
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .mb-70 {
    margin-bottom: 70px;
  }
  .lady-img {
    position: absolute;
    top: 0;
    z-index: -1;
  }
  .button {
    background-color: ${colors.buttonBackground};
    border-radius: 25px;
    padding: 10px 25px;
    text-transform: none;
    color: ${colors.black};
    font-size: 1.2em;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.1);
      background-color: ${colors.buttonBackground};
    }
  }
  .representative-bloc {
    margin: 10% 10% 38% 45%;
  }
  .identity-cercle {
    width: 450px;
  }
  @media (max-width: 1678px) {
    .representative-bloc {
      margin: 10% 10% 35% 45%;
    }
    .identity-cercle {
      width: 350px;
    }
  }
  @media (max-width: 1476px) {
    .representative-bloc {
      margin: 10% 10% 33% 45%;
    }
  }
`;

export default Wrapper;
