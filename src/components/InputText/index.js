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
          sx={{ marginBottom: "25px", width: "55%" }}
          variant="h3"
          className="semi-bold color"
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
            type="text"
            variant="standard"
            disabled={disabled}
            value={value}
            placeholder={placeholder}
          />
        )}
      />
    </Box>
  );
};

export default InputText;
