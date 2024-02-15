import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Button, Typography, Rating } from "@mui/material";

import GreenTitle from "components/GreenTitle";
import CustomAccordion from "components/CustomAccordion";
import LadyWithBackground from "assets/images/lady-with-background.png";
import ContractOne from "assets/images/contract-one.png";
import ContractTwo from "assets/images/contract-two.png";
import BigRightArrow from "assets/images/big-right-arrow.png";
import { ReactComponent as LeftArrow } from "assets/images/left-arrow.svg";
import { ReactComponent as RightArrow } from "assets/images/right-arrow.svg";
import { ReactComponent as IdentityCercle } from "assets/images/identity-cercle.svg";
import { ReactComponent as SmallIdentityCercle } from "assets/images/small-identity-cercle.svg";
import { ReactComponent as RoundedArrow } from "assets/images/rounded-arrow.svg";

import {
  accordionData,
  reasonsToChoose,
  steps,
  testimonials,
} from "./staticData";
import Wrapper from "./wrapper";
import { Link } from "react-router-dom";

const TestimonialsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <Box className="slider-box-container" key={index}>
          <IdentityCercle className="identity-cercle" />
          <Box className="text-container">
            <Typography variant="h3" className="black medium mb-10">
              <span className="bold">{testimonial.author}</span> |{" "}
              {testimonial.date}
            </Typography>
            <Rating
              name={`rating-${index}`}
              value={testimonial.rating}
              readOnly
              className="rating"
            />
            <Typography variant="h4" className="feedback-text">
              {testimonial.feedback}
            </Typography>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

const ActionSteps = () => {
  return (
    <Box className="action-steps-container">
      {steps.map((step, index) => (
        <Box key={index} className="box-container">
          <SmallIdentityCercle className="small-identity-cercle" />
          <Box className="text-container">
            <Typography variant="h1" className="primary bold">
              {index + 1}
            </Typography>
          </Box>
          <Typography
            variant="h4"
            className="bold"
            sx={{ margin: "20px 50px 0" }}
          >
            {step}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

const Home = () => {
  return (
    <Wrapper>
      <Box className="representative-bloc-container">
        <Box className="lady-img-box">
          <img src={LadyWithBackground} alt="lady" className="img" />
        </Box>
        <Box className="representative-bloc">
          <Typography variant="h2" className="red bold mb-40">
            Une MUTUELLE santé adaptée à votre tempo financier
          </Typography>
          <Typography variant="h3" className="primary bold mb-60">
            L'harmonie parfaite entre économies et garanties renforcées !
          </Typography>
          <Typography variant="h3" className="black bold mb-40">
            Jusqu'à 470 d'économies*
          </Typography>
          <Box sx={{ display: "flex" }}>
            <RoundedArrow />
            <Box sx={{ margin: "10px 0 0 10px" }}>
              <Link to="/formulaire" style={{ textDecoration: "none" }}>
                <Button>J'obtiens mon tarif</Button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="px-100" sx={{ marginTop: "50px" }}>
        <Box className="mb-100">
          <Box className="mb-40">
            <GreenTitle title="Pourquoi nous choisir ?" />
          </Box>
          <Box className="reasons-container">
            {reasonsToChoose.map((reason, index) => (
              <Box key={index}>
                <Box className="mb-30">{reason.icon}</Box>
                <Typography variant="h3" className="secondary bold mb-7">
                  {reason.title}
                </Typography>
                {reason.description.map((desc, i) => (
                  <Typography key={i} variant="h4" className="bold mb-3">
                    {desc}
                  </Typography>
                ))}
              </Box>
            ))}
          </Box>
          <Box className="desc-container">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <GreenTitle title="On s'occupe de tout !" />
              </Box>
              <Box sx={{ flex: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box sx={{ textAlign: "center" }}>
                    <img src={ContractOne} alt="contract-one" />
                    <Typography
                      sx={{ margin: "10px 60px 0" }}
                      variant="h4"
                      className="black bold"
                    >
                      La résiliation de votre ancien contrat gratuitement
                    </Typography>
                  </Box>
                  <img src={BigRightArrow} alt="right-arrow" />
                  <Box sx={{ textAlign: "center" }}>
                    <img src={ContractTwo} alt="contract-two" />
                    <Typography
                      sx={{ margin: "10px 60px 0" }}
                      variant="h4"
                      className="black bold"
                    >
                      Mise en place du nouveau contrat
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="mb-100">
          <Box className="mb-15">
            <GreenTitle title="Plus de 5000 clients nous font confiance" />
          </Box>
          <Typography variant="h3" className="black bold mb-40">
            97% de clients satisfaits
          </Typography>
          <Box className="px-60">
            <TestimonialsCarousel />
          </Box>
        </Box>
        <Box className="mb-100">
          <Box className="mb-40">
            <GreenTitle title="Passez à l'action" />
          </Box>
          <ActionSteps />
        </Box>
        <Box className="mb-100">
          <Box className="mb-30">
            <GreenTitle title="On répond à vos questions!" />
          </Box>
          <Typography variant="h3" className="before-accordion-title mb-15">
            L'assurance peut sembler très compliquée à première vue. C'est pour
            cela que nous mettons à votre disposition cette FAQ qui, on le
            souhaite, répondra à toutes vos interrogations !
          </Typography>
          <CustomAccordion accordionData={accordionData} />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Home;
