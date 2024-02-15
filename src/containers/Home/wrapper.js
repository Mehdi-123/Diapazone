import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import colors from "../../index.scss";

const Wrapper = styled(Box)`
  .px-100 {
    padding: 0 100px;
  }
  .px-60 {
    padding: 0 60px;
  }
  .mb-100 {
    margin-bottom: 100px;
  }
  .mb-40 {
    margin-bottom: 40px;
  }
  .mb-60 {
    margin-bottom: 60px;
  }
  .mb-30 {
    margin-bottom: 30px;
  }
  .mb-15 {
    margin-bottom: 15px;
  }
  .mb-7 {
    margin-bottom: 7px;
  }
  .mb-3 {
    margin-bottom: 3px;
  }
  .ml-10-per {
    margin-left: 15%;
  }
  .before-accordion-title {
    line-height: 1.4;
  }
  .download-text {
    line-height: 1.4;
  }
  .representative-bloc-container {
    .lady-img-box {
      width: 100%;
      position: absolute;
      top: 0;
      z-index: -1;
      margin-top: -100px;
      .img {
        width: 100%;
        height: auto;
      }
    }
  }
  .slider-box-container {
    text-align: center;
    position: relative;
    .text-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-51%, -50%);
      width: 100%;
      .rating {
        font-size: 1em;
        margin-bottom: 15px;
      }
      .feedback-text {
        padding: 0 120px;
        color: ${colors.black};
      }
      .mb-10 {
        margin-bottom: 10px;
      }
    }
  }
  .reasons-container {
    display: flex;
    justify-content: space-between;
    text-align: center;
    padding: 0 140px;
    margin-bottom: 120px;
    align-items: center;
  }
  .desc-container {
    background: ${colors.background};
    border-radius: 50px;
    padding: 40px 80px;
    position: relative;
  }
  .action-steps-container {
    display: flex;
    gap: 30px;
    .box-container {
      flex: 1;
      text-align: center;
      position: relative;
      .small-identity-cercle {
        width: 170px;
      }
      .text-container {
        position: absolute;
        top: 49%;
        left: 50%;
        transform: translate(-52%, -100%);
        width: 100%;
      }
      .mt-20 {
        margin-top: 20px;
      }
    }
  }
  .identity-cercle {
    width: 100%;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .mb-70 {
    margin-bottom: 70px;
  }
  .representative-bloc {
    margin: 8% 5% 42% 48%;
  }
  @media (max-width: 1813px) {
    .identity-cercle {
      width: 80%;
    }
  }
  @media (max-width: 1678px) {
    .representative-bloc {
      margin: 8% 10% 35% 48%;
    }
    .slider-box-container {
      .text-container {
        .feedback-text {
          padding: 0 90px;
        }
      }
    }
  }
  @media (max-width: 1476px) {
    .representative-bloc {
      margin: 8% 10% 33% 48%;
    }
  }
`;

export default Wrapper;
