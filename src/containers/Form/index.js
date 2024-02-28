import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepConnector from "@mui/material/StepConnector";
import CheckIcon from "@mui/icons-material/Check";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

import GreenTitle from "components/GreenTitle";
import RadioButton from "components/RadioButton";
import InputDate from "components/InputDate";
import SelectInput from "components/SelectInput";
import IntensitySelector from "components/IntensitySelector";
import InputText from "components/InputText";
import RadioBtnMan from "assets/images/radio-btn-man.svg";
import RadioBtnWoman from "assets/images/radio-btn-woman.svg";
import BackgroundMotif from "assets/images/background-motif.png";
import colors from "../../index.scss";
import { Link } from "react-router-dom";

const steps = ["Profile", "Besoins", "Coordonnées"];

const StyledStepConnector = (props) => (
  <StepConnector {...props} style={{ display: "none" }} />
);

const Circle = ({ selected }) => (
  <Box
    sx={{
      width: { phone: "25px", xxxs: "25px" },
      height: { phone: "25px", xxxs: "25px" },
      borderRadius: "50%",
      border: "1px solid",
      borderColor: selected ? colors.secondary : colors.black,
      backgroundColor: selected ? colors.secondary : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {selected && (
      <CheckIcon
        sx={{ color: colors.white, fontSize: { phone: "15px", xxxs: "15px" } }}
      />
    )}
  </Box>
);

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showNext, setShowNext] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [selectedConditions, setSelectedCondition] = useState(false);
  const completed = {};

  const handleNext = () => {
    if (showNext === 5) {
      setActiveStep(activeStep + 1);
    }
    if (activeStep === 2) {
      setShowNext(showNext + 1);
    } else {
      if (showNext === 3) {
        setActiveStep(activeStep + 1);
        setShowNext(0);
      } else {
        setShowNext(showNext + 1);
      }
    }
  };

  const handleStep = (step) => () => setActiveStep(step);

  const { control, watch } = useForm({
    mode: "all",
    defaultValues: {
      gender: "man",
      date: null,
      socialRegime: null,
      insuredPerson: null,
    },
  });

  const genders = [
    {
      label: "Un homme",
      value: "man",
      img: RadioBtnMan,
    },
    {
      label: "Une femme",
      value: "woman",
      img: RadioBtnWoman,
    },
  ];

  const regims = [
    { value: "1", label: "Régime général" },
    { value: "2", label: "Régime local Alsace Moselle" },
    { value: "3", label: "Régime agricole" },
    { value: "4", label: "Régime TNS" },
  ];

  const insured = [
    { value: "1", label: "Moi même" },
    { value: "2", label: "Conjoint" },
    { value: "2", label: "Enfant" },
  ];

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const { top } = inputRef.current.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      const scrollDistance = top - 0.1 * viewportHeight;

      window.scrollTo({
        top: window.pageYOffset + scrollDistance,
        behavior: "smooth",
      });
    }
  }, [showNext]);

  return (
    <Box
      sx={{
        padding: { phone: "25px 30px", xxxs: "30px 40px", xxs: "100px 140px" },
        position: "relative",
      }}
    >
      <img
        src={BackgroundMotif}
        alt="contract-one"
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "0",
          zIndex: -1,
        }}
      />
      <Box sx={{ marginBottom: "40px" }}>
        <GreenTitle title="Formulaire" />
      </Box>
      <Box
        sx={{
          bgcolor: colors.background,
          borderRadius: 5,
          padding: { phone: "10px 20px", xxxs: "20px 40px" },
          mb: 4,
          marginBottom: "80px",
        }}
      >
        <Stepper
          nonLinear
          activeStep={activeStep}
          connector={<StyledStepConnector />}
          sx={{ gap: { phone: "20px", xxxs: "50px" } }}
        >
          {steps.map((label, index) => (
            <Step key={index} completed={completed[index]}>
              <StepButton
                onClick={handleStep(index)}
                completed={completed[index]}
                disabled={!completed[index] && index !== activeStep}
              >
                <Typography
                  className={`bold ${
                    activeStep === index ? "secondary" : "disabled"
                  }`}
                  sx={{ fontSize: { phone: "15px", xxxs: "20px" } }}
                >
                  {label}
                </Typography>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
      {activeStep === 0 && (
        <Box>
          <Box sx={{ marginBottom: "40px" }}>
            <RadioButton
              label="Civilité"
              name="gender"
              control={control}
              value={watch("gender")}
              options={genders}
            />
          </Box>
          {showNext >= 1 && (
            <Box
              ref={activeStep === 0 && showNext === 1 ? inputRef : null}
              sx={{ marginBottom: "40px" }}
            >
              <InputDate
                label="Quelle est votre date de naissance ?"
                name="date"
                control={control}
                value={watch("date")}
              />
            </Box>
          )}
          {showNext >= 2 && (
            <Box
              ref={activeStep === 0 && showNext === 2 ? inputRef : null}
              sx={{ marginBottom: "40px" }}
            >
              <SelectInput
                label="Quel est votre régime social ?"
                name="socialRegime"
                control={control}
                value={watch("socialRegime")}
                options={regims}
              />
            </Box>
          )}
          {showNext === 3 && (
            <Box
              ref={activeStep === 0 && showNext === 3 ? inputRef : null}
              sx={{ marginBottom: "80px" }}
            >
              <SelectInput
                label="Qui souhaitez-vous assurer ?"
                name="insuredPerson"
                control={control}
                value={watch("insuredPerson")}
                options={insured}
              />
            </Box>
          )}
        </Box>
      )}
      {activeStep === 1 && (
        <Box
          ref={activeStep === 1 && showNext === 0 ? inputRef : null}
          sx={{ marginBottom: "80px" }}
        >
          <Typography
            sx={{ marginBottom: "25px" }}
            variant="h3"
            className="bold secondary"
          >
            Quel niveau de remboursement souhaitez-vous ?
          </Typography>
          <Typography
            sx={{ marginBottom: "5px" }}
            variant="h3"
            className="semi-bold black"
          >
            Pas d'inquiétude, vous pourrez modifier votre couverture sur la page
            de résultats.
          </Typography>
          <Typography
            sx={{ marginBottom: "80px" }}
            variant="h3"
            className="semi-bold black"
          >
            Attention, sélectionner le niveau maximum réduira le nombre de
            résultats proposés.
          </Typography>
          <Box sx={{ marginBottom: "40px" }}>
            <IntensitySelector
              label="Soins courants"
              subLabel="(médecine générale, pharmacie, radios, etc.)"
            />
          </Box>
          {showNext >= 1 && (
            <Box
              ref={activeStep === 1 && showNext === 1 ? inputRef : null}
              sx={{ marginBottom: "40px" }}
            >
              <IntensitySelector
                label="Hospitalisation"
                subLabel="(frais de séjour, frais de transport, chirurgie, etc.)"
              />
            </Box>
          )}
          {showNext >= 2 && (
            <Box
              ref={activeStep === 1 && showNext === 2 ? inputRef : null}
              sx={{ marginBottom: "40px" }}
            >
              <IntensitySelector
                label="Dentaire"
                subLabel="(dentiste, prothèses, soins, etc.)"
              />
            </Box>
          )}
          {showNext === 3 && (
            <Box
              ref={activeStep === 1 && showNext === 3 ? inputRef : null}
              sx={{ marginBottom: "40px" }}
            >
              <IntensitySelector
                label="Optique"
                subLabel="(lentilles, lunettes, chirurgie réfractive, etc.)"
              />
            </Box>
          )}
        </Box>
      )}
      {activeStep === 2 && (
        <Box sx={{ marginBottom: "60px" }}>
          <Box
            ref={activeStep === 2 && showNext === 0 ? inputRef : null}
            sx={{ marginBottom: "60px" }}
          >
            <InputText
              label="Quel est votre prénom ?"
              placeholder="Prénom"
              value={watch("firstName")}
              name="firstName"
              control={control}
            />
          </Box>
          {showNext >= 1 && (
            <Box
              ref={activeStep === 2 && showNext === 1 ? inputRef : null}
              sx={{ marginBottom: "60px" }}
            >
              <InputText
                label="Quel est votre nom ?"
                placeholder="Nom"
                value={watch("lastName")}
                name="lastName"
                control={control}
              />
            </Box>
          )}
          {showNext >= 2 && (
            <Box
              ref={activeStep === 2 && showNext === 2 ? inputRef : null}
              sx={{ marginBottom: "60px" }}
            >
              <InputText
                label="Dans quelle ville résidez-vous ?"
                placeholder="Ville"
                value={watch("city")}
                name="city"
                control={control}
              />
            </Box>
          )}
          {showNext >= 3 && (
            <Box
              ref={activeStep === 2 && showNext === 3 ? inputRef : null}
              sx={{ marginBottom: "60px" }}
            >
              <InputText
                label="Quelle est votre adresse email ?"
                placeholder="Email"
                subLabel="Vous allez recevoir un email qui récapitule votre comparaison."
                value={watch("mail")}
                name="mail"
                email={true}
                control={control}
              />
            </Box>
          )}
          {showNext >= 4 && (
            <Box
              ref={activeStep === 2 && showNext === 4 ? inputRef : null}
              sx={{ marginBottom: "60px" }}
            >
              <InputText
                label="Quelle est votre numéro de téléphone ?"
                placeholder="Téléphone"
                subLabel="Promis, votre numéro de téléphone sera transmis uniquement si vous souhaitez être mis en relation."
                value={watch("phone")}
                name="phone"
                control={control}
              />
            </Box>
          )}
          {showNext === 5 && (
            <>
              <Box
                ref={activeStep === 2 && showNext === 5 ? inputRef : null}
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginBottom: "25px",
                }}
              >
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setAccepted(!accepted);
                  }}
                >
                  <Circle selected={accepted} />
                </Box>
                <Typography variant="h4" className="bold color">
                  J'accepte de recevoir les offres de Diapazone.
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    setSelectedCondition(!selectedConditions);
                  }}
                >
                  <Circle selected={selectedConditions} />
                </Box>
                <Typography
                  sx={{
                    width: { phone: "100%", xxxs: "55%" },
                  }}
                  variant="h4"
                  className="bold color"
                >
                  J'accepte les{" "}
                  <Link
                    to="/conditions-utilisation"
                    style={{ color: colors.secondary, textDecoration: "none" }}
                  >
                    Conditions Générales d'Utilisation
                  </Link>{" "}
                  et d'être contacté par nos conseillers.
                </Typography>
              </Box>
            </>
          )}
        </Box>
      )}
      {activeStep !== 3 && (
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button onClick={handleNext} sx={{ mr: 1 }}>
            {activeStep === 2 && showNext === 5
              ? "Découvrir mes offres"
              : "Continuer"}
          </Button>
        </Box>
      )}
      {activeStep === 2 && (
        <Typography
          sx={{ marginTop: "50px", width: { phone: "100%", xxxs: "45%" } }}
          variant="h4"
          className="bold black"
        >
          Diapazone traite les données personnelles recueillies dans ce
          questionnaire pour proposer des offres correspondant au profil du
          navigateur, réaliser des opérations d'analyse et de statistiques, pour
          assurer la relation commerciale avec les clients et réaliser de la
          prospection commerciale par courrier électronique. Vous disposez de
          différents droits (notamment le droit d'opposition, d'accès, de
          rectification, d'effacement). Pour en savoir plus, consultez notre{" "}
          <span style={{ color: colors.secondary }}>
            Charte de protection des données personnelles.
          </span>
        </Typography>
      )}
      {activeStep === 3 && (
        <Box>
          <Box
            ref={activeStep === 3 ? inputRef : null}
            sx={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <Typography variant="h3" className="primary bold">
              Formulaire validé
            </Typography>
            <CheckBoxIcon className="secondary" fontSize="25px" />
          </Box>
          <Typography variant="h3" mt={6} className="black">
            Un devis sur mesure sera expédié dans votre boîte mail d’ici peu.
          </Typography>
          <Typography variant="h3" className="black">
            Restez à l'affût!
          </Typography>
          <Typography
            variant="h3"
            mt={4}
            className="black"
            sx={{ width: { phone: "100%", xxxs: "40%" } }}
          >
            Vous êtes sur le point de réaliser{" "}
            <span className="red">400€*</span> d'économies en moyenne.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Form;
