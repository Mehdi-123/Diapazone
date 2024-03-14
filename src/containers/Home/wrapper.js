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
      width: 45%;
      height: auto;
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
        padding: 0 130px;
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
    .identity-cercle {
      &.size {
        &.smaller {
          width: 55%;
        }
      }
    }
    .slider-box-container {
      .text-container {
        .feedback-text {
          padding: 0 180px !important;
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
    .slider-box-container {
      .text-container {
        .feedback-text {
          &.size {
            padding: 0 100px !important;
          }
        }
      }
    }
  }
  @media (max-width: 495px) {
    .identity-cercle {
      &.size {
        width: 95% !important;
      }
    }
    .slider-box-container {
      .text-container {
        .feedback-text {
          &.size {
            padding: 0 50px !important;
          }
        }
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
          &.size {
            padding: 0 280px;
          }
        }
      }
    }
  }
  @media (max-width: 1300px) {
    .identity-cercle {
      width: 75%;
    }
    .slider-box-container {
      .text-container {
        .feedback-text {
          padding: 0 110px;
        }
      }
    }
  }
  @media (max-width: 1678px) {
    .slider-box-container {
      .text-container {
        .feedback-text {
          padding: 0 90px;
        }
      }
    }
  }
`;

export default Wrapper;
