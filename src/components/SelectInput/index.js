import { Controller } from "react-hook-form";
import Select from "react-select";

import { Box, Typography } from "@mui/material";
import colors from "index.scss";
import { useState } from "react";

const customStyles = {
  control: (provided) => ({
    ...provided,
    borderColor: colors.secondary,
    borderWidth: "2px",
    borderRadius: "20px",
    backgroundColor: colors.background,
    height: "70px",
    fontFamily: "Nunito",
    width: "450px",
    fontSize: "25px",
    fontWeight: "bold",
    color: colors.black,
    padding: "10px !important",
    boxShadow: "0",
    "&:hover": {
      borderColor: colors.secondary,
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: colors.black,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: colors.black,
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
    width: "450px",
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
    color: colors.black,
    padding: "5px !important",
    boxShadow: "0",
    "&:hover": {
      borderColor: colors.secondary,
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: colors.black,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: colors.black,
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

const SelectInput = ({ error, label, name, control, value, options }) => {
  const [loadedOptions, setLoadedOptions] = useState(options.slice(0, 20));
  const [searchValue, setSearchValue] = useState("");

  const loadOptions = (inputValue) => {
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
    return filteredOptions.slice(0, 20);
  };

  const handleInputChange = (newValue) => {
    setSearchValue(newValue);
    const newOptions = loadOptions(newValue);
    setLoadedOptions(newOptions);
  };

  const handleMenuScrollToBottom = () => {
    const nextIndex = loadedOptions.length;
    const nextPageOptions = options
      .filter((option) =>
        option.label.toLowerCase().includes(searchValue.toLowerCase())
      )
      .slice(nextIndex, nextIndex + 20);
    setLoadedOptions([...loadedOptions, ...nextPageOptions]);
  };

  return (
    <Box>
      <Typography
        sx={{ marginBottom: "20px" }}
        variant="h3"
        className="bold primary"
      >
        {label}
      </Typography>
      <Box sx={{ display: { phone: "none", xxxs: "block" } }}>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange } }) => (
            <Select
              options={loadedOptions}
              onChange={(selectedOption) => {
                onChange(selectedOption);
                setSearchValue("");
              }}
              value={loadedOptions.find((option) => option.value === value)}
              styles={customStyles}
              onInputChange={handleInputChange}
              onMenuScrollToBottom={handleMenuScrollToBottom}
              isLoading={loadedOptions.length === 0 && searchValue !== ""}
              loadingMessage={() => "Pas de résultat..."}
              noOptionsMessage={() => "Pas de résultat"}
              inputValue={searchValue}
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
      {error && (
        <Typography variant="h4" className="bold red" sx={{ mt: 2 }}>
          {error.message}
        </Typography>
      )}
    </Box>
  );
};

export default SelectInput;
