import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Join = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginX: {
          lg: 8,
          md: 6,
          sm: 4,
          xs: 2,
        },
        marginY: {
          lg: 12,
          md: 10,
          sm: 6,
          xs: 3,
        },
      }}
    >
      <Typography
        sx={{
          color: `${theme.palette.secondary.main}`,
          fontWeight: "600",
          fontSize: {
            lg: "26px",
            md: "24px",
            sm: "18px",
            xs: "16px",
          },
          fontFamily: `${theme.typography.fontFamily}`,
        }}
      >
        Transform Your Logistics Experience
      </Typography>
      <Typography
        sx={{
          fontSize: {
            lg: "52px",
            md: "40px",
            sm: "32px",
            xs: "26px",
          },
          fontWeight: "bold",
          fontFamily: `${theme.typography.fontFamily}`,
        }}
      >
        Join CarryMatch today
      </Typography>
      <Typography
        textAlign={"center"}
        marginY={2}
        color={" rgba(20, 20, 20, 0.60)"}
        sx={{
          marginX: {
            lg: 8,
            md: 6,
            sm: 4,
            xs: 2,
          },
          fontSize: "20px",
          fontFamily: `${theme.typography.fontFamily}`,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        CarryMatch isn't just a platform; it's a community of logistics
        professionals committed to simplifying and optimizing the way goods
        move. Whether you're a shipper, carrier, freight forwarder, or
        warehousing provider, CarryMatch is your key to success in the world of
        logistics.
      </Typography>
      <Typography
        textAlign={"center"}
        marginBottom={4}
        color={" rgba(20, 20, 20, 0.60)"}
        sx={{
          marginX: {
            lg: 8,
            md: 6,
            sm: 4,
            xs: 2,
          },
          fontSize: "20px",
          fontFamily: `${theme.typography.fontFamily}`,
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
        }}
      >
        Don't miss the opportunity to revolutionize your logistics experience.
        Join CarryMatch today and unlock the potential for seamless, efficient,
        and cost-effective shipping and storage solutions. Your logistics, your
        way, with CarryMatch. Start your journey now.
      </Typography>
      <Box>
        <Button
          sx={{
            backgroundColor: `${theme.palette.primary.main}`,
            color: `${theme.palette.primary.light}`,
            border: `1px solid ${theme.palette.primary.main}`,
            fontFamily: `${theme.typography.fontFamily}`,
            borderRadius: "0px",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "transparent",
              color: `${theme.palette.primary.main}`,
            },
            paddingX: 8,
            paddingY: 2,
            fontWeight: "600",
            fontSize: {
              lg: "18px",
              md: "18px",
              sm: "16px",
              xs: "16px",
            },
          }}
        >
          Join Us
        </Button>
      </Box>
    </Box>
  );
};

export default Join;
