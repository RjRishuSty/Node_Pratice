import React  from "react";
import { AppBar, Box, Stack, Toolbar } from "@mui/material";
import Logo from "./Logo";
import { headerBtn } from "../Objects/headerBtn";
import ActionBtn from "./ActionBtn";

const Header = () => {
  return (
    <Stack>
      <AppBar position="static" sx={{ bgcolor: "#435d7d", py: 1 }}>
        <Toolbar>
          <Logo />
          <Box sx={{ ml: "auto" }}>
            {headerBtn?.map((item) => (
              <React.Fragment key={item.id}>
                <ActionBtn data={item} />
              </React.Fragment>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Stack>
  );
};

export default Header;
