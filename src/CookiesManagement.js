import { useEffect, useState } from "react";
import CookieConsent from "react-cookie-consent";
import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

import colors from "index.scss";

const CookiesManagement = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(
    localStorage.getItem("cookiesAccepted") === "true"
  );

  const handleAcceptAll = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setCookiesAccepted(true);
  };

  const handleHideBanner = () => {
    setCookiesAccepted(true);
  };

  useEffect(() => {
    if (localStorage.getItem("cookiesAccepted")) {
      localStorage.setItem("cookiesAccepted", "false");
    }
  }, []);

  return (
    !cookiesAccepted && (
      <CookieConsent
        location="bottom"
        debug={true}
        buttonStyle={{ display: "none" }}
        style={{ background: colors.secondary, padding: 30, opacity: 0.95 }}
      >
        <Box sx={{ width: "90%" }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Link component="button" onClick={handleHideBanner}>
              <Typography
                sx={{
                  color: colors.primary,
                  fontWeight: "bold",
                  fontSize: "1em",
                  textDecoration: "underline",
                  marginTop: "10px",
                  display: "block",
                }}
              >
                Continuer sans accepter
              </Typography>
            </Link>
          </Box>
          <Typography variant="h3" sx={{ lineHeight: 1.5, mt: 5 }}>
            Diapazone, comme tous les sites, utilise des cookies. Ils nous
            permettent d'établir des statistiques, d'améliorer nos performances
            et de personnaliser votre expérience utilisateur. Il est recommandé
            "d'accepter" ces cookies pour bénéficier de l'ensemble des
            fonctionnalités de notre site.
          </Typography>
          <Button
            variant="contained"
            onClick={handleAcceptAll}
            style={{
              background: colors.buttonBackground,
              borderRadius: "25px",
              padding: "10px 25px",
              color: colors.black,
              fontWeight: "bold",
              fontSize: "1.2em",
              marginTop: "50px",
            }}
          >
            Tout accepter
          </Button>
        </Box>
      </CookieConsent>
    )
  );
};

export default CookiesManagement;
