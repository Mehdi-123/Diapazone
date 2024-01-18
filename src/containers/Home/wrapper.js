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
  .representative-bloc-container {
    .lady-img-box {
      width: 100%;
      position: absolute;
      top: 0;
      z-index: -1;
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
      transform: translate(-50%, -50%);
      width: 100%;
      .rating {
        font-size: 1em;
        margin-bottom: 15px;
      }
      .p-0-90 {
        padding: 0 90px;
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
  .download-app-container {
    background: ${colors.background};
    border-radius: 50px;
    padding: 40px 80px;
    position: relative;
    .download-btns-container {
      display: flex;
      align-items: center;
      gap: 30px;
    }
    .mockup-phone-container {
      position: absolute;
      right: 3%;
      bottom: -5px;
      .mockup-phone-img {
        width: 220px;
        height: auto;
      }
    }
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
        top: 50%;
        left: 50%;
        transform: translate(-50%, -100%);
        width: 100%;
      }
      .mt-20 {
        margin-top: 20px;
      }
    }
  }
  .identity-cercle {
    width: 550px;
  }
  .mb-20 {
    margin-bottom: 20px;
  }
  .mb-70 {
    margin-bottom: 70px;
  }
  .button {
    background-color: ${colors.buttonBackground};
    border-radius: 25px;
    padding: 10px 25px;
    text-transform: none;
    color: ${colors.black};
    font-size: 1.2em;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${colors.primary};
    }
  }
  .representative-bloc {
    margin: 10% 5% 38% 45%;
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
