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
        width: { phone: "25px", xxxs: "35px" },
        height: { phone: "25px", xxxs: "35px" },
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
          sx={{
            color: colors.white,
            fontSize: { phone: "17px", xxxs: "25px" },
          }}
        />
      )}
    </Box>
  );

  return (
    <FormControl>
      <Typography
        sx={{ marginBottom: "20px" }}
        variant="h3"
        className="bold secondary"
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
                        height: { phone: "210px", xxxs: "320px" },
                        width: { phone: "170px", xxxs: "280px" },
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
                        <>
                          <Box
                            sx={{ display: { phone: "none", xxxs: "block" } }}
                          >
                            <img
                              src={item.img}
                              alt={item.label}
                              width="100px"
                            />
                          </Box>
                          <Box
                            sx={{ display: { phone: "block", xxxs: "none" } }}
                          >
                            <img src={item.img} alt={item.label} width="70px" />
                          </Box>
                        </>
                      )}
                      <Typography
                        variant="h2"
                        sx={{
                          margin: "15px 0 0",
                          fontWeight: "bold",
                          display: { phone: "none", xxxs: "block" },
                        }}
                        className={value === item.value ? "secondary" : "black"}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        variant="h3"
                        sx={{
                          margin: "5px 0 0",
                          fontWeight: "bold",
                          display: { phone: "block", xxxs: "none" },
                        }}
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
