import React, { useState } from "react";
import OnBoardNavBar from "../../../components/OnBoardNavBar";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  Select,
  MenuItem,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useTheme } from "@mui/material/styles";

const Countries = [];
const Cities = [];
const States = [];

const IndDriverAccount2 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState(null);

  const handleNumericInput = (e) => {
    const input = e.target.value;
    if (input.length > 6) {
      e.target.value = input.substring(0, 6);
      return;
    }
    const trimmedInput = input.replace("/[^0-9]/g", "");
    let limitedInput = trimmedInput.substring(0, 6);
    setZipCode(limitedInput);
  };

  const handleChange = (e) => {
    // setBusinessType(e.target.value);
  };

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
          minHeight: "calc(100vh - 300px)",
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
              <Typography variant="subtitle">Create your Account</Typography>
              <Typography
                sx={{
                  fontSize: {
                    lg: "16px",
                    md: "16px",
                    sm: "14px",
                    xs: "14px",
                  },
                  color: `${theme.palette.accent.main}`,
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontWeight: "500",
                  marginTop: 1,
                  marginBottom: 2,
                }}
              >
                Please add the required sign-up information in the fields below.
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">
                Add your basic information
              </Typography>
              <LinearProgress value={40} variant="determinate" />
            </Box>
            <Box>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "calc(100vh - 300px)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 2,
                  }}
                >
                  <TextField
                    type="text"
                    placeholder="Main address"
                    sx={{
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
                  <Box
                    sx={{
                      gap: 2,
                      display: "flex",
                      flexDirection: {
                        md: "row",
                        xs: "column",
                      },
                      marginY: 3,
                    }}
                    width={"100%"}
                  >
                    <Select
                      value={country}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={() => (country !== "" ? country : "Country")}
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                        backgroundColor: "#fff",
                        color: "#909090",
                        lineHeight: "normal",
                        fontStyle: "normal",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: {
                          lg: "16px",
                          md: "16px",
                          sm: "14px",
                          xs: "14px",
                        },
                        fontWeight: "500",
                        "&:hover": {
                          outline: "none",
                        },
                        "& .MuiInputBase-input": {
                          padding: {
                            lg: "16px",
                            md: "16px",
                            sm: "12px",
                            xs: "12px",
                          },
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderRadius: 0,
                        },
                      }}
                    >
                      {Countries.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                    <Select
                      value={state}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={() => (state !== "" ? state : "State")}
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                        backgroundColor: "#fff",
                        color: "#909090",
                        lineHeight: "normal",
                        fontStyle: "normal",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: {
                          lg: "16px",
                          md: "16px",
                          sm: "14px",
                          xs: "14px",
                        },
                        fontWeight: "500",
                        "&:hover": {
                          outline: "none",
                        },
                        "& .MuiInputBase-input": {
                          padding: {
                            lg: "16px",
                            md: "16px",
                            sm: "12px",
                            xs: "12px",
                          },
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderRadius: 0,
                        },
                      }}
                    >
                      {States.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box
                    sx={{
                      gap: 2,
                      display: "flex",
                      flexDirection: {
                        md: "row",
                        xs: "column",
                      },
                    }}
                    width={"100%"}
                  >
                    <Select
                      value={city}
                      onChange={handleChange}
                      displayEmpty
                      renderValue={() => (city !== "" ? city : "City")}
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                        backgroundColor: "#fff",
                        color: "#909090",
                        lineHeight: "normal",
                        fontStyle: "normal",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: {
                          lg: "16px",
                          md: "16px",
                          sm: "14px",
                          xs: "14px",
                        },
                        fontWeight: "500",
                        "&:hover": {
                          outline: "none",
                        },
                        "& .MuiInputBase-input": {
                          padding: {
                            lg: "16px",
                            md: "16px",
                            sm: "12px",
                            xs: "12px",
                          },
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          borderRadius: 0,
                        },
                      }}
                    >
                      {Cities.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                    <TextField
                      type="number"
                      placeholder="Zip code"
                      onChange={handleNumericInput}
                      sx={{
                        width: {
                          md: "50%",
                          sm: "100%",
                        },
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
                        "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                          {
                            "-webkit-appearance": "none",
                            margin: 0,
                          },
                        "& input[type=number]": {
                          MozAppearance: "textfield",
                        },
                      }}
                    />
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  gap={2}
                  justifyContent={"end"}
                  marginBottom={2}
                >
                  <Button
                    variant="light"
                    onClick={() =>
                      navigate("/signup/individualDriver/indDriverAccount")
                    }
                  >
                    <MdArrowBackIos sx={{ marginRight: 1, fontSize: "14px" }} />
                    Back
                  </Button>
                  <Button
                    variant="dark"
                    sx={{
                      backgroundColor: "black",
                    }}
                    onClick={() =>
                      navigate("/signup/individualDriver/indDriverAccount3")
                    }
                  >
                    Next
                    <MdArrowForwardIos
                      sx={{ marginLeft: 1, fontSize: "14px" }}
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

export default IndDriverAccount2;
