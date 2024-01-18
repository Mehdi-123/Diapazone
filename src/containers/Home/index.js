import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Button, Typography, Rating } from "@mui/material";

import Footer from "containers/Footer";
import GreenTitle from "components/GreenTitle";
import LadyWithBackground from "assets/images/lady-with-background.png";
import MockupIphone from "assets/images/mockup-iphone.png";
import { ReactComponent as AppStoreBadge } from "assets/images/app-store-badge.svg";
import { ReactComponent as GooglePlayBadge } from "assets/images/google-play-badge.svg";
import { ReactComponent as LeftArrow } from "assets/images/left-arrow.svg";
import { ReactComponent as RightArrow } from "assets/images/right-arrow.svg";
import { ReactComponent as IdentityCercle } from "assets/images/identity-cercle.svg";
import { ReactComponent as SmallIdentityCercle } from "assets/images/small-identity-cercle.svg";
import { ReactComponent as Trustpilot } from "assets/images/trustpilot.svg";

import {
  accordionData,
  reasonsToChoose,
  steps,
  testimonials,
} from "./staticData";
import Wrapper from "./wrapper";
import CustomAccordion from "components/CustomAccordion";

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
            <Typography variant="h4" className="black p-0-90">
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
          <Typography variant="h4" className="bold mt-20">
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
      <Box>
        <Box className="representative-bloc-container">
          <Box className="lady-img-box">
            <img src={LadyWithBackground} alt="lady" className="img" />
          </Box>
          <Box className="representative-bloc">
            <Typography variant="h2" className="primary bold mb-20">
              L'accord parfait entre économies et garanties personnalisées !
            </Typography>
            <Typography variant="h3" className="red bold mb-70">
              Une assurance adaptée à votre tempo financier
            </Typography>
            <Button className="button bold">J'obtiens mon tarif</Button>
          </Box>
        </Box>
        <Box className="px-100">
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

            <Box className="download-app-container">
              <Box className="mb-30">
                <Typography variant="h3" className="medium">
                  Téléchargez l'application Diapazone Assurances
                </Typography>
                <Typography variant="h3" className="medium">
                  et suivie la vie de votre contrat santé directement depuis
                  votre smartphone
                </Typography>
              </Box>
              <Box className="download-btns-container">
                <GooglePlayBadge />
                <AppStoreBadge />
              </Box>
              <Box className="mockup-phone-container">
                <img
                  src={MockupIphone}
                  alt="mockup-iphone"
                  className="mockup-phone-img"
                />
              </Box>
            </Box>
          </Box>
          <Box className="mb-100">
            <Box className="mb-15">
              <GreenTitle title="Ce que nos clients pensent" />
            </Box>
              <Trustpilot />
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
            <Typography variant="h3" className="mb-30">
              L'assurance peut sembler très compliquée à première vue. C'est
              pour cela que nous mettons à votre disposition cette FAQ qui, on
              le souhaite, répondra à toutes vos interrogations !
            </Typography>
            <CustomAccordion accordionData={accordionData} />
          </Box>
        </Box>

        <Footer />
      </Box>
    </Wrapper>
  );
};

export default Home;
