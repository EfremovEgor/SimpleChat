import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation } from "react-router-dom";

function Navbar() {
  const pages = [
    { page: "Home", url: "/", icon: <HomeIcon /> },
    { page: "Profiles", url: "/profile_list", icon: <GroupIcon /> },
    { page: "Profile", url: "/profile/1", icon: <PersonIcon /> },
    { page: "Logout", url: "/logout", icon: <LogoutIcon /> },
  ];
  const location = useLocation();
  return (
    <AppBar sx={{ marginBottom: "40px" }} position="static">
      <Container>
        <Stack
          sx={{ my: "8px" }}
          direction="row"
          justifyContent="center"
          spacing={2}
        >
          {pages.map(({ page, url, icon }) => (
            <Button
              href={url}
              key={page}
              sx={{
                my: 2,
                color: "white",
              }}
              variant={location.pathname == url ? "contained" : "outlined"}
              startIcon={icon}
            >
              {page}
            </Button>
          ))}
        </Stack>
      </Container>
    </AppBar>
  );
}
export default Navbar;
