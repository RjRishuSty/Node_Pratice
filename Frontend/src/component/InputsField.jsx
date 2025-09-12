import { TextField } from "@mui/material";
import React from "react";

const InputsField = ({ data, handleChange,formData }) => {
  return (
    <TextField
      fullWidth
      type={data.type}
      id={data.id}
      value={formData.id}
      label={data.label}
      variant="outlined"
      onChange={handleChange}
    />
  );
};

export default React.memo(InputsField);
