import { Button } from "@mui/material";
import React, { useContext } from "react";
import { ModalContext } from "../contextApi/FormModalApi";

const ActionBtn = ({ data }) => {
  const { handleOpen } = useContext(ModalContext);
  return (
    <Button
      onClick={data.id === "add" ? handleOpen : undefined}
      size="large"
      variant="contained"
      sx={data.sx}
      startIcon={data.icon}
    >
      {data.label}
    </Button>
  );
};

export default React.memo(ActionBtn);
