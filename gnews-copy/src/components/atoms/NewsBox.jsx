import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export const NewsBox = (props) => {
  const { title } = props;
  return (
    <Box
      sx={{
        width: "80%",
        height: 200,
        border: "solid",
        borderColor: "#EEEEEE",
        p: "10px",
        mb: "20px",
      }}
    >
      {title}
      <Divider />
    </Box>
  );
};
