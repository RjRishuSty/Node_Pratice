import { Box, Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Box>
      <Typography variant="h4">
        Manage{" "}
        <Typography component="span" variant="h4" sx={{ fontWeight: 600 }}>
          Employees
        </Typography>
      </Typography>
    </Box>
  );
};

export default Logo;
