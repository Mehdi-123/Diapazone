import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

import colors from "index.scss";

const Circle = ({ selected }) => (
  <Box
    sx={{
      width: { phone: "25px", xxxs: "25px" },
      height: { phone: "25px", xxxs: "25px" },
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
        sx={{ color: colors.white, fontSize: { phone: "15px", xxxs: "15px" } }}
      />
    )}
  </Box>
);

export default Circle;
