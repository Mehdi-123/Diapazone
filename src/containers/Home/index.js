import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Box, Button, Typography, Rating, Grid } from "@mui/material";

import GreenTitle from "components/GreenTitle";
import CustomAccordion from "components/CustomAccordion";
import LadyBg from "assets/images/lady-without-bg.png";
import ContractOne from "assets/images/contract-one.png";
import ContractTwo from "assets/images/contract-two.png";
import BigRightArrow from "assets/images/big-right-arrow.png";
import { ReactComponent as LeftArrow } from "assets/images/left-arrow.svg";
import { ReactComponent as RightArrow } from "assets/images/right-arrow.svg";
import { ReactComponent as IdentityCercle } from "assets/images/identity-cercle.svg";
import { ReactComponent as RoundedArrow } from "assets/images/rounded-arrow.svg";
import { ReactComponent as One } from "assets/images/one.svg";
import { ReactComponent as Two } from "assets/images/two.svg";
import { ReactComponent as Three } from "assets/images/three.svg";
import { ReactComponent as Four } from "assets/images/four.svg";
import { ReactComponent as Five } from "assets/images/five.svg";
import { ReactComponent as PhoneIcon } from "assets/images/phone.svg";

import {
  accordionData,
  reasonsToChoose,
  steps,
  testimonials,
} from "./staticData";
import Wrapper from "./wrapper";
import colors from "../../index.scss";

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

  const responsiveSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  const phoneResponsiveSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  return (
    <>
      <Box
        sx={{
          display: { phone: "none", xxxs: "none", xxs: "none", xs: "block" },
        }}
      >
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box className="slider-box-container" key={index}>
              <IdentityCercle className="identity-cercle" />
              <Box className="text-container">
                <Typography variant="h3" className="black medium">
                  <span className="bold">{testimonial.author}</span> |{" "}
                  {testimonial.date}
                </Typography>
                <Box mt={3}>
                  <Rating
                    name={`rating-${index}`}
                    value={testimonial.rating}
                    readOnly
                    className="rating"
                  />
                </Box>
                <Typography mt={2} variant="h4" className="feedback-text">
                  {testimonial.feedback}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box
        mx={13}
        sx={{
          display: { phone: "none", xxxs: "none", xxs: "block", xs: "none" },
        }}
      >
        <Slider {...responsiveSettings}>
          {testimonials.map((testimonial, index) => (
            <Box className="slider-box-container" key={index}>
              <IdentityCercle className="identity-cercle size" />
              <Box className="text-container">
                <Typography variant="h3" className="black medium">
                  <span className="bold">{testimonial.author}</span> |{" "}
                  {testimonial.date}
                </Typography>
                <Box mt={3}>
                  <Rating
                    name={`rating-${index}`}
                    value={testimonial.rating}
                    readOnly
                    className="rating"
                  />
                </Box>
                <Typography mt={2} variant="h4" className="feedback-text size">
                  {testimonial.feedback}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
      <Box
        mx={13}
        sx={{
          display: { phone: "block", xxxs: "block", xxs: "none", xs: "none" },
          mx: 3,
        }}
      >
        <Slider {...phoneResponsiveSettings}>
          {testimonials.map((testimonial, index) => (
            <Box className="slider-box-container" key={index}>
              <IdentityCercle className="identity-cercle size smaller" />
              <Box className="text-container">
                <Typography variant="h3" className="black medium">
                  <span className="bold">{testimonial.author}</span> |{" "}
                  {testimonial.date}
                </Typography>
                <Box mt={3}>
                  <Rating
                    name={`rating-${index}`}
                    value={testimonial.rating}
                    readOnly
                    className="rating"
                  />
                </Box>
                <Typography mt={2} variant="h4" className="feedback-text size">
                  {testimonial.feedback}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
};

const ActionSteps = () => {
  const icons = [<One />, <Two />, <Three />, <Four />, <Five />];

  return (
    <>
      <Box sx={{ display: { phone: "none", xxxs: "block" } }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className="action-steps-container"
        >
          {steps.map((step, index) => (
            <Grid
              item
              phone={12}
              xxxs={5}
              xxs={3}
              xs={3}
              md={3}
              lg={2}
              key={index}
            >
              <Box className="box-container">
                {icons[index]}
                <Typography
                  mt={4}
                  sx={{ display: { phone: "none", xxxs: "block" } }}
                  variant="h3"
                  className="bold"
                >
                  "{step}"
                </Typography>
                <Typography
                  mt={4}
                  sx={{ display: { phone: "block", xxxs: "none" } }}
                  variant="h3"
                  className="bold"
                >
                  "{step}"
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: { phone: "block", xxxs: "none" } }}>
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: index % 2 === 0 ? "flex-start" : "flex-start",
            }}
          >
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                mt: 3,
                width: "90%",
              }}
            >
              <Typography variant="h1" className="bold primary">
                {index}|
              </Typography>
              <Typography
                sx={{ display: { phone: "block", xxxs: "none" } }}
                variant="h3"
                className="bold"
              >
                {step}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

const Home = () => {
  return (
    <Wrapper>
      <Grid
        container
        sx={{
          display: {
            phone: "none",
            xxxs: "none",
            xxs: "none",
            xs: "flex",
            backgroundColor: colors.background,
          },
        }}
      >
        <Grid item xs={12}>
          <Box
            className="lady-img-box"
            sx={{ mt: 6, zIndex: 1, mb: -0.6, ml: 7 }}
          >
            <img src={LadyBg} alt="lady" className="img" />
          </Box>
        </Grid>
        <Grid item md={6} xs={6} sx={{ position: "absolute", right: 0 }}>
          <Box
            sx={{
              pt: { xxs: 5, xs: 15, sm: 20, md: 25, lg: 25, xl: 30 },
              pr: { md: 10, sm: 5 },
            }}
          >
            <Typography variant="h2" className="red bold">
              Une MUTUELLE santé adaptée à votre tempo financier
            </Typography>
            <Typography sx={{ mt: 5 }} variant="h3" className="black bold">
              L'harmonie parfaite entre économies et garanties renforcées !
            </Typography>
            <Typography sx={{ mt: 5 }} variant="h3" className="black bold">
              Jusqu'à 470 d'économies*
            </Typography>
            <Box sx={{ display: "flex", mt: 5 }}>
              <RoundedArrow />
              <Box sx={{ mt: 2, ml: 2 }}>
                <Link to="/formulaire" style={{ textDecoration: "none" }}>
                  <Button>J'obtiens mon tarif</Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: { xxs: "block", xs: "none" },
          backgroundColor: colors.background,
          px: { phone: 2, xxxs: 5, xxs: 10 },
          pt: { phone: 2, xxxs: 5, xxs: 10 },
          pb: 10,
        }}
      >
        <Grid item xs={12}>
          <Box>
            <Typography
              sx={{
                textAlign: { phone: "center", xxxs: "center", xxs: "left" },
              }}
              variant="h2"
              className="red bold"
            >
              Une MUTUELLE santé adaptée à votre tempo financier
            </Typography>
            <Typography
              sx={{
                mt: 5,
                textAlign: { phone: "center", xxxs: "center", xxs: "left" },
              }}
              variant="h3"
              className="black bold"
            >
              L'harmonie parfaite entre économies et garanties renforcées !
            </Typography>
            <Typography
              sx={{
                mt: 5,
                textAlign: { phone: "center", xxxs: "center", xxs: "left" },
              }}
              variant="h3"
              className="black bold"
            >
              Jusqu'à 470 d'économies*
            </Typography>
            <Box sx={{ display: "flex", mt: 5 }}>
              <Box
                sx={{
                  display: { phone: "none", xxxs: "none", xxs: "block" },
                  mr: 2,
                }}
              >
                <RoundedArrow />
              </Box>
              <Box
                sx={{
                  mt: 2,
                  mx: { phone: "auto", xxxs: "auto", xxs: 0 },
                }}
              >
                <Link to="/formulaire" style={{ textDecoration: "none" }}>
                  <Button>J'obtiens mon tarif</Button>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
            <Box
              sx={{
                display: { phone: "none", xxxs: "flex", xxs: "none" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <PhoneIcon style={{ width: 35, height: 35 }} />
              <Typography variant="h3" className="bold secondary">
                <a
                  href="tel:01.84.80.40.37"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  01.84.80.40.37
                </a>
              </Typography>
            </Box>
            <Box
              sx={{
                display: { phone: "flex", xxxs: "none" },
                alignItems: "center",
                gap: 2,
              }}
            >
              <PhoneIcon style={{ width: 30, height: 30 }} />
              <Typography variant="h3" className="bold secondary">
                01.84.80.40.37
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Box
        sx={{
          px: { phone: 5, xxxs: 5, xxs: 5, xs: 15 },
          pb: 15,
          mt: { phone: 5, xxxs: 5, xxs: 7, xs: 10 },
        }}
      >
        <GreenTitle title="Pourquoi nous choisir ?" />
        <Grid
          mt={10}
          textAlign="center"
          alignItems="center"
          justifyContent="space-evenly"
          container
          gap={3}
        >
          {reasonsToChoose.map((reason, index) => (
            <Grid key={index} sx={{ mb: { phone: 2, xxxs: 0 } }}>
              <Box>{reason.icon}</Box>
              <Typography my={3} variant="h3" className="secondary bold">
                {reason.title}
              </Typography>
              {reason.description.map((desc, i) => (
                <Typography key={i} variant="h4" className="bold">
                  {desc}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
        <Box className="desc-container">
          <Grid container alignItems="center">
            <Grid
              item
              xs={4}
              sx={{
                mx: { phone: "auto", xxxs: "auto", xxs: "auto", xs: "none" },
                mb: 5,
                textAlign: { phone: "center", xxxs: "none" },
              }}
            >
              <GreenTitle title="On s'occupe de tout !" />
            </Grid>
            <Grid
              item
              xxs={12}
              xs={8}
              sx={{ m: { phone: "0 auto", xxxs: "none" } }}
            >
              <Box
                sx={{
                  display: { phone: "block", xxxs: "flex" },
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <img src={ContractOne} alt="contract-one" />
                  <Typography
                    sx={{
                      margin: { phone: "10px 20px 0", xxxs: "10px 60px 0" },
                    }}
                    variant="h4"
                    className="black bold"
                  >
                    La résiliation de votre ancien contrat gratuitement
                  </Typography>
                </Box>

                <Box sx={{ display: { phone: "none", xxxs: "block" }, mr: 2 }}>
                  <img src={BigRightArrow} alt="right-arrow" />
                </Box>

                <Box sx={{ textAlign: "center", mt: { phone: 4, xxxs: 0 } }}>
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
            </Grid>
          </Grid>
        </Box>
        <Box mt={10}>
          <GreenTitle title="Plus de 5000 clients nous font confiance" />
          <Typography mt={5} variant="h3" className="black bold mb-40">
            97% de clients satisfaits
          </Typography>
          <Box sx={{ mt: { phone: 0, xxxs: 0, xxs: 2, xs: 7 } }}>
            <TestimonialsCarousel />
          </Box>
        </Box>
        <Box sx={{ mt: { phone: 0, xxxs: 0, xxs: 2, xs: 7 } }}>
          <Box sx={{ mb: { phone: 5, xxxs: 5, xxs: 7 } }}>
            <GreenTitle title="Passez à l'action" />
          </Box>
          <ActionSteps />
        </Box>
        <Box mt={10}>
          <GreenTitle title="On répond à vos questions!" />
          <Typography
            mt={5}
            variant="h3"
            className="before-accordion-title mb-15"
          >
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
