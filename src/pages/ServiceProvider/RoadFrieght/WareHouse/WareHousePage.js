import React, { useState } from "react";
import OnBoardNavBar from "../../../../components/OnBoardNavBar";
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
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Countries = [];
const Cities = [];
const States = [];
const Sizes = [];
const Methods = [];
const Storages = [];
const Temepratures = [];
const Accreditations = [];
const Securities = [];
const Facilities = [];
const Types = [];
const storageTypes = [];
const Rates = [];
const DateZone = ["AM", "PM"];
const TimeZone = [];

const WareHousePage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [zipCode, setZipCode] = useState(null);
  const [userData, setUserData] = useState({
    country: "",
    state: "",
    city: "",
    size: "",
    method: "",
    storage: "",
    temprature: "",
    Accreditation: "",
    security: "",
    facility: "",
    type: "",
    storageType: "",
    rate: "",
    dateZone: "",
    timeZone: "",
  });

  const handleUserData = (e, name) => {
    setUserData({ ...userData, [name]: e.target.value });
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
                  onClick={() =>
                    navigate("/signup/individualDriver/vechicleDetails2")
                  }
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
                Add your basic information
              </Typography>
              <LinearProgress value={100} variant="determinate" />
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
                    Tell us about sea freight details
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontWeight: "600",
                      marginTop: 2,
                      marginBottom: 1,
                    }}
                  >
                    Address of warehouse
                  </Typography>
                  <TextField
                    type="text"
                    placeholder="Main address"
                    sx={{
                      marginBottom: 2,
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
                    }}
                    width={"100%"}
                  >
                    <Select
                      value={userData.country}
                      onChange={(e) => handleUserData(e, "country")}
                      displayEmpty
                      renderValue={() =>
                        userData.country !== "" ? userData.country : "Country"
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
                    <Select
                      value={userData.state}
                      onChange={(e) => handleUserData(e, "state")}
                      displayEmpty
                      renderValue={() =>
                        userData.state !== "" ? userData.state : "State"
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
                      {States.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box
                    sx={{
                      marginY: 2,
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
                      value={userData.city}
                      onChange={(e) => userData(e, "city")}
                      displayEmpty
                      renderValue={() =>
                        userData.city !== "" ? userData.city : "City"
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
                      {Cities.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                    <TextField
                      type="number"
                      placeholder="Zip code"
                      value={zipCode}
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
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                          marginY: 1,
                        }}
                      >
                        Select services you Offer
                      </Typography>
                      <Select
                        fullWidth
                        value={userData.size}
                        onChange={(e) => userData(e, "size")}
                        displayEmpty
                        renderValue={() =>
                          userData.size !== "" ? userData.size : "Add size"
                        }
                        sx={{
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
                        {Sizes.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                          marginY: 1,
                        }}
                      >
                        Select services you Offer
                      </Typography>
                      <Select
                        fullWidth
                        value={userData.method}
                        onChange={(e) => userData(e, "method")}
                        displayEmpty
                        renderValue={() =>
                          userData.method !== "" ? userData.method : "Select"
                        }
                        sx={{
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
                        {Methods.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontWeight: "600",
                      marginY: 1,
                    }}
                  >
                    Address of warehouse
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                        display: "flex",
                        flexDirection: {
                          md: "row",
                          xs: "column",
                        },
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: {
                            md: "50%",
                            xs: "100%",
                          },
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: "#fff",
                          paddingX: {
                            lg: "16px",
                            md: "16px",
                            sm: "12px",
                            xs: "12px",
                          },
                        }}
                      >
                        <TextField
                          placeholder="Start"
                          sx={{
                            width: "80%",
                            color: `${theme.palette.accent.main}`,
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
                              margin: 0,
                              padding: 0,
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderRadius: 0,
                              border: "none",
                            },
                          }}
                        />
                        <Select
                          name="dateZone"
                          value={userData.dateZone}
                          displayEmpty
                          onChange={(e) => handleUserData(e, "dateZone")}
                          sx={{
                            textAlign: "start",
                            marginRight: 1,
                            width: "20%",
                            "&:hover": {
                              outline: "none",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderRadius: 0,
                              border: "none",
                            },
                          }}
                        >
                          {DateZone.map((menuItem, index) => (
                            <MenuItem key={index} value={menuItem}>
                              {menuItem}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                      <Box
                        sx={{
                          width: {
                            md: "50%",
                            xs: "100%",
                          },
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          backgroundColor: "#fff",
                          paddingX: {
                            lg: "16px",
                            md: "16px",
                            sm: "12px",
                            xs: "12px",
                          },
                        }}
                      >
                        <TextField
                          placeholder="End"
                          sx={{
                            width: "80%",
                            color: `${theme.palette.accent.main}`,
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
                              margin: 0,
                              padding: 0,
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderRadius: 0,
                              border: "none",
                            },
                          }}
                        />
                        <Select
                          name="dateZone"
                          value={userData.dateZone}
                          displayEmpty
                          onChange={(e) => handleUserData(e, "dateZone")}
                          sx={{
                            marginRight: 1,
                            width: "20%",
                            "&:hover": {
                              outline: "none",
                            },
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderRadius: 0,
                              border: "none",
                            },
                          }}
                        >
                          {DateZone.map((menuItem, index) => (
                            <MenuItem key={index} value={menuItem}>
                              {menuItem}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Select
                        fullWidth
                        name="timeZone"
                        value={userData.timeZone}
                        displayEmpty
                        onChange={(e) => handleUserData(e, "timeZone")}
                        renderValue={() =>
                          userData.timeZone !== ""
                            ? userData.timeZone
                            : "Select your TimeZone"
                        }
                        sx={{
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
                        {TimeZone.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      gap: 2,
                      marginY: 1,
                      display: "flex",
                      flexDirection: {
                        md: "row",
                        xs: "column",
                      },
                    }}
                    width={"100%"}
                  >
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                          marginY: 1,
                        }}
                      >
                        Storage
                      </Typography>
                      <Select
                        fullWidth
                        value={userData.storage}
                        onChange={(e) => userData(e, "storage")}
                        displayEmpty
                        renderValue={() =>
                          userData.storage !== ""
                            ? userData.storage
                            : "Select storages"
                        }
                        sx={{
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
                        {Storages.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                          marginY: 1,
                        }}
                      >
                        Temperature control
                      </Typography>
                      <Select
                        fullWidth
                        value={userData.temprature}
                        onChange={(e) => userData(e, "temprature")}
                        displayEmpty
                        renderValue={() =>
                          userData.temprature !== ""
                            ? userData.temprature
                            : "Select Temperature control"
                        }
                        sx={{
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
                        {Temepratures.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
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
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                          marginY: 1,
                        }}
                      >
                        Accreditations
                      </Typography>
                      <Select
                        fullWidth
                        value={userData.Accreditation}
                        onChange={(e) => userData(e, "Accreditation")}
                        displayEmpty
                        renderValue={() =>
                          userData.Accreditation !== ""
                            ? userData.Accreditation
                            : "Select Accreditation"
                        }
                        sx={{
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
                        {Accreditations.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                          marginY: 1,
                        }}
                      >
                        Security
                      </Typography>
                      <Select
                        fullWidth
                        value={userData.security}
                        onChange={(e) => userData(e, "security")}
                        displayEmpty
                        renderValue={() =>
                          userData.security !== ""
                            ? userData.security
                            : "Select Security"
                        }
                        sx={{
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
                        {Securities.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  </Box>
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontWeight: "600",
                      marginTop: 2,
                    }}
                  >
                    Charges
                  </Typography>
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
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                          marginY: 1,
                        }}
                      >
                        Storage type
                      </Typography>
                      <Select
                        fullWidth
                        value={userData.type}
                        onChange={(e) => userData(e, "type")}
                        displayEmpty
                        renderValue={() =>
                          userData.type !== ""
                            ? userData.type
                            : "Select storage type"
                        }
                        sx={{
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
                        {Types.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                          marginY: 1,
                        }}
                      >
                        Per storage type
                      </Typography>
                      <Select
                        fullWidth
                        value={userData.storageType}
                        onChange={(e) => userData(e, "storageType")}
                        displayEmpty
                        renderValue={() =>
                          userData.storageType !== ""
                            ? userData.storageType
                            : "Select per storage type"
                        }
                        sx={{
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
                        {storageTypes.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
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
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                          marginY: 1,
                        }}
                      >
                        Rate
                      </Typography>
                      <Select
                        fullWidth
                        value={userData.rate}
                        onChange={(e) => userData(e, "rate")}
                        displayEmpty
                        renderValue={() =>
                          userData.rate !== "" ? userData.rate : "Enter Rate"
                        }
                        sx={{
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
                        {Rates.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                    <Box
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                          marginY: 1,
                        }}
                      >
                        Comments
                      </Typography>
                      <TextField
                        fullWidth
                        type="text"
                        placeholder="Enter Comment..."
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
                    </Box>
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
                    <Box
                      sx={{
                        width: {
                          md: "49%",
                          xs: "100%",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "16px",
                            md: "16px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontFamily: `${theme.typography.fontFamily}`,
                          fontWeight: "600",
                          marginY: 1,
                        }}
                      >
                        Select other facilities/services
                      </Typography>
                      <Select
                        fullWidth
                        value={userData.facility}
                        onChange={(e) => userData(e, "rate")}
                        displayEmpty
                        renderValue={() =>
                          userData.facility !== ""
                            ? userData.facility
                            : "Select other facilities/services"
                        }
                        sx={{
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
                        {Facilities.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
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

export default WareHousePage;
