import React, { useState } from "react";
import OnBoardNavBar from "../../../components/OnBoardNavBar";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  LinearProgress,
  Checkbox,
  Link,
  Select,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useTheme } from "@mui/material/styles";

const countries = [
  { value: "+91", label: "+91 (India)" },
  { value: "+1", label: "+1 (United States)" },
  { value: "+44", label: "+44 (United Kingdom)" },
  { value: "+61", label: "+61 (Australia)" },
  { value: "+86", label: "+86 (China)" },
];

const NonOwnerCreateAccount = () => {
  const theme = useTheme();
  const navigate = useNavigate();
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
                Add your basic information
              </Typography>
              <LinearProgress value={34} variant="determinate" />
            </Box>
            <Box>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "calc(100vh - 150px)",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
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
                    <TextField
                      type="text"
                      placeholder="First Name"
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
                      }}
                    />
                    <TextField
                      type="text"
                      placeholder="Last Name"
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
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      marginY: 3,
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
                        {countries.map((country) => (
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
                  <TextField
                    type="password"
                    placeholder="Password"
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
                    type="password"
                    placeholder="Confirm Password"
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
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 2,
                        marginBottom: 2,
                      }}
                    >
                      <Checkbox
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: `${theme.palette.secondary.main}`,
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: `${theme.typography.fontFamily}`,
                          color: `${theme.palette.accent.main}`,
                          fontWeight: "500",
                          fontSize: {
                            lg: "17px",
                            md: "17px",
                            sm: "15px",
                            xs: "15px",
                          },
                        }}
                      >
                        I understand and agree with the CarryMatch
                        <Link
                          herf=""
                          color={"#cbab96"}
                          sx={{ cursor: "pointer", marginX: 1 }}
                        >
                          Terms and Conditions
                        </Link>
                        including our
                        <Link
                          herf=""
                          color={"#cbab96"}
                          sx={{ textDecoration: "none", marginLeft: 1 }}
                        >
                          Privacy Policy.
                        </Link>
                      </Typography>
                    </Box>
                    <Box
                      sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                    >
                      <Checkbox
                        sx={{
                          padding: 0,
                          "&.Mui-checked": {
                            color: `${theme.palette.secondary.main}`,
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: `${theme.typography.fontFamily}`,
                          color: `${theme.palette.accent.main}`,
                          fontWeight: "500",
                          fontSize: {
                            lg: "17px",
                            md: "17px",
                            sm: "15px",
                            xs: "15px",
                          },
                        }}
                      >
                        I would like to receive the carryMatch newsletter by
                        email.
                      </Typography>
                    </Box>
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
                    onClick={() => navigate("/signup/customer")}
                  >
                    <MdArrowBackIos sx={{ marginRight: 1, fontSize: "14px" }} />
                    Back
                  </Button>
                  <Button
                    variant="dark"
                    sx={{ backgroundColor: `${theme.palette.primary.main}` }}
                    onClick={() => navigate("/signup/non-owner/createAccount2")}
                  >
                    Next
                    <MdArrowForwardIos fontSize={"14px"} />
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

export default NonOwnerCreateAccount;
