import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import CloseIcon from "@mui/icons-material/Close";
import { ReactComponent as Logo } from "../svgs/Logo.svg";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
        background: "#EEEEEE",
        color: `${theme.palette.primary.main}`,
        left: 0,
        top: 0,
        right: 0,
        zIndex: 1000,
        position: "fixed",
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
            <Button variant="navButton" onClick={() => navigate("/blog")}>
              Blog
            </Button>
            <Button variant="navButton" onClick={() => navigate("/service")}>
              Services
            </Button>
            <Button variant="navButton" onClick={() => navigate("/about")}>
              About Us
            </Button>
            <Button variant="navButton" onClick={() => navigate("/login")}>
              Login
            </Button>
            <Button
              sx={{
                paddingX: 3,
                paddingY: 1,
                color: `${theme.palette.primary.main}`,
                fontWeight: "600",
                backgroundColor: `${theme.palette.secondary.main}`,
                border: `1px solid ${theme.palette.secondary.main}`,
                cursor: "pointer",
                textTransform: "capitalize",
                fontFamily: `${theme.typography.fontFamily}`,
                fontSize: "17px",
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

export default Navbar;
