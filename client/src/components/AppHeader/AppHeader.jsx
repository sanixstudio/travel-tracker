import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import LogoutIcon from "@mui/icons-material/Logout";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Stack } from "@mui/material";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function AppHeader({ showAllPopup, setShowAllPopup }) {
  const [user, setUser] = React.useState("");
  const [loginModalIsOpen, setLoginModalIsOpen] = React.useState(false);
  const [registerModalIsOpen, setRegisterModalIsOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setShowAllPopup(!showAllPopup);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              background: "rgba(255, 255, 255, .5)",
              borderRadius: "0 0 3em 3em",
              backdropFilter: "blur(10px)",
              zIndex: 100,
            }}
          >
            <Box
              sx={{
                display: "flex",
                borderRadius: "50%",
                padding: "3px",
                marginRight: "1em",
                backgroundColor: "common.white",
              }}
            >
              <img
                src="https://adi-personal.s3.amazonaws.com/codepaws.png"
                width={46}
                height={46}
                alt=""
              />
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "teal.main",
                marginRight: "2em",
                textDecoration: "none",
              }}
            >
              Purrgramer
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem key={2} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    {showAllPopup ? "Hide Pins" : "Show Pins"}
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={handleCloseNavMenu}
                variant="contained"
                disableElevation
                color="teal"
                sx={{ color: "#fff" }}
              >
                <Typography
                  sx={{
                    textTransform: "capitalize",
                    mr: 1,
                  }}
                >
                  {showAllPopup ? "Hide Pins" : "Show Pins"}
                </Typography>
                <FmdGoodIcon />
              </Button>
            </Box>

            <Stack direction={"row"} gap={1} sx={{ flexGrow: 0 }}>
              {!user ? (
                <>
                  <Button
                    variant="contained"
                    sx={{ color: "#fff" }}
                    disableElevation
                    color="teal"
                    startIcon={<LockOpenIcon />}
                    onClick={() => setLoginModalIsOpen(true)}
                  >
                    login
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ color: "#fff" }}
                    disableElevation
                    color="teal"
                    startIcon={<PersonAddIcon />}
                    onClick={() => setRegisterModalIsOpen(true)}
                  >
                    register
                  </Button>
                </>
              ) : (
                <Button
                  variant="contained"
                  sx={{ color: "#fff" }}
                  disableElevation
                  color="teal"
                  startIcon={<LogoutIcon />}
                >
                  Logout
                </Button>
              )}
            </Stack>
          </Toolbar>
        </Container>
        <LoginModal open={loginModalIsOpen} setOpen={setLoginModalIsOpen} />
      <RegisterModal
        open={registerModalIsOpen}
        setOpen={setRegisterModalIsOpen}
      />
      </AppBar>
    </>
  );
}
export default AppHeader;
