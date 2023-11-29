import React, { useState } from "react";
import OnBoardNavBar from "../../../components/OnBoardNavBar";
import {
  Box,
  Button,
  Typography,
  Grid,
  Select,
  TextField,
  MenuItem,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Cards = ["Debit Card", "Credit Card"];

const PaymentMode = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [card, setCard] = useState("");
  const [cardNumber, setCardNumber] = useState(null);
  const [cvv, setCVV] = useState(null);

  const handleCard = (e) => {
    setCard(e.target.value);
    setDisabled(!disabled);
  };

  const handleCardNumber = (e) => {
    const input = e.target.value;
    if (input.length > 16) {
      e.target.value = input.substring(0, 16);
      return;
    }
    const trimmedInput = input.replace("/[^0-9]/g", "");
    let limitedInput = trimmedInput.substring(0, 16);
    setCardNumber(limitedInput);
  };

  const handleCVV = (e) => {
    const input = e.target.value;
    if (input.length > 6) {
      e.target.value = input.substring(0, 3);
      return;
    }
    const trimmedInput = input.replace("/[^0-9]/g", "");
    let limitedInput = trimmedInput.substring(0, 3);
    setCVV(limitedInput);
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      lg: "30px",
                      md: "26px",
                      sm: "20px",
                      xs: "20px",
                    },
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontWeight: "700",
                    paddingBottom: "5px",
                  }}
                >
                  Verify payment mode
                </Typography>
                <Typography variant="skip" sx={{ paddingBottom: "5px" }}>
                  Skip <KeyboardArrowRightIcon />
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: {
                    lg: "18px",
                    md: "18px",
                    sm: "16px",
                    xs: "16px",
                  },
                  color: `${theme.palette.accent.main}`,
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontWeight: "500",
                  marginBottom: 2,
                }}
              >
                Please enter your preferred payment method below.
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">Add payment details</Typography>
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
                      value={card}
                      displayEmpty
                      onChange={handleCard}
                      renderValue={() =>
                        card !== "" ? card : "Select payment method"
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
                      {Cards.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  {card !== "" ? (
                    <Box>
                      <TextField
                        type="number"
                        placeholder="Card Number"
                        value={cardNumber}
                        onChange={handleCardNumber}
                        sx={{
                          marginY: 3,
                          width: "100%",
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
                          "& input[type=number]::-webkit-inner-spin-button, & input[type=number]::-webkit-outer-spin-button":
                            {
                              appearance: "none",
                              margin: 0,
                            },
                          "& input[type=number]": {
                            MozAppearance: "textfield",
                          },
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
                        }}
                        width={"100%"}
                      >
                        <TextField
                          type="date"
                          sx={{
                            width: "30%",
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
                          type="number"
                          placeholder="CVV"
                          value={cvv}
                          onChange={handleCVV}
                          sx={{
                            width: "20%",
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
                                appearance: "none",
                                margin: 0,
                              },
                            "& input[type=number]": {
                              MozAppearance: "textfield",
                            },
                          }}
                        />
                        <TextField
                          type="text"
                          placeholder="Card holder name"
                          sx={{
                            width: "50%",
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
                    </Box>
                  ) : null}
                </Box>
                <Box
                  display={"flex"}
                  gap={2}
                  justifyContent={"end"}
                  marginBottom={2}
                >
                  <Button
                    variant="light"
                    onCick={() => navigate("/signup/non-owner/createAccount2")}
                  >
                    <MdArrowBackIos sx={{ marginRight: 1, fontSize: "14px" }} />
                    Back
                  </Button>
                  <Button
                    variant="dark"
                    sx={{
                      backgroundColor: disabled
                        ? "#ccc"
                        : `${theme.palette.primary.main}`,
                    }}
                    disabled={!card}
                  >
                    Verify
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

export default PaymentMode;
