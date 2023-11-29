import React, { useState } from "react";
import OnBoardNavBar from "../../../components/OnBoardNavBar";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  LinearProgress,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useTheme } from "@mui/material/styles";

const phones = [
  { value: "+91", label: "+91 (India)" },
  { value: "+1", label: "+1 (United States)" },
  { value: "+44", label: "+44 (United Kingdom)" },
  { value: "+61", label: "+61 (Australia)" },
  { value: "+86", label: "+86 (China)" },
];

const Countries = [];
const Cities = [];
const States = [];

const CompanyInfo = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState(null);

  const [phoneNumberAndCountry, setPhoneNumberAndCountry] = useState({
    country: "+91",
    number: "",
  });

  const handlePhoneNumberChange = (event) => {
    const { country, number } = phoneNumberAndCountry;
    const updatedPhoneNumber = event.target.value.replace(/[^0-9]/g, "");
    setPhoneNumberAndCountry({ country, number: updatedPhoneNumber });
  };

  const handleCountryChange = (event) => {
    setPhoneNumberAndCountry({
      country: event.target.value,
      number: phoneNumberAndCountry.number,
    });
  };

  const getPhoneInputLength = () => {
    const { country } = phoneNumberAndCountry;
    const phoneInputLengthMap = {
      "+91": 10,
      "+1": 10,
      "+44": 10,
      "+61": 10,
      "+86": 11,
    };

    return phoneInputLengthMap[country] || 10;
  };

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
          minHeight: "calc(100vh - 100px)",
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
                Add your company information
              </Typography>
              <LinearProgress value={50} variant="determinate" />
            </Box>
            <Box>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "calc(100vh - 200px)",
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
                    placeholder="Enter company name"
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
                  <TextField
                    type="url"
                    placeholder="Enter company website"
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
                      marginTop: 3,
                      display: "flex",
                      flexDirection: {
                        lg: "row",
                        md: "row",
                        sm: "column",
                        xs: "column",
                      },
                      gap: {
                        md: 2,
                        xs: 3,
                      },
                    }}
                    width={"100%"}
                  >
                    <Box
                      sx={{
                        width: { md: "50%", sm: "100%" },
                        backgroundColor: "#fff",
                        color: "#000",
                        outline: "none",
                        alignItems: "center",
                        padding: 0,
                      }}
                    >
                      <Select
                        value={phoneNumberAndCountry.country}
                        onChange={handleCountryChange}
                        sx={{ width: "75px", borderRadius: 0 }}
                      >
                        {phones.map((country) => (
                          <MenuItem key={country.value} value={country.value}>
                            {country.value}
                          </MenuItem>
                        ))}
                      </Select>
                      <TextField
                        type="tel"
                        placeholder="Enter phone number"
                        value={phoneNumberAndCountry.number}
                        onChange={handlePhoneNumberChange}
                        inputProps={{ maxLength: getPhoneInputLength() }}
                        sx={{
                          margin: 0,
                          width: "77%",
                          fontFamily: theme.typography.fontFamily,
                          fontSize: {
                            lg: "17px",
                            md: "17px",
                            sm: "16px",
                            xs: "16px",
                          },
                          fontWeight: 500,
                          outline: "none",
                          "& .MuiInputBase-input": {
                            padding: {
                              lg: "17px",
                              md: "17px",
                              sm: "10px",
                              xs: "10px",
                            },
                            border: "none",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            borderRadius: 0,
                            border: 0,
                          },
                        }}
                      />
                    </Box>
                    <TextField
                      type="email"
                      placeholder="Email"
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
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
                      }}
                    />
                  </Box>
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
                          xs: "100%",
                        },
                        backgroundColor: "#fff",
                        color: "#000",
                        lineHeight: "normal",
                        fontStyle: "normal",
                        fontFamily: "Gilroy",
                        fontSize: {
                          lg: "17px",
                          md: "17px",
                          sm: "16px",
                          xs: "16px",
                        },

                        fontWeight: 500,
                        outline: "none",
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
                            appearance: "none",
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
                      navigate("/signup/cutomBroker/customBrokerAccount")
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
                    onClick={() => navigate("/signup/cutomBroker/companyInfo2")}
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

export default CompanyInfo;
