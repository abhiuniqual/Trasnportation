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
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useTheme } from "@mui/material/styles";

const Services = [];
const Areas = [];
const CustomAreas = [];
const Partners = [];

const RailwayOperator = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("Import");
  const [userData, setUserData] = useState({
    service: "",
    area: "",
    coverageArea: "",
    carriage: "",
    partner: "",
  });

  const handleUserData = (e, name) => {
    setUserData({ ...userData, [name]: e.target.value });
  };

  const handleValue = (e) => {
    setSelectedValue(e.target.value);
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
              <Typography variant="subtitle">Create your account</Typography>
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
                Please select your service type
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
                    Tell us about railway operator details
                  </Typography>
                  <Box marginY={1}>
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
                        marginBottom: 1,
                      }}
                    >
                      Select services you Offer
                    </Typography>
                    <Select
                      value={userData.service}
                      onChange={(e) => handleUserData(e, "service")}
                      displayEmpty
                      renderValue={() =>
                        userData.service !== ""
                          ? userData.service
                          : "Select services"
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
                      {Services.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
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
                      }}
                    >
                      Do you offer customs clearance services?
                    </Typography>
                    <Box>
                      <Radio
                        checked={selectedValue === "Import"}
                        onChange={handleValue}
                        value="Import"
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
                          fontWeight: "500",
                        }}
                      >
                        Import
                      </Typography>
                      <Radio
                        checked={selectedValue === "Export"}
                        onChange={handleValue}
                        value="Export"
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
                          fontWeight: "500",
                        }}
                      >
                        Export
                      </Typography>
                      <Radio
                        checked={selectedValue === "Both"}
                        onChange={handleValue}
                        value="Both"
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
                          fontWeight: "500",
                        }}
                      >
                        Both
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
                          fontWeight: "500",
                        }}
                      >
                        No
                      </Typography>
                    </Box>
                  </Box>
                  <Box marginY={1}>
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
                        marginBottom: 1,
                      }}
                    >
                      Select areas of customs clearance
                    </Typography>
                    <Select
                      value={userData.area}
                      onChange={(e) => handleUserData(e, "area")}
                      displayEmpty
                      renderValue={() =>
                        userData.area !== "" ? userData.area : "Select area"
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
                      {Areas.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box marginBottom={1}>
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
                        marginBottom: 1,
                      }}
                    >
                      Select sea freight service coverage area
                    </Typography>
                    <Select
                      value={userData.coverageArea}
                      onChange={(e) => handleUserData(e, "coverageArea")}
                      displayEmpty
                      renderValue={() =>
                        userData.coverageArea !== ""
                          ? userData.coverageArea
                          : "Select area"
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
                      {CustomAreas.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box>
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
                        marginBottom: 1,
                      }}
                    >
                      Rail Carriage Expertise
                    </Typography>
                    <Select
                      value={userData.carriage}
                      onChange={(e) => handleUserData(e, "carriage")}
                      displayEmpty
                      renderValue={() =>
                        userData.carriage !== ""
                          ? userData.carriage
                          : "Rail Carriage Expertise "
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
                      {Partners.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box marginY={1}>
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
                        marginBottom: 1,
                      }}
                    >
                      Select your carrier Partners
                    </Typography>
                    <Select
                      value={userData.partner}
                      onChange={(e) => handleUserData(e, "partner")}
                      displayEmpty
                      renderValue={() =>
                        userData.partner !== "" ? userData.partner : "Select "
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
                      {Partners.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Typography
                    sx={{
                      cursor: "pointer",
                      fontSize: {
                        lg: "17px",
                        md: "17px",
                        sm: "14px",
                        xs: "14px",
                      },
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontWeight: "600",
                      color: theme.palette.secondary.main,
                    }}
                  >
                    Upload Insurance coverage here
                  </Typography>
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

export default RailwayOperator;
