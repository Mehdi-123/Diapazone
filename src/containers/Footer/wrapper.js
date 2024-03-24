import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import colors from "../../index.scss";

const Wrapper = styled(Box)`
  background: ${colors.secondary};
  .footer-container {
    max-width: 2200px;
    margin: 0 auto;
    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .icons-container {
        display: flex;
        align-items: center;
        gap: 13px;
      }
    }
    .footer-middle {
      .top-container {
        display: flex;
        gap: 80px;
        .link {
          text-decoration: none;
          &:hover {
            text-decoration: underline;
            color: white;
          }
        }
      }
      .bottom-container {
        margin-bottom: 100px;
      }
    }
    .mb-10 {
      margin-bottom: 10px;
    }
    .mb-20 {
      margin-bottom: 20px;
    }
  }
`;

export default Wrapper;
