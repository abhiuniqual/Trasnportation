import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { ReactComponent as Logo } from "../svgs/Logo.svg";
import { useTheme } from "@mui/material/styles";

const OnBoardNavBar = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <HelmetProvider>
      <Helmet>
        <title> Login </title>
      </Helmet>
      <Box
        sx={{
          paddingX: {
            lg: 10,
            md: 8,
            sm: 6,
            xs: 4,
          },
          paddingY: 3,
          background: `${theme.palette.primary.light}`,
          color: `${theme.palette.primary.main}`,
          left: 0,
          top: 0,
          right: 0,
          zIndex: 1000,
          position: "fixed",
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.5)",
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
          <Box>
            <Button variant="faq" onClick={() => navigate("/faq")}>
              Faq
            </Button>
          </Box>
        </Box>
      </Box>
    </HelmetProvider>
  );
};

export default OnBoardNavBar;
