import { Controller } from "react-hook-form";
import Select from "react-select";

import { Box, Typography } from "@mui/material";
import colors from "index.scss";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: colors.secondary,
    borderWidth: "2px",
    borderRadius: "20px",
    backgroundColor: colors.background,
    height: "75px",
    fontFamily: "Nunito",
    width: "500px",
    fontSize: "25px",
    fontWeight: "bold",
    color: colors.secondary,
    padding: "10px !important",
    boxShadow: "0",
    "&:hover": {
      borderColor: colors.secondary,
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: colors.secondary,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: colors.secondary,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    color: state.isSelected ? colors.secondary : colors.black,
    cursor: "pointer",
    "&:hover": {
      color: colors.secondary,
    },
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 99,
    backgroundColor: colors.white,
    borderRadius: "20px",
    width: "500px",
    fontFamily: "Nunito",
    fontSize: "25px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: colors.secondary,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};

const responsiveCustomStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: colors.secondary,
    borderWidth: "2px",
    borderRadius: "20px",
    backgroundColor: colors.background,
    height: "70px",
    fontFamily: "Nunito",
    width: "300px",
    fontSize: "20px",
    fontWeight: "bold",
    color: colors.secondary,
    padding: "5px !important",
    boxShadow: "0",
    "&:hover": {
      borderColor: colors.secondary,
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: colors.secondary,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: colors.secondary,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    color: state.isSelected ? colors.secondary : colors.black,
    cursor: "pointer",
    "&:hover": {
      color: colors.secondary,
    },
  }),
  menu: (provided) => ({
    ...provided,
    zIndex: 99,
    backgroundColor: colors.white,
    borderRadius: "20px",
    width: "300px",
    fontFamily: "Nunito",
    fontSize: "25px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: colors.secondary,
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};

const SelectInput = ({ label, name, control, value, options }) => {
  return (
    <Box>
      <Typography
        sx={{ marginBottom: "20px" }}
        variant="h3"
        className="bold secondary"
      >
        {label}
      </Typography>
      <Box sx={{ display: { phone: "none", xxxs: "block" } }}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <Select
              options={options}
              onChange={onChange}
              value={options.find((option) => option.value === value)}
              styles={customStyles}
            />
          )}
        />
      </Box>
      <Box sx={{ display: { phone: "block", xxxs: "none" } }}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <Select
              options={options}
              onChange={onChange}
              value={options.find((option) => option.value === value)}
              styles={responsiveCustomStyles}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default SelectInput;
