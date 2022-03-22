import * as React from "react";
import Box from "@mui/material/Box";

export const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <Box
      sx={{
        width: "60%",
        mx: "50px",
        p: "20px",
      }}
    >
      {children}
    </Box>
  );
};
