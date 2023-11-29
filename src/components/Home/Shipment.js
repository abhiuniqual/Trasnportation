import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Shipment = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingX: {
          lg: 12,
          md: 8,
          sm: 4,
          xs: 2,
        },
        paddingBottom: {
          lg: 14,
          md: 10,
          sm: 4,
          xs: 4,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              lg: "52px",
              md: "40px",
              sm: "32px",
              xs: "26px",
            },
            color: "#141414",
            fontStyle: "normal",
            lineHeight: "70px",
            fontWeight: "bold",
            fontFamily: `${theme.typography.fontFamily}`,
          }}
        >
          One place to manage all <br /> your shipments and tasks
        </Typography>
        <Typography
          sx={{
            paddingX: {
              lg: 34,
              md: 26,
              sm: 0,
              xs: 0,
            },
            fontSize: {
              lg: "22px",
              md: "20px",
              sm: "18px",
              xs: "16px",
            },
            marginTop: 2,
            marginBottom: 6,
            color: "#141414",
            fontStyle: "normal",
            lineHeight: "25px",
            fontWeight: "600",
            fontFamily: `${theme.typography.fontFamily}`,
            opacity: 0.5,
          }}
        >
          We have the capability to tailor solutions for individual businesses
          by moulding our comprehensive range of services.
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: `${theme.palette.primary.main}`,
                color: `${theme.palette.primary.light}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingY: {
                  lg: 8,
                  md: 4,
                  sm: 3,
                  xs: 2,
                },
                height: {
                  lg: "110px",
                  md: "130px",
                  sm: "132px",
                  xs: "100px",
                },
              }}
              textAlign={"center"}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  lineHeight: "normal",
                  fontWeight: "800",
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: {
                    lg: "40px",
                    md: "30px",
                    sm: "20px",
                    xs: "18px",
                  },
                  marginBottom: 4,
                }}
              >
                100k
                <span
                  style={{
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                  }}
                >
                  +
                </span>
              </Typography>
              <Typography
                sx={{
                  color: `${theme.pa}`,
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  marginBottom: 1,
                }}
              >
                Brand Trust
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  opacity: 0.3,
                }}
              >
                Brands that trust topic
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: `${theme.palette.primary.main}`,
                color: `${theme.palette.primary.light}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingY: {
                  lg: 8,
                  md: 4,
                  sm: 3,
                  xs: 2,
                },
                height: {
                  lg: "110px",
                  md: "130px",
                  sm: "132px",
                  xs: "100px",
                },
              }}
              textAlign={"center"}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  lineHeight: "normal",
                  fontWeight: "800",
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: {
                    lg: "40px",
                    md: "30px",
                    sm: "20px",
                    xs: "18px",
                  },
                  marginBottom: 4,
                }}
              >
                1100k
                <span
                  style={{
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                  }}
                >
                  +
                </span>
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.secondary.main}`,
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  marginBottom: 1,
                }}
              >
                Worldwide
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  opacity: 0.3,
                }}
              >
                More worldwide users
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: `${theme.palette.primary.main}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: `${theme.palette.primary.light}`,
                paddingY: {
                  lg: 8,
                  md: 4,
                  sm: 3,
                  xs: 2,
                },
                height: {
                  lg: "110px",
                  md: "130px",
                  sm: "132px",
                  xs: "100px",
                },
              }}
              textAlign={"center"}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  lineHeight: "normal",
                  fontWeight: "800",
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: {
                    lg: "40px",
                    md: "30px",
                    sm: "20px",
                    xs: "18px",
                  },
                  marginBottom: 4,
                }}
              >
                5.9k
                <span
                  style={{
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                  }}
                >
                  +
                </span>
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.secondary.main}`,
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  marginBottom: 1,
                }}
              >
                Products Transport
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  opacity: 0.3,
                }}
              >
                Tons of products
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{
                backgroundColor: `${theme.palette.primary.main}`,
                color: `${theme.palette.primary.light}`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingY: {
                  lg: 8,
                  md: 4,
                  sm: 3,
                  xs: 2,
                },
                height: {
                  lg: "110px",
                  md: "130px",
                  sm: "132px",
                  xs: "100px",
                },
              }}
              textAlign={"center"}
            >
              <Typography
                sx={{
                  fontStyle: "normal",
                  lineHeight: "normal",
                  fontWeight: "800",
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: {
                    lg: "40px",
                    md: "30px",
                    sm: "20px",
                    xs: "18px",
                  },
                  marginBottom: 4,
                }}
              >
                100k
                <span
                  style={{
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: "16px",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "normal",
                  }}
                >
                  +
                </span>
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.secondary.main}`,
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                  marginBottom: 1,
                }}
              >
                Customer review
              </Typography>
              <Typography
                sx={{
                  color: "#FFF",
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: "18px",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "normal",
                  opacity: 0.3,
                }}
              >
                Transport of products
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Shipment;
