import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useCallback, useContext, useState } from "react";
import { ModalContext } from "../contextApi/FormModalApi";
import employeeFormFields from "../Objects/FormFields";
import InputsField from "./InputsField";
import { enqueueSnackbar } from "notistack";

const FormModal = () => {
  const { openModal, handleClose } = useContext(ModalContext);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });
  //* Handle  Change logic
  const handleChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  //* Handle  Validation logic
  const handleValidate = useCallback(() => {
    if (!formData.fullname.trim()) {
      enqueueSnackbar("Full name is required.", { variant: "error" });
      return false;
    }
    if (formData.fullname.length < 3) {
      enqueueSnackbar("Full name must be at least 3 characters long.", {
        variant: "error",
      });
      return false;
    }

    if (!formData.email.trim()) {
      enqueueSnackbar("Email is required.", { variant: "error" });
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      enqueueSnackbar("Please enter a valid email address.", {
        variant: "error",
      });
      return false;
    }

    if (!formData.phone.trim()) {
      enqueueSnackbar("Phone number is required.", { variant: "error" });
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      enqueueSnackbar("Phone number must be 10 digits.", { variant: "error" });
      return false;
    }

    if (!formData.address.trim()) {
      enqueueSnackbar("Address is required.", { variant: "error" });
      return false;
    }
    if (formData.address.length < 5) {
      enqueueSnackbar("Address must be at least 5 characters long.", {
        variant: "error",
      });
      return false;
    }

    return true;
  }, [formData]);

   //* Handle  Submit form data logic

   const handleSubmit = useCallback((e)=>{
    e.preventDefault();
    if(!handleValidate())return;
     enqueueSnackbar("Employee profile added successfully!", {
        variant: "success",
      });
       //* Reset form
      setFormData({
        fullname: "",
        email: "",
        phone: "",
        address: "",
      });
      handleClose();
   },[formData,handleClose,handleValidate])

  console.log("Formdata", formData);
  return (
    <Dialog component='form' onSubmit={handleSubmit} open={openModal} onClose={handleClose} maxWidth="md" fullWidth>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <DialogTitle>Create Employee Profile</DialogTitle>
        <IconButton sx={{ mr: 2 }} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      {/* Input Fields .......... */}
      <DialogContent dividers>
        <Grid container rowSpacing={2} columnSpacing={2} sx={{ py: 3 }}>
          {employeeFormFields?.map((item) => (
            <Grid size={{ xs: 12, sm: 12, md: 6 }} key={item.id}>
              <InputsField
                data={item}
                handleChange={handleChange}
                formData={formData}
              />
            </Grid>
          ))}
        </Grid>
      </DialogContent>

      <DialogActions sx={{ py: 2 }}>
        <Button
          size="large"
          onClick={handleClose}
          sx={{ color: "#cc0000", mr: 3 }}
        >
          Cancel
        </Button>
        <Button
        type="submit"
          variant="contained"
          size="large"
          sx={{ bgcolor: "#00b300", fontWeight: 600, letterSpacing: 1 }}
        >
          Add New Employees
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormModal;
