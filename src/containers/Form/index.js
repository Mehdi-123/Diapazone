import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepConnector from "@mui/material/StepConnector";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { LinearProgress } from "@mui/material";

import GreenTitle from "components/GreenTitle";
import RadioButton from "components/RadioButton";
import InputDate from "components/InputDate";
import SelectInput from "components/SelectInput";
import IntensitySelector from "components/IntensitySelector";
import InputText from "components/InputText";
import BackgroundMotif from "assets/images/background-motif.png";
import Circle from "components/CheckCercle";
import colors from "index.scss";

import { db } from "./firebase";
import { postalCodes } from "./postalCodes";
import {
  childrenNumber,
  genders,
  insuredPersons,
  socialRegims,
  steps,
} from "./staticData";
import Wrapper from "./wrapper";

const StyledStepConnector = (props) => (
  <StepConnector {...props} style={{ display: "none" }} />
);

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showNext, setShowNext] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [selectedConditions, setSelectedCondition] = useState(false);
  const completed = {};

  const [selectedDate, setSelectedDate] = useState("tomorrow");

  const handleBoxClick = (dateType) => {
    setSelectedDate(dateType);
  };

  const handleNext = () => {
    if (showNext === 11) {
      storeData();
      setActiveStep(3);
    } else if (showNext === 5) {
      setActiveStep(2);
      setShowNext(showNext + 1);
    } else if (showNext === 3) {
      setActiveStep(1);
      setShowNext(showNext + 1);
    } else {
      setShowNext(showNext + 1);
    }
  };

  const handleStep = (step) => () => setActiveStep(step);

  const formSchema = yup.object().shape({
    gender: yup.string(),
    insuredPersonBirthDate: yup
      .date()
      .nullable()
      .min(
        new Date(1910, 0, 1),
        "La date de souhaitée doit être égale ou après 1910"
      )
      .typeError("La date de naissance doit être une date valide"),
    insuredPersonSocialRegime: yup.object().nullable(),
    insuredPersons: yup.object().nullable(),
    startDate: yup
      .date()
      .nullable()
      .min(
        new Date(1910, 0, 1),
        "La date de souhaitée doit être égale ou après 1910"
      )
      .typeError("La date de souhaitée doit être une date valide"),
    insuredSpouseBirthDate: yup
      .date()
      .nullable()
      .min(
        new Date(1910, 0, 1),
        "La date de souhaitée doit être égale ou après 1910"
      )
      .typeError("La date de naissance doit être une date valide"),
    insuredSpouseSocialRegime: yup.object().nullable(),
    childrenNumber: yup.object().nullable(),
    insuredFirstChildBirthDate: yup
      .date()
      .nullable()
      .min(
        new Date(1910, 0, 1),
        "La date de souhaitée doit être égale ou après 1910"
      )
      .typeError("La date de naissance doit être une date valide"),
    insuredFirstChildSocialRegime: yup.object().nullable(),
    insuredSecondChildBirthDate: yup
      .date()
      .nullable()
      .min(
        new Date(1910, 0, 1),
        "La date de souhaitée doit être égale ou après 1910"
      )
      .typeError("La date de naissance doit être une date valide"),
    insuredThirdChildBirthDate: yup
      .date()
      .nullable()
      .min(
        new Date(1910, 0, 1),
        "La date de souhaitée doit être égale ou après 1910"
      )
      .typeError("La date de naissance doit être une date valide"),
    insuredFourthChildBirthDate: yup
      .date()
      .nullable()
      .min(
        new Date(1910, 0, 1),
        "La date de souhaitée doit être égale ou après 1910"
      )
      .typeError("La date de naissance doit être une date valide"),
    email: yup
      .string()
      .nullable()
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "L'email doit être valide"
      )
      .typeError("L'email doit être valide"),
    phoneNumber: yup
      .string()
      .nullable()
      .matches(/^\+?[0-9]{10,14}$/, "Le numéro de téléphone est erroné")
      .typeError("Le numéro de téléphone est erroné"),
  });

  const {
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "all",
    resolver: yupResolver(formSchema),
    defaultValues: {
      gender: "man",
      insuredPersonBirthDate: null,
      insuredPersonSocialRegime: null,
      insuredSpouseBirthDate: null,
      insuredSpouseSocialRegime: null,
      insuredFirstChildBirthDate: null,
      insuredFirstChildSocialRegime: null,
      insuredSecondChildBirthDate: null,
      insuredThirdChildBirthDate: null,
      insuredFourthChildBirthDate: null,
      childrenNumber: null,
      insuredPersons: null,
      startDate: null,
      firstName: null,
      lastName: null,
      postalCode: null,
      email: null,
      phoneNumber: null,
    },
  });

  const disableBtnForChildren =
    watch("childrenNumber") &&
    ((watch("childrenNumber").value === "1" &&
      (!watch("insuredFirstChildBirthDate") ||
        !watch("insuredFirstChildSocialRegime"))) ||
      (watch("childrenNumber").value === "2" &&
        (!watch("insuredFirstChildBirthDate") ||
          !watch("insuredFirstChildSocialRegime") ||
          !watch("insuredSecondChildBirthDate"))) ||
      (watch("childrenNumber").value === "3" &&
        (!watch("insuredFirstChildBirthDate") ||
          !watch("insuredFirstChildSocialRegime") ||
          !watch("insuredSecondChildBirthDate") ||
          !watch("insuredThirdChildBirthDate"))) ||
      (watch("childrenNumber").value === "4" &&
        (!watch("insuredFirstChildBirthDate") ||
          !watch("insuredFirstChildSocialRegime") ||
          !watch("insuredSecondChildBirthDate") ||
          !watch("insuredThirdChildBirthDate") ||
          !watch("insuredFourthChildBirthDate"))));

  const disableBtnForInsuredPersons =
    watch("insuredPersons") &&
    ((watch("insuredPersons").value === "2" &&
      (!watch("insuredSpouseBirthDate") ||
        !watch("insuredSpouseSocialRegime"))) ||
      (watch("insuredPersons").value === "3" &&
        (!watch("childrenNumber") || disableBtnForChildren)) ||
      (watch("insuredPersons").value === "4" &&
        (!watch("childrenNumber") ||
          !watch("insuredSpouseBirthDate") ||
          !watch("insuredSpouseSocialRegime") ||
          disableBtnForChildren)));

  const disableBtn =
    (showNext >= 1 && (!isValid || !watch("insuredPersonBirthDate"))) ||
    (showNext >= 2 && (!isValid || !watch("insuredPersonSocialRegime"))) ||
    (showNext >= 3 &&
      (!isValid || !watch("insuredPersons") || disableBtnForInsuredPersons)) ||
    (showNext >= 5 && selectedDate === "other" && !watch("startDate")) ||
    (showNext >= 6 && !watch("firstName")) ||
    (showNext >= 7 && !watch("lastName")) ||
    (showNext >= 8 && !watch("postalCode")) ||
    (showNext >= 9 && !watch("email")) ||
    (showNext >= 10 && !watch("phoneNumber")) ||
    (showNext >= 11 && (!accepted || !selectedConditions));

  const currentDate = new Date();
  const tomorrowDate = new Date(currentDate);
  tomorrowDate.setDate(currentDate.getDate() + 1);

  const nextMonthDate = new Date(currentDate);
  nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

  const formattedTomorrowDate = Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(tomorrowDate);

  const formattedNextMonthDate = Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(nextMonthDate);

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

  const [loading, setLoading] = useState(false);

  const storeData = async () => {
    setLoading(true);
    const formData = watch();

    const formattedData = {
      ...formData,
      insuredPersonBirthDate: formData.insuredPersonBirthDate
        ? new Date(formData.insuredPersonBirthDate).toLocaleDateString()
        : "Vide",
      insuredSpouseBirthDate: formData.insuredSpouseBirthDate
        ? new Date(formData.insuredSpouseBirthDate).toLocaleDateString()
        : "Vide",
      insuredFirstChildBirthDate: formData.insuredFirstChildBirthDate
        ? new Date(formData.insuredFirstChildBirthDate).toLocaleDateString()
        : "Vide",
      insuredSecondChildBirthDate: formData.insuredSecondChildBirthDate
        ? new Date(formData.insuredSecondChildBirthDate).toLocaleDateString()
        : "Vide",
      insuredThirdChildBirthDate: formData.insuredThirdChildBirthDate
        ? new Date(formData.insuredThirdChildBirthDate).toLocaleDateString()
        : "Vide",
      insuredFourthChildBirthDate: formData.insuredFourthChildBirthDate
        ? new Date(formData.insuredFourthChildBirthDate).toLocaleDateString()
        : "Vide",
      startDate:
        selectedDate === "tomorrow"
          ? formattedTomorrowDate
          : selectedDate === "nextMonth"
          ? formattedNextMonthDate
          : formData.insuredFourthChildBirthDate &&
            new Date(formData.insuredFourthChildBirthDate).toLocaleDateString(),
    };

    const attributes = {
      gender: formData.gender === "man" ? "Homme" : "Femme",
      insuredPersonSocialRegime: formData.insuredPersonSocialRegime?.label,
      insuredFirstChildSocialRegime:
        formData.insuredFirstChildSocialRegime?.label ?? "Vide",
      insuredSpouseSocialRegime:
        formData.insuredSpouseSocialRegime?.label ?? "Vide",
      childrenNumber: formData.childrenNumber?.label ?? "Vide",
      insuredPersons: formData.insuredPersons?.label,
      postalCode: formData.postalCode?.label,
    };

    const dataToStore = {
      ...formattedData,
      ...attributes,
      ...{
        soins: selectedOptions["Soins courants"],
        hospitalisation: selectedOptions["Hospitalisation"],
        dentaire: selectedOptions["Dentaire"],
        optique: selectedOptions["Optique"],
      },
      selectedDate:
        selectedDate === "tomorrow"
          ? "Demain"
          : selectedDate === "nextMonth"
          ? "Dans un mois"
          : "Une autre date",
    };

    emailjs.send("service_on6ey4j", "template_nzwp0qs", dataToStore, {
      publicKey: "5Eh86gNmVsz20QOdn",
    });
    let cleanData = Object.fromEntries(
      Object.entries(dataToStore).filter(
        ([_, value]) => value !== null && value !== undefined
      )
    );

    try {
      await db.collection("data").add(cleanData);
      console.log("Data stored successfully");
    } catch (error) {
      console.error("Error storing data:", error);
    } finally {
      setLoading(false);
    }
  };

  const [selectedOptions, setSelectedOptions] = useState({
    "Soins courants": "Minimum",
    Hospitalisation: "Minimum",
    Dentaire: "Minimum",
    Optique: "Minimum",
  });

  const handleOptionChange = (label, value) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [label]: value,
    }));
  };

  return (
    <Wrapper
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
      {activeStep !== 3 && (
        <>
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
        </>
      )}

      {activeStep === 0 && (
        <Box>
          <RadioButton
            label="Civilité"
            name="gender"
            control={control}
            value={watch("gender")}
            options={genders}
          />
          {showNext >= 1 && (
            <Box ref={null} sx={{ mt: 5 }}>
              <InputDate
                label="Quelle est votre date de naissance ?"
                name="insuredPersonBirthDate"
                control={control}
                value={watch("insuredPersonBirthDate")}
                error={errors.insuredPersonBirthDate}
              />
            </Box>
          )}
          {showNext >= 2 && (
            <Box ref={null} sx={{ mt: 5 }}>
              <SelectInput
                label="Quel est votre régime social ?"
                name="insuredPersonSocialRegime"
                control={control}
                value={watch("insuredPersonSocialRegime")}
                options={socialRegims}
              />
            </Box>
          )}
          {showNext >= 3 && (
            <Box ref={null} sx={{ mt: 5 }}>
              <SelectInput
                label="Qui souhaitez-vous assurer ?"
                name="insuredPersons"
                control={control}
                value={watch("insuredPersons")}
                options={insuredPersons}
              />
            </Box>
          )}

          {watch("insuredPersons") &&
            (watch("insuredPersons").value === "2" ||
              watch("insuredPersons").value === "4") && (
              <>
                <Box ref={null} sx={{ mt: 5 }}>
                  <InputDate
                    label="Quelle est la date de naissance de votre conjoint ?"
                    name="insuredSpouseBirthDate"
                    control={control}
                    value={watch("insuredSpouseBirthDate")}
                    error={errors.insuredSpouseBirthDate}
                  />
                </Box>
                <Box ref={null} sx={{ mt: 5 }}>
                  <SelectInput
                    label="Quelle est le régime social de votre conjoint ?"
                    name="insuredSpouseSocialRegime"
                    control={control}
                    value={watch("insuredSpouseSocialRegime")}
                    options={socialRegims}
                  />
                </Box>
              </>
            )}

          {watch("insuredPersons") &&
            (watch("insuredPersons").value === "3" ||
              watch("insuredPersons").value === "4") && (
              <>
                <Box ref={null} sx={{ mt: 5 }}>
                  <SelectInput
                    label="Combien d'enfant souhaitez-vous assurer ?"
                    name="childrenNumber"
                    control={control}
                    value={watch("childrenNumber")}
                    options={childrenNumber}
                  />
                </Box>
                {watch("childrenNumber") &&
                  watch("childrenNumber").value >= "1" && (
                    <>
                      <Box ref={null} sx={{ mt: 5 }}>
                        <InputDate
                          label="Quelle est la date de naissance de votre 1er enfant ?"
                          name="insuredFirstChildBirthDate"
                          control={control}
                          value={watch("insuredFirstChildBirthDate")}
                          error={errors.insuredFirstChildBirthDate}
                        />
                      </Box>
                      <Box ref={null} sx={{ mt: 5 }}>
                        <SelectInput
                          label="Quelle est le régime social de votre 1er enfant ?"
                          name="insuredFirstChildSocialRegime"
                          control={control}
                          value={watch("insuredFirstChildSocialRegime")}
                          options={socialRegims}
                        />
                      </Box>
                    </>
                  )}
                {watch("childrenNumber") &&
                  watch("childrenNumber").value >= "2" && (
                    <Box ref={null} sx={{ mt: 5 }}>
                      <InputDate
                        label="Quelle est la date de naissance de votre 2ème enfant ?"
                        name="insuredSecondChildBirthDate"
                        control={control}
                        value={watch("insuredSecondChildBirthDate")}
                        error={errors.insuredSecondChildBirthDate}
                      />
                    </Box>
                  )}
                {watch("childrenNumber") &&
                  watch("childrenNumber").value >= "3" && (
                    <Box ref={null} sx={{ mt: 5 }}>
                      <InputDate
                        label="Quelle est la date de naissance de votre 3ème enfant ?"
                        name="insuredThirdChildBirthDate"
                        control={control}
                        value={watch("insuredThirdChildBirthDate")}
                        error={errors.insuredThirdChildBirthDate}
                      />
                    </Box>
                  )}
                {watch("childrenNumber") &&
                  watch("childrenNumber").value === "4" && (
                    <Box ref={null} sx={{ mt: 5 }}>
                      <InputDate
                        label="Quelle est la date de naissance de votre 4ème enfant ?"
                        name="insuredFourthChildBirthDate"
                        control={control}
                        value={watch("insuredFourthChildBirthDate")}
                        error={errors.insuredFourthChildBirthDate}
                      />
                    </Box>
                  )}
              </>
            )}
        </Box>
      )}
      {activeStep === 1 && (
        <>
          <Box ref={null}>
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
              Pas d'inquiétude, vous pourrez modifier votre couverture sur la
              page de résultats.
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
                selectedOption={selectedOptions["Soins courants"]}
                onOptionChange={(value) =>
                  handleOptionChange("Soins courants", value)
                }
              />
            </Box>
            <Box ref={null} sx={{ marginBottom: "40px" }}>
              <IntensitySelector
                label="Hospitalisation"
                subLabel="(frais de séjour, frais de transport, chirurgie, etc.)"
                selectedOption={selectedOptions["Hospitalisation"]}
                onOptionChange={(value) =>
                  handleOptionChange("Hospitalisation", value)
                }
              />
            </Box>
            <Box ref={null} sx={{ marginBottom: "40px" }}>
              <IntensitySelector
                label="Dentaire"
                subLabel="(dentiste, prothèses, soins, etc.)"
                selectedOption={selectedOptions["Dentaire"]}
                onOptionChange={(value) =>
                  handleOptionChange("Dentaire", value)
                }
              />
            </Box>
            <Box ref={null} sx={{ marginBottom: "40px" }}>
              <IntensitySelector
                label="Optique"
                subLabel="(lentilles, lunettes, chirurgie réfractive, etc.)"
                selectedOption={selectedOptions["Optique"]}
                onOptionChange={(value) => handleOptionChange("Optique", value)}
              />
            </Box>
          </Box>
          {showNext === 5 && (
            <Box>
              <Typography sx={{ mt: 10 }} variant="h3" className="bold black">
                À quelle date souhaitez-vous être assuré(e) ?
              </Typography>
              <Box
                sx={{
                  width: {
                    phone: "300px",
                    xxxs: "500px",
                    xxs: "600px",
                    xs: "700px",
                  },
                }}
              >
                <Box
                  className={`box-date ${
                    selectedDate === "tomorrow" ? "selected" : ""
                  }`}
                  onClick={() => handleBoxClick("tomorrow")}
                  sx={{
                    mt: "20px",
                    borderRadius: "20px",
                    p: "20px 30px",
                    backgroundColor: colors.background,
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography className="bold secondary" variant="h3">
                    Demain
                  </Typography>
                  <Typography className="disabled" variant="h3">
                    - {formattedTomorrowDate}
                  </Typography>
                </Box>

                <Box
                  className={`box-date ${
                    selectedDate === "nextMonth" ? "selected" : ""
                  }`}
                  onClick={() => handleBoxClick("nextMonth")}
                  sx={{
                    mt: "20px",
                    borderRadius: "20px",
                    p: "20px 30px",
                    backgroundColor: colors.background,
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography className="bold secondary" variant="h3">
                    Dans un mois
                  </Typography>
                  <Typography className="disabled" variant="h3">
                    - {formattedNextMonthDate}
                  </Typography>
                </Box>

                <Box
                  className={`box-date ${
                    selectedDate === "other" ? "selected" : ""
                  }`}
                  onClick={() => handleBoxClick("other")}
                  sx={{
                    mt: "20px",
                    borderRadius: "20px",
                    p: "20px 30px",
                    backgroundColor: colors.background,
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography className="bold secondary" variant="h3">
                    Une autre date
                  </Typography>
                </Box>
              </Box>
              {selectedDate === "other" && (
                <Box ref={null} sx={{ mt: 5 }}>
                  <InputDate
                    label="Indiquez la date souhaitée"
                    name="startDate"
                    control={control}
                    value={watch("startDate")}
                    error={errors.startDate}
                  />
                </Box>
              )}
            </Box>
          )}
        </>
      )}
      {activeStep === 2 && (
        <Box sx={{ marginBottom: "60px" }}>
          <Box ref={null}>
            <InputText
              label="Quel est votre prénom ?"
              placeholder="Prénom"
              value={watch("firstName")}
              name="firstName"
              control={control}
            />
          </Box>
          {showNext >= 7 && (
            <Box ref={null} sx={{ mt: 5 }}>
              <InputText
                label="Quel est votre nom ?"
                placeholder="Nom"
                value={watch("lastName")}
                name="lastName"
                control={control}
              />
            </Box>
          )}
          {showNext >= 8 && (
            <Box ref={null} sx={{ mt: 5 }}>
              <SelectInput
                label="Quelle est votre code postal ?"
                control={control}
                value={watch("postalCode")}
                name="postalCode"
                options={postalCodes}
                error={errors.postalCode}
              />
            </Box>
          )}
          {showNext >= 9 && (
            <Box ref={null} sx={{ mt: 5 }}>
              <InputText
                label="Quelle est votre adresse email ?"
                placeholder="Email"
                subLabel="Vous allez recevoir un email qui récapitule votre comparaison."
                value={watch("email")}
                name="email"
                error={errors.email}
                control={control}
              />
            </Box>
          )}
          {showNext >= 10 && (
            <Box ref={null} sx={{ mt: 5 }}>
              <InputText
                label="Quelle est votre numéro de téléphone ?"
                placeholder="Téléphone"
                subLabel="Promis, votre numéro de téléphone sera transmis uniquement si vous souhaitez être mis en relation."
                value={watch("phoneNumber")}
                name="phoneNumber"
                error={errors.phoneNumber}
                control={control}
              />
            </Box>
          )}
          {showNext === 11 && (
            <Box mt={5}>
              <Box
                ref={null}
                sx={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  mb: "25px",
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
            </Box>
          )}
        </Box>
      )}
      {activeStep !== 3 && (
        <Box sx={{ mt: 10 }}>
          <Button onClick={handleNext} disabled={disableBtn}>
            {activeStep === 2 && showNext === 11
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
          {loading ? (
            <LinearProgress
              sx={{
                height: 5,
                backgroundColor: "#e0e0e0",
                borderRadius: 5,
                "& .MuiLinearProgress-bar": {
                  borderRadius: 5,
                  backgroundColor: colors.secondary,
                },
              }}
              variant="indeterminate"
            />
          ) : (
            <Box>
              <Box
                ref={null}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <Typography variant="h2" className="primary bold">
                  Formulaire validé
                </Typography>
                <CheckBoxIcon
                  className="secondary"
                  sx={{ width: 40, height: 40 }}
                />
              </Box>
              <Typography variant="h3" mt={6} className="black bold">
                Un devis sur mesure sera expédié dans votre boîte mail d’ici
                peu.
              </Typography>
              <Typography variant="h3" className="black bold">
                Restez à l'affût!
              </Typography>
              <Typography
                variant="h3"
                mt={4}
                className="black bold"
                sx={{ width: { phone: "100%", xxxs: "40%" } }}
              >
                Vous êtes sur le point de réaliser{" "}
                <span className="red">400€*</span> d'économies en moyenne.
              </Typography>
            </Box>
          )}
        </Box>
      )}
    </Wrapper>
  );
};

export default Form;
