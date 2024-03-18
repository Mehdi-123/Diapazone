import { Controller } from "react-hook-form";
import { fr } from "date-fns/locale";

import { Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const InputDate = ({ label, name, control, disabled, error }) => {
  return (
    <Box>
      <Typography
        sx={{ marginBottom: "20px" }}
        variant="h3"
        className="bold primary"
      >
        {label}
      </Typography>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value, ref } }) => (
          <LocalizationProvider adapterLocale={fr} dateAdapter={AdapterDateFns}>
            <DatePicker
              onChange={onChange}
              ref={ref}
              value={value}
              disabled={disabled}
              inputFormat="dd/MM/yyyy"
              className="date"
            />
          </LocalizationProvider>
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

export default InputDate;
