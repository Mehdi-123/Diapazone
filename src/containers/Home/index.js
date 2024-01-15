import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Button, Typography, Rating } from "@mui/material";

import GreenTitle from "components/GreenTitle";
import LadyWithBackground from "assets/images/lady-with-background.png";
import MockupIphone from "assets/images/mockup-iphone.png";
import { ReactComponent as Like } from "assets/images/like.svg";
import { ReactComponent as HelpCenter } from "assets/images/help-center.svg";
import { ReactComponent as AppStoreBadge } from "assets/images/app-store-badge.svg";
import { ReactComponent as GooglePlayBadge } from "assets/images/google-play-badge.svg";
import { ReactComponent as LeftArrow } from "assets/images/left-arrow.svg";
import { ReactComponent as RightArrow } from "assets/images/right-arrow.svg";
import { ReactComponent as IdentityCercle } from "assets/images/identity-cercle.svg";
import { ReactComponent as MoneyPig } from "assets/images/money-pig.svg";
import { colors } from "theme/colors";

import Wrapper from "./wrapper";

const reasonsToChoose = [
  {
    icon: <Like />,
    title: "Service 100% Gratuit",
    description: ["0 commission", "0 frais caché"],
  },
  {
    icon: <MoneyPig />,
    title: "450 euros* d'économies",
    description: [
      "Les tarifs les plus bas sur le marché",
      "jusqu'à 450 euros* d'économies",
    ],
  },
  {
    icon: <HelpCenter />,
    title: "Accompagnement 7/7",
    description: [
      "Un gestionnaire santé dédié et",
      "suivi continu de votre dossier",
    ],
  },
];

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      author: "Mehdi Harit",
      date: "06.2023",
      rating: 5, // Rating out of 5 stars
      feedback:
        "Très bon contact avec mon conseiller, les explications sont claires et il n'a pas hésité à prendre du temps pour que tout soit bien clair",
    },
    {
      author: "Mehdi Harit",
      date: "06.2023",
      rating: 4,
      feedback:
        "Très bon contact avec mon conseiller, les explications sont claires et il n'a pas hésité à prendre du temps pour que tout soit bien clair",
    },
    {
      author: "Mehdi Harit",
      date: "06.2023",
      rating: 3,
      feedback:
        "Très bon contact avec mon conseiller, les explications sont claires et il n'a pas hésité à prendre du temps pour que tout soit bien clair",
    },
    {
      author: "Mehdi Harit",
      date: "06.2023",
      rating: 5,
      feedback:
        "Très bon contact avec mon conseiller, les explications sont claires et il n'a pas hésité à prendre du temps pour que tout soit bien clair",
    },
    {
      author: "Mehdi Harit",
      date: "06.2023",
      rating: 4,
      feedback:
        "Très bon contact avec mon conseiller, les explications sont claires et il n'a pas hésité à prendre du temps pour que tout soit bien clair",
    },
  ];

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
        <Box sx={{ textAlign: "center", position: "relative" }} key={index}>
          <IdentityCercle className="identity-cercle" />
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
            }}
          >
            <Typography
              sx={{ marginBottom: "10px" }}
              variant="h3"
              className="black medium"
            >
              <span className="bold">{testimonial.author}</span> |{" "}
              {testimonial.date}
            </Typography>
            <style>
              {`
                .MuiRating-root .MuiRating-iconFilled {
                  color: ${colors.buttonBackground};
                }
                .MuiRating-root .MuiRating-iconEmpty {
                  border-color: ${colors.buttonBackground};
                }
              `}
            </style>
            <Rating
              name={`rating-${index}`}
              value={testimonial.rating}
              readOnly
              sx={{
                fontSize: "1em",
                marginBottom: "15px",
              }}
            />
            <Typography
              sx={{ padding: "0 90px" }}
              variant="h4"
              className="black"
            >
              {testimonial.feedback}
            </Typography>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

const Home = () => {
  return (
    <Wrapper>
      <Box>
        <Box className="lady-img">
          <img
            src={LadyWithBackground}
            alt="lady"
            style={{ width: "100%", height: "auto" }}
          />
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
        <Box sx={{ paddingX: "100px" }}>
          <Box sx={{ marginBottom: "100px" }}>
            <Box sx={{ marginBottom: "40px" }}>
              <GreenTitle title="Pourquoi nous choisir ?" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                textAlign: "center",
                paddingX: "100px",
                marginBottom: "120px",
                alignItems: "center",
              }}
            >
              {reasonsToChoose.map((reason, index) => (
                <Box key={index}>
                  <Box sx={{ marginBottom: "30px" }}>{reason.icon}</Box>
                  <Typography
                    sx={{ marginBottom: "7px" }}
                    variant="h3"
                    className="secondary bold"
                  >
                    {reason.title}
                  </Typography>
                  {reason.description.map((desc, i) => (
                    <Typography
                      sx={{ marginBottom: "3px" }}
                      key={i}
                      variant="h4"
                      className="bold"
                    >
                      {desc}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                background: colors.background,
                borderRadius: "50px",
                padding: " 40px 80px",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Box sx={{ marginBottom: "30px" }}>
                  <Typography variant="h3" className="medium">
                    Téléchargez l'application Diapazone Assurances
                  </Typography>
                  <Typography variant="h3" className="medium">
                    et suivie la vie de votre contrat santé directement depuis
                    votre smartphone
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "30px" }}
                >
                  <GooglePlayBadge />
                  <AppStoreBadge />
                </Box>
                <Box sx={{ position: "absolute", right: "3%", bottom: -40 }}>
                  <img
                    src={MockupIphone}
                    alt="mockup-iphone"
                    style={{ width: "220px", height: "auto" }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>

          <Box sx={{ marginBottom: "120px" }}>
            <Box sx={{ marginBottom: "40px" }}>
              <GreenTitle title="Ce que nos clients pensent" />
            </Box>
            <TestimonialsCarousel />
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Home;
