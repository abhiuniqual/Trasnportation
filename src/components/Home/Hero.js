import { Box, Typography } from "@mui/material";
import React from "react";
import Heroimage from "../../images/Hero.png";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${Heroimage})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          objectFit: "cover",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box color={`${theme.palette.primary.light}`} textAlign={"center"}>
          <Typography
            sx={{
              fontSize: {
                lg: "52px",
                md: "44px",
                sm: "34px",
                xs: "24px",
              },
              fontFamily: `${theme.typography.secondaryFontFamily}`,
              fontWeight: "700",
            }}
          >
            CarryMatch
          </Typography>
          <Typography
            sx={{
              fontSize: {
                lg: "20px",
                md: "18px",
                sm: "16px",
                xs: "16px",
              },
              fontFamily: `${theme.typography.fontFamily}`,
              fontWeight: "600",
            }}
          >
            Your Gateway to Efficient Supply Chain Solutions
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Hero;
