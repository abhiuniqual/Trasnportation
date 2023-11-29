import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as Logo } from "../../svgs/Logo.svg";
import { useTheme } from "@mui/material/styles";
// import { Select, MenuItem, IconButton } from "@mui/material";

const HomeNavbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  // const [country, setCountry] = useState("");

  // const countries = [
  //   {
  //     label: "United Kingdom",
  //     flag: "https://uxwing.com/united-kingdom-flag-icon/",
  //   },
  //   {
  //     label: "Australia",
  //     flag: "https://uxwing.com/australia-flag-icon/",
  //   },
  //   {
  //     label: "New Zealand",
  //     flag: "https://uxwing.com/new-zealand-flag-icon/",
  //   },
  // ];

  // const handleCountryChange = (e) => {
  //   setCountry(e.target.value);
  // };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        paddingX: {
          lg: 6,
          md: 4,
          sm: 2,
          xs: 2,
        },
        paddingY: 3,
        background: "rgba(20, 20, 20, 0.40)",
        backdropFilter: "blur(10px)",
        color: `${theme.palette.primary.light}`,
        left: 0,
        top: 0,
        right: 0,
        zIndex: 1000,
        position: "fixed",
        "&:active": {
          backdropFilter: "blur(40px)",
          backgroundColor: "rgb(0, 0, 0)",
          color: "rgb(255, 255, 255)",
          transition: "ALL 0.5S ease-in-out",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo style={{ cursor: "pointer" }} onClick={() => navigate("/")} />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Box
            sx={{
              display: {
                sm: "flex",
                xs: "none",
              },
              alignItems: "center",
              gap: 1,
              fontFamily: `${theme.typography.fontFamily}`,
            }}
          >
            <Button variant="homeNavButton" onClick={() => navigate("/blog")}>
              Blog
            </Button>
            <Button
              variant="homeNavButton"
              onClick={() => navigate("/service")}
            >
              Services
            </Button>
            <Button variant="homeNavButton" onClick={() => navigate("/about")}>
              About Us
            </Button>
            {/* <Select
              value={country}
              onClick={handleCountryChange}
              renderValue={(selectedCountry) => (
                <IconButton>
                  <img
                    src={require(`${selectedCountry.flag}`)}
                    alt={selectedCountry.label}
                    style={{ width: 24, height: 24 }}
                  />
                  {selectedCountry.label}
                </IconButton>
              )}
            >
              {countries.map((country) => (
                <MenuItem key={country.label} value={country}>
                  <img
                    src={`${country.flag}`}
                    alt={country.label}
                    style={{ width: 24, height: 24 }}
                  />
                  {country.label}
                </MenuItem>
              ))}
            </Select> */}
            <Button variant="homeNavButton" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button
              sx={{
                paddingX: 2,
                paddingY: 1,
                color: `${theme.palette.primary.main}`,
                fontWeight: "600",
                backgroundColor: `${theme.palette.secondary.main}`,
                border: `1px solid ${theme.palette.secondary.main}`,
                cursor: "pointer",
                textTransform: "capitalize",
                fontFamily: `${theme.typography.fontFamily}`,
                fontSize: "16px",
                "&:hover": {
                  color: `${theme.palette.primary.light}`,
                  borderColor: `${theme.palette.primary.light}`,
                },
                "&:target": {
                  backgroundColor: "transparent",
                  color: `${theme.palette.primary.light}`,
                  border: `1px solid ${theme.palette.primary.light}`,
                },
              }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </Button>
          </Box>
          <Box
            sx={{
              display: {
                sm: "none",
                xs: "block",
              },
            }}
          >
            <Button
              sx={{ color: `${theme.palette.primary.light}` }}
              onClick={handleDrawerOpen}
            >
              Menu
            </Button>
          </Box>
        </Box>
      </Box>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      >
        <Box sx={{ width: 250 }}>
          <Box sx={{ padding: 2 }}>
            <Box
              marginBottom={4}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography fontSize={"24px"}>Menu</Typography>
              <Button
                onClick={handleDrawerClose}
                sx={{
                  color: `${theme.palette.primary.main}`,
                  "&:hover": { backgroundColor: "rgba(20,20,20,0.04)" },
                }}
              >
                <CloseIcon />
              </Button>
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              textAlign={"center"}
              gap={2}
            >
              <Button
                sx={{
                  marginTop: 2,
                  color: `${theme.palette.primary.main}`,
                  "&:hover": { backgroundColor: "rgba(20,20,20,0.04)" },
                }}
                onClick={() => navigate("/blog")}
              >
                Blog
              </Button>

              <Button
                sx={{
                  marginTop: 2,
                  color: `${theme.palette.primary.main}`,
                  "&:hover": { backgroundColor: "rgba(20,20,20,0.04)" },
                }}
                onClick={() => navigate("/service")}
              >
                Services
              </Button>

              <Button
                sx={{
                  marginTop: 2,
                  color: `${theme.palette.primary.main}`,
                  "&:hover": { backgroundColor: "rgba(20,20,20,0.04)" },
                }}
                onClick={() => navigate("/about")}
              >
                About Us
              </Button>

              <Button
                sx={{
                  marginTop: 2,
                  color: `${theme.palette.primary.main}`,
                  "&:hover": { backgroundColor: "rgba(20,20,20,0.04)" },
                }}
                onClick={() => navigate("/login")}
              >
                Login
              </Button>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: `${theme.palette.secondary.main}`,
                  color: `${theme.palette.primary.main}`,
                  fontWeight: "600",
                  cursor: "pointer",
                  border: `1px solid ${theme.palette.secondary.main}`,
                  "&:hover": {
                    color: `${theme.palette.primary.main}`,
                    backgroundColor: "transparent",
                    border: `1px solid ${theme.palette.secondary.main}`,
                  },
                }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
};

export default HomeNavbar;
