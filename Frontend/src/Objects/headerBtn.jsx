import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
export const headerBtn = [
  {
    id:'del',
    label: "Delete",
    variant: "contained",
    icon:<DeleteIcon/>,
    sx: { mr: 2 ,bgcolor:'#cc0000',textTransform: "capitalize"},
  },
  {
    id:'add',
    label: "Add New Employees",
    variant: "contained",
    icon:<AddIcon/>,
    sx: {bgcolor:"#00b300",textTransform: "capitalize"},
  },
];
