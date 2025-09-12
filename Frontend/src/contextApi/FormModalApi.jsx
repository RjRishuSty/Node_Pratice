import React, { createContext, useCallback, useMemo, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ModalContext = createContext();

const FormModalApi = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = useCallback(() => {
    setOpenModal(true);
  }, []);
  const handleClose = useCallback(() => {
    setOpenModal(false);
  }, []);
  const value = useMemo(
    () => ({ openModal, handleOpen, handleClose }),
    [openModal, handleOpen, handleClose]
  );
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default FormModalApi;
