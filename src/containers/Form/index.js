import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepConnector from "@mui/material/StepConnector";
import CheckIcon from "@mui/icons-material/Check";

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

const steps = ["Votre profile", "Vos besoins", "Vos coordonnées"];

const StyledStepConnector = (props) => (
  <StepConnector {...props} style={{ display: "none" }} />
);

const Circle = ({ selected }) => (
  <Box
    sx={{
      width: "35px",
      height: "35px",
      borderRadius: "50%",
      border: "1px solid",
      borderColor: selected ? colors.secondary : colors.black,
      backgroundColor: selected ? colors.secondary : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {selected && <CheckIcon sx={{ color: colors.white, fontSize: "25px" }} />}
  </Box>
);

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [selectedConditions, setSelectedCondition] = useState(false);
  const completed = {};

  const totalSteps = () => steps.length;

  const completedSteps = () => Object.keys(completed).length;

  const isLastStep = () => activeStep === totalSteps() - 1;

  const allStepsCompleted = () => completedSteps() === totalSteps();

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((_, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
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

  return (
    <Box sx={{ padding: "100px 140px", position: "relative" }}>
      <img
        src={BackgroundMotif}
        alt="contract-one"
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-150px",
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
          padding: "20px 40px",
          mb: 4,
          marginBottom: "80px",
        }}
      >
        <Stepper
          nonLinear
          activeStep={activeStep}
          connector={<StyledStepConnector />}
          sx={{ gap: "50px" }}
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
                  sx={{ fontSize: "20px" }}
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
              label="Civlité"
              name="gender"
              control={control}
              value={watch("gender")}
              options={genders}
            />
          </Box>
          <Box sx={{ marginBottom: "40px" }}>
            <InputDate
              label="Quelle est votre date de naissance ?"
              name="date"
              control={control}
              value={watch("date")}
            />
          </Box>
          <Box sx={{ marginBottom: "40px" }}>
            <SelectInput
              label="Quel est votre régime social ?"
              name="socialRegime"
              control={control}
              value={watch("socialRegime")}
            />
          </Box>
          <Box sx={{ marginBottom: "80px" }}>
            <SelectInput
              label="Qui souhaitez-vous assurer ?"
              name="insuredPerson"
              control={control}
              value={watch("insuredPerson")}
            />
          </Box>
        </Box>
      )}
      {activeStep === 1 && (
        <Box sx={{ marginBottom: "80px" }}>
          <Typography
            sx={{ marginBottom: "25px" }}
            variant="h3"
            className="bold primary"
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
          <Box sx={{ marginBottom: "40px" }}>
            <IntensitySelector
              label="Hospitalisation"
              subLabel="(frais de séjour, frais de transport, chirurgie, etc.)"
            />
          </Box>
          <Box sx={{ marginBottom: "40px" }}>
            <IntensitySelector
              label="Dentaire"
              subLabel="(dentiste, prothèses, soins, etc.)"
            />
          </Box>
          <Box sx={{ marginBottom: "40px" }}>
            <IntensitySelector
              label="Optique"
              subLabel="(lentilles, lunettes, chirurgie réfractive, etc.)"
            />
          </Box>
        </Box>
      )}
      {activeStep === 2 && (
        <Box sx={{ marginBottom: "60px" }}>
          <Box sx={{ marginBottom: "60px" }}>
            <InputText
              label="Quel est votre prénom ?"
              placeholder="Prénom"
              value={watch("firstName")}
              name="firstName"
              control={control}
            />
          </Box>
          <Box sx={{ marginBottom: "60px" }}>
            <InputText
              label="Quel est votre nom ?"
              placeholder="Nom"
              value={watch("lastName")}
              name="lastName"
              control={control}
            />
          </Box>
          <Box sx={{ marginBottom: "60px" }}>
            <InputText
              label="Dans quelle ville résidez-vous ?"
              placeholder="Ville"
              value={watch("city")}
              name="city"
              control={control}
            />
          </Box>
          <Box sx={{ marginBottom: "60px" }}>
            <InputText
              label="Quelle est votre adresse email ?"
              placeholder="Email"
              subLabel="Vous allez recevoir un email qui récapitule votre comparaison."
              value={watch("mail")}
              name="mail"
              control={control}
            />
          </Box>
          <Box sx={{ marginBottom: "60px" }}>
            <InputText
              label="Quelle est votre numéro de téléphone ?"
              placeholder="Téléphone"
              subLabel="Promis, votre numéro de téléphone sera transmis uniquement aux assureurs avec lesquels vous souhaitez être mis en relation."
              value={watch("phone")}
              name="phone"
              control={control}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setAccepted(!accepted);
              }}
            >
              <Circle selected={accepted} />
            </Box>
            <Typography
              sx={{ marginBottom: "35px" }}
              variant="h3"
              className="bold color"
            >
              J'accepte de recevoir les offres de Diapazone et de{" "}
              <span style={{ color: colors.secondary }}>
                leurs partenaires.
              </span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Box
              sx={{ cursor: "pointer" }}
              onClick={() => {
                setSelectedCondition(!selectedConditions);
              }}
            >
              <Circle selected={selectedConditions} />
            </Box>
            <Typography
              sx={{ marginBottom: "20px", width: "55%" }}
              variant="h3"
              className="bold color"
            >
              J'accepte les{" "}
              <span style={{ color: colors.secondary }}>
                Conditions Générales d'Utilisation
              </span>{" "}
              et d'être contacté par nos partenaires Assurance Santé si je
              demande à être mis en relation pour faire des économies.
            </Typography>
          </Box>
        </Box>
      )}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button onClick={handleNext} sx={{ mr: 1 }}>
          {isLastStep() ? "Découvrir mes offres" : "Continuer"}
        </Button>
      </Box>
      {activeStep === 2 && (
        <Typography
          sx={{ marginTop: "50px", width: "45%" }}
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
    </Box>
  );
};

export default Form;
