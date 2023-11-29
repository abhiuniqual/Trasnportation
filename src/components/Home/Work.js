import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import work from "../../images/work.png";
import { ReactComponent as HowWork } from "../../svgs/how-it-work-bg.svg";
import { useTheme } from "@mui/material/styles";

const Work = () => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundColor: `${theme.palette.primary.main}`,
          marginX: {
            lg: 16,
            md: 12,
            sm: 4,
            xs: 2,
          },
          marginY: {
            lg: 10,
            md: 8,
            sm: 6,
            xs: 3,
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
          }}
        >
          <HowWork className="how-work" />
        </Box>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              color={`${theme.palette.primary.light}`}
              paddingY={9}
              sx={{
                paddingX: {
                  lg: 8,
                  md: 6,
                  sm: 2,
                  xs: 2,
                },
              }}
            >
              <Typography
                sx={{
                  textAlign: {
                    sm: "start",
                    xs: "center",
                  },
                  fontSize: {
                    lg: "44px",
                    md: "40px",
                    sm: "36px",
                    xs: "32px",
                  },
                  fontFamily: `${theme.typography.secondaryFontFamily}`,
                  fontWeight: "600",
                }}
              >
                How it works
              </Typography>
              <Typography
                marginTop={2}
                marginBottom={4}
                sx={{
                  fontSize: {
                    lg: "22px",
                    md: "18px",
                    sm: "16px",
                    xs: "16px",
                  },
                  color: "#7c7c7c",
                  textAlign: {
                    sm: "start",
                    xs: "justify",
                  },
                  fontWeight: "600",
                  fontFamily: `${theme.typography.fontFamily}`,
                }}
              >
                Sign up, create your logistics profile, and browse tailored
                solutions. Request and compare quotes for informed decisions.
                Communicate directly with partners for seamless coordination.
                Optimize your supply chain, cut costs, and enhance efficiency
                for the future of logistics.
              </Typography>
              <Box>
                <Button
                  sx={{
                    backgroundColor: `${theme.palette.primary.light}`,
                    color: `${theme.palette.primary.main}`,
                    border: `1px solid ${theme.palette.primary.main}`,
                    borderRadius: "0px",
                    "&:hover": {
                      color: `${theme.palette.primary.light}`,
                      backgroundColor: "transparent",
                      border: `1px solid ${theme.palette.primary.light}`,
                    },
                    paddingX: 12,
                    paddingY: 2,
                    fontWeight: "600",
                    textTransform: "capitalize",
                    fontSize: {
                      lg: "18px",
                      md: "16px",
                      sm: "14px",
                      xs: "14px",
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box
              margin={"auto"}
              sx={{
                position: {
                  lg: "absolute",
                  md: "inherit",
                  sm: "inherit",
                  xs: "relative",
                },
                justifyContent: "center",
                bottom: 2,
                width: {
                  lg: "550px",
                  md: "450px",
                  sm: "400px",
                  xs: "350px",
                },
                height: {
                  lg: "640px",
                  md: "470px",
                  sm: "420px",
                  xs: "370px",
                },
                paddingRight: "15px",
              }}
            >
              <img
                src={work}
                alt="work"
                style={{
                  width: "100%",
                  height: "100%",
                  bottom: {
                    md: 0,
                    sm: 1,
                    xs: 1,
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Work;
