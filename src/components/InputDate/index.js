import { Controller } from "react-hook-form";
import { fr } from "date-fns/locale";

import { Box, Typography } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const InputDate = ({ label, name, control, value, disabled }) => {
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
          <LocalizationProvider adapterLocale={fr} dateAdapter={AdapterDayjs}>
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
    </Box>
  );
};

export default InputDate;
