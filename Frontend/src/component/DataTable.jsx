import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@mui/material";
import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSquareIcon from "@mui/icons-material/EditSquare";
import { tableHeaders } from "../Objects/tableHeader";
import CheckBox from "./CheckBox";
import { ModalContext } from "../contextApi/FormModalApi";

const DataTable = () => {
  const {handleOpen} = useContext(ModalContext);
  return (
    <TableContainer component={Paper} sx={{ p: 5, minHeight: "89vh" }}>
      <Table sx={{}}>
        <TableHead>
          <TableRow>
            <TableCell>
              <CheckBox />
            </TableCell>
            {tableHeaders?.map((item) => (
              <TableCell key={item.id}
                sx={{
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                {item.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <CheckBox />
            </TableCell>
            <TableCell>Rishu</TableCell>
            <TableCell>Rishu@gmail.com</TableCell>
            <TableCell>+91 7903335804</TableCell>
            <TableCell>Bihar,Bihar Shrife,Hospital more,803101</TableCell>
            <TableCell>
            <Tooltip title="Delete">
              <IconButton
                sx={{
                  mr: 1,
                  bgcolor: "#ffe6e6",
                  "&:hover": { bgcolor: "#ffcccc" },
                }}
              >
                <DeleteIcon sx={{ color: "#cc0000" }} />
              </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
              <IconButton
                sx={{ bgcolor: "#e6ffe6", "&:hover": { bgcolor: "#ccffcc" } }}
                onClick={handleOpen}
              >
                <EditSquareIcon sx={{ color: "#00b300" }} />
              </IconButton>
              </Tooltip>
            </TableCell>
          </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
