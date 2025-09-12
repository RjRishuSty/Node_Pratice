import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";

const employeeFormFields = [
  {
    type: "text",
    id: "fullname",
    name: "fullname",
    label: "Full Name",
    placeholder: "Enter full name",
    icon: <PersonIcon />,
  },
  {
    type: "email",
    id: "email",
    name: "email",
    label: "Email Address",
    placeholder: "Enter email address",
    icon: <EmailIcon />,
  },
  {
    type: "tel",
    id: "phone",
    name: "phone",
    label: "Phone Number",
    placeholder: "Enter phone number",
    icon: <PhoneIcon />,
  },
  {
    type: "text",
    id: "address",
    name: "address",
    label: "Address",
    placeholder: "Enter address",
    icon: <HomeIcon />,
  },
];

export default employeeFormFields;
