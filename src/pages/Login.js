import React from "react";
import OnBoardNavBar from "../components/OnBoardNavBar";
import { Box, Button, Typography, TextField, Link, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useTheme } from "@mui/material/styles";

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <>
      <OnBoardNavBar />
      <Box
        sx={{
          paddingTop: {
            sm: "100px",
            xs: "100px",
          },
          display: "flex",
          height: "calc(100vh - 100px)",
          backgroundColor: "#e5e5e5",
        }}
      >
        <Grid container sx={{ marginX: 2, justifyContent: "center" }}>
          <Grid item xs={12} sm={8} md={6}>
            <Box
              sx={{
                marginTop: {
                  lg: 7,
                  md: 6,
                  sm: 4,
                  xs: 4,
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    lg: "32px",
                    md: "26px",
                    sm: "20px",
                    xs: "20px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontWeight: "700",
                  paddingBottom: "5px",
                }}
              >
                Login Account
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.accent.main}`,
                  fontSize: {
                    lg: "18px",
                    md: "18px",
                    sm: "16px",
                    xs: "16px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontWeight: "500",
                }}
              >
                Please enter your credentials in order to log into the platform.
              </Typography>
            </Box>
            <Box>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "calc(100vh - 300px)",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <TextField
                    type="email"
                    placeholder="Email"
                    sx={{
                      marginY: 3,
                      backgroundColor: "#fff",
                      color: "#000",
                      lineHeight: "normal",
                      fontStyle: "normal",
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontSize: {
                        lg: "18px",
                        md: "18px",
                        sm: "16px",
                        xs: "16px",
                      },
                      fontWeight: "500",
                      "&:hover": {
                        outline: "none",
                      },
                      "& .MuiInputBase-input": {
                        padding: {
                          lg: "17px",
                          md: "17px",
                          sm: "10px",
                          xs: "10px",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: 0,
                      },
                    }}
                  />
                  <TextField
                    type="password"
                    placeholder="Password"
                    sx={{
                      marginBottom: 1,
                      backgroundColor: "#fff",
                      color: "#000",
                      lineHeight: "normal",
                      fontStyle: "normal",
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontSize: {
                        lg: "18px",
                        md: "18px",
                        sm: "16px",
                        xs: "16px",
                      },
                      fontWeight: "500",
                      "&:hover": {
                        outline: "none",
                      },
                      "& .MuiInputBase-input": {
                        padding: {
                          lg: "17px",
                          md: "17px",
                          sm: "10px",
                          xs: "10px",
                        },
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderRadius: 0,
                      },
                    }}
                  />
                  <Typography
                    sx={{
                      textAlign: "end",
                      color: `${theme.palette.secondary.main}`,
                      cursor: "pointer",
                      fontSize: {
                        lg: "17px",
                        md: "17px",
                        sm: "14px",
                        xs: "14px",
                      },
                      fontWeight: "500",
                      fontStyle: "normal",
                      fontFamily: `${theme.typography.fontFamily}`,
                      letterSpacing: "-0.5px",
                      lineHeight: "20px",
                      marginTop: 1,
                      marginBottom: 4,
                    }}
                  >
                    Forgot password?
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: {
                        lg: "17px",
                        md: "17px",
                        sm: "14px",
                        xs: "14px",
                      },
                      fontWeight: "500",
                      fontStyle: "normal",
                      fontFamily: `${theme.typography.fontFamily}`,
                      letterSpacing: "-0.5px",
                      lineHeight: "20px",
                    }}
                  >
                    Don't have an account?
                    <Link
                      color={theme.palette.secondary.main}
                      sx={{
                        marginLeft: 1,
                        cursor: "pointer",
                        fontSize: {
                          lg: "17px",
                          md: "17px",
                          sm: "14px",
                          xs: "14px",
                        },
                        fontWeight: "500",
                        fontStyle: "normal",
                        fontFamily: `${theme.typography.fontFamily}`,
                        letterSpacing: "-0.5px",
                        lineHeight: "20px",
                      }}
                      onClick={() => navigate("/signup")}
                    >
                      Signup
                    </Link>
                  </Typography>
                </Box>
                <Box display={"flex"} gap={2} justifyContent={"end"} bottom={0}>
                  <Button variant="light" onClick={() => navigate("/")}>
                    <MdArrowBackIos sx={{ fontSize: "14px", marginRight: 1 }} />
                    Back
                  </Button>
                  <Button
                    variant="dark"
                    sx={{
                      backgroundColor: `${theme.palette.primary.main}`,
                    }}
                  >
                    Next
                    <MdArrowForwardIos
                      sx={{ fontSize: "14px", marginLeft: 1 }}
                    />
                  </Button>
                </Box>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Login;