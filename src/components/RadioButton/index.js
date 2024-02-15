import { Controller } from "react-hook-form";

import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import colors from "../../index.scss";

const RadioButton = ({ label, name, disabled, options, control, value }) => {
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

  return (
    <FormControl>
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
        render={({ field }) => (
          <RadioGroup
            {...field}
            aria-labelledby={name}
            name={name}
            value={value}
            sx={{ flexDirection: "row", gap: "40px" }}
          >
            {options?.map((item, index) => (
              <FormControlLabel
                key={index}
                value={item?.value}
                control={<Radio sx={{ display: "none" }} />}
                label={
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Box
                      sx={{
                        height: "320px",
                        width: "280px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        borderRadius: "20px",
                        border:
                          value === item.value
                            ? `2px solid ${colors.secondary}`
                            : "none",
                        backgroundColor: colors.background,
                      }}
                    >
                      {item.img && (
                        <img src={item.img} alt={item.label} width="100px" />
                      )}
                      <Typography
                        variant="h2"
                        sx={{ margin: "15px 0 0", fontWeight: "bold" }}
                        className={value === item.value ? "secondary" : "black"}
                      >
                        {item.label}
                      </Typography>
                      <Circle selected={value === item.value} />
                    </Box>
                  </Box>
                }
                sx={{ zIndex: 0 }}
                disabled={disabled}
                className={item?.className}
              />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default RadioButton;
