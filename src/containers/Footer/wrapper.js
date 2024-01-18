import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import colors from "../../index.scss";

const Wrapper = styled(Box)`
  .footer-container {
    background: ${colors.secondary};
    padding: 60px 100px 40px;
    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;
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
        margin-bottom: 40px;
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
