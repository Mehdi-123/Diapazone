import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

import colors from "../../index.scss";

const Wrapper = styled(Box)`
  .before-accordion-title {
    line-height: 1.4;
  }
  .download-text {
    line-height: 1.4;
  }
  .lady-img-box {
    z-index: -1;
    .img {
      width: 450px;
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
        color: ${colors.black};
        margin: 16px auto;
        max-width: 65%;
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
    margin-top: 80px;
  }
  .action-steps-container {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;

    .box-container {
      flex: 1;
      text-align: center;
      position: relative;
      .text-container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -100%);
        width: 100%;
      }
    }
  }
  @media (max-width: 1024px) {
    .action-steps-container {
      .box-container {
        flex-basis: calc(50% - 15px);
      }
    }
  }
  @media (max-width: 600px) {
    .action-steps-container {
      .box-container {
        flex-basis: calc(100% - 30px);
      }
    }
  }
  .identity-cercle {
    width: 100%;
  }
  @media (max-width: 1813px) {
    .identity-cercle {
      width: 80%;
    }
  }
  @media (max-width: 820px) {
    .desc-container {
      padding: 20px 30px;
    }
    .slider-box-container {
      .text-container {
        .feedback-text {
          max-width: 45% !important;
        }
      }
    }
    .identity-cercle {
      &.size {
        &.smaller {
          width: 55%;
        }
      }
    }
  }
  @media (max-width: 650px) {
    .identity-cercle {
      &.size {
        width: 70% !important;
      }
    }
  }
  @media (max-width: 495px) {
    .identity-cercle {
      &.size {
        width: 95% !important;
      }
    }
  }
  @media (max-width: 1050px) {
    .identity-cercle {
      &.size {
        width: 45%;
      }
    }
    .slider-box-container {
      .text-container {
        .feedback-text {
          max-width: 35%;
        }
      }
    }
  }
  @media (max-width: 1300px) {
    .identity-cercle {
      width: 75%;
    }
    .lady-img-box {
      z-index: -1;
      .img {
        width: 400px;
      }
    }
  }
  @media (min-width: 1920px) {
    .slider-box-container {
      .text-container {
        .feedback-text {
          max-width: 50%;
        }
      }
    }
  }
  @media (max-width: 540px) {
    .slider-box-container {
      .text-container {
        transform: translate(-52%, -45%);
        .feedback-text {
          max-width: 60% !important;
          font-size: 0.7em;
        }
      }
    }
  }
  @media (max-width: 350px) {
    .slider-box-container {
      .text-container {
        .feedback-text {
          max-width: 60% !important;
          font-size: 0.6em;
        }
      }
    }
  }
`;

export default Wrapper;
