import React, { useContext } from "react";
import DataTable from "../component/DataTable";
import { ModalContext } from "../contextApi/FormModalApi";
import FormModal from "../component/FormModal";

const Home = () => {
  const { openModal } = useContext(ModalContext);
  return (
    <>
      <DataTable />
      {openModal && <FormModal />}
    </>
  );
};

export default Home;
