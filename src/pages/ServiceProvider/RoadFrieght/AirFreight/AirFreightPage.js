import React, { useState } from "react";
import OnBoardNavBar from "../../../../components/OnBoardNavBar";
import {
  Box,
  Button,
  Typography,
  Grid,
  Select,
  MenuItem,
  LinearProgress,
  TextField,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Countries = [];

const AirFreightPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("Yes");
  const [offer, setOffer] = useState("No");
  const [country, setCountry] = useState("");

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  const handleValue = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSeviceOffer = (e) => {
    setOffer(e.target.value);
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
                  lg: 6,
                  md: 6,
                  sm: 4,
                  xs: 4,
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle">Create your account</Typography>
                <Typography
                  variant="skip"
                  sx={{
                    paddingBottom: "5px",
                  }}
                >
                  Skip <KeyboardArrowRightIcon />
                </Typography>
              </Box>
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
                Please add your other branches details in the below field.
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">
                Add your company information
              </Typography>
              <LinearProgress value={100} variant="determinate" />
            </Box>
            <Box>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "calc(100vh - 350px)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 2,
                  }}
                >
                  <Typography
                    sx={{
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
                    Tell us about air freight details
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "17px",
                          md: "17px",
                          sm: "14px",
                          xs: "14px",
                        },
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontWeight: "600",
                      }}
                    >
                      Are you registered with IATA?
                    </Typography>
                    <Box>
                      <Radio
                        checked={selectedValue === "Yes"}
                        onChange={handleValue}
                        value="Yes"
                        sx={{
                          "&.Mui-checked": {
                            color: `${theme.palette.secondary.main}`,
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          display: "inline-block",
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                        }}
                      >
                        Yes
                      </Typography>
                      <Radio
                        checked={selectedValue === "No"}
                        onChange={handleValue}
                        value="No"
                        sx={{
                          "&.Mui-checked": {
                            color: `${theme.palette.secondary.main}`,
                          },
                        }}
                      />
                      <Typography
                        sx={{
                          display: "inline-block",
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                        }}
                      >
                        No
                      </Typography>
                    </Box>
                  </Box>
                  {selectedValue === "Yes" ? (
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
                        value={country}
                        onChange={handleChange}
                        displayEmpty
                        renderValue={() =>
                          country !== ""
                            ? country
                            : "Select country you registered IATA"
                        }
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
                      <TextField
                        type="number"
                        placeholder="Enter IATA Number"
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
                  ) : (
                    <>
                      <Box>
                        <Radio
                          checked={offer === "Yes"}
                          onChange={handleSeviceOffer}
                          value="Yes"
                          sx={{
                            "&.Mui-checked": {
                              color: `${theme.palette.secondary.main}`,
                            },
                          }}
                        />
                        <Typography
                          sx={{
                            display: "inline-block",
                            fontSize: {
                              lg: "16px",
                              md: "16px",
                              sm: "14px",
                              xs: "14px",
                            },
                            fontFamily: `${theme.typography.fontFamily}`,
                            fontWeight: "600",
                          }}
                        >
                          I offer airfreight through a 3rd party portal/network
                        </Typography>
                      </Box>
                      <Box>
                        <Radio
                          checked={offer === "No"}
                          onChange={handleSeviceOffer}
                          value="No"
                          sx={{
                            "&.Mui-checked": {
                              color: `${theme.palette.secondary.main}`,
                            },
                          }}
                        />
                        <Typography
                          sx={{
                            display: "inline-block",
                            fontSize: {
                              lg: "16px",
                              md: "16px",
                              sm: "14px",
                              xs: "14px",
                            },
                            fontFamily: `${theme.typography.fontFamily}`,
                            fontWeight: "600",
                          }}
                        >
                          I do not offer airfreight services
                        </Typography>
                      </Box>
                    </>
                  )}
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
                      navigate("/signup/RoadFrieght/companyAccount5")
                    }
                  >
                    <MdArrowBackIos sx={{ marginRight: 1, fontSize: "14px" }} />
                    Back
                  </Button>
                  <Button
                    variant="dark"
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                    }}
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

export default AirFreightPage;
