import { Controller } from "react-hook-form";

import { Box, TextField, Typography } from "@mui/material";

const InputText = ({
  label,
  subLabel,
  name,
  placeholder,
  control,
  value,
  disabled,
  email,
  error,
}) => {
  return (
    <Box>
      <Typography
        sx={{ marginBottom: "25px" }}
        variant="h3"
        className="bold primary"
      >
        {label}
      </Typography>
      {subLabel && (
        <Typography
          sx={{ marginBottom: "25px", width: { phone: "100%", xxxs: "55%" } }}
          variant="h4"
          className="semi-bold black"
        >
          {subLabel}
        </Typography>
      )}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            type={email ? "email" : "text"}
            variant="standard"
            disabled={disabled}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
      {error && (
        <Typography variant="h4" className="bold red" sx={{ mt: 2 }}>
          {error.message}
        </Typography>
      )}
    </Box>
  );
};

export default InputText;
