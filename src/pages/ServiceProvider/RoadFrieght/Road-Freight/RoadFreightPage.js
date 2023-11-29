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
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Areas = [];
const Fleets = [];
const Subcontractors = [];
const Services = [];

const RoadFreightPage = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("Yes");
  const [service, setService] = useState("Own Fleet");
  const [userData, setUserData] = useState({
    from: "",
    to: "",
    fleet: "",
    subcontractor: "",
    coverageArea: "",
  });

  const handleUserData = (e, name) => {
    setUserData({ ...userData, [name]: e.target.value });
  };

  const handleValue = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSeviceOffer = (e) => {
    setService(e.target.value);
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
                    Tell us about Road freight details
                  </Typography>
                  <Box marginY={1}>
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
                      Which road freight services do you offer?
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
                        Consolidation
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
                        Direct/dedicated drives
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
                          fontWeight: "600",
                        }}
                      >
                        Both
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
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
                      {selectedValue === "Yes"
                        ? "Consolidated"
                        : selectedValue === "No"
                        ? "Direct/dedicated drives"
                        : "Consolidated and Direct/dedicated drives"}{" "}
                      road freight services are offered through using?
                    </Typography>
                    <Box>
                      <Radio
                        checked={service === "Own Fleet"}
                        onChange={handleSeviceOffer}
                        value="Own Fleet"
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
                        Own Fleet
                      </Typography>
                      <Radio
                        checked={service === "Subcontractors"}
                        onChange={handleSeviceOffer}
                        value="Subcontractors"
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
                        Subcontractors
                      </Typography>
                      <Radio
                        checked={service === "Both1"}
                        onChange={handleSeviceOffer}
                        value="Both1"
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
                        Both
                      </Typography>
                    </Box>
                  </Box>
                  {service === "Own Fleet" && (
                    <Box>
                      <Box marginBottom={2}>
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
                          Please provide details on your own fleet and check the
                          vehicles you offer
                        </Typography>
                        <Select
                          value={userData.fleet}
                          onChange={(e) => handleUserData(e, "fleet")}
                          displayEmpty
                          renderValue={() =>
                            userData.fleet !== ""
                              ? userData.fleet
                              : "Select trucks for own fleet"
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
                          {Fleets.map((menuItem, index) => (
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
                          Select service coverage area
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
                          {Areas.map((menuItem, index) => (
                            <MenuItem key={index} value={menuItem}>
                              {menuItem}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Box>
                  )}
                  {service === "Subcontractors" && (
                    <Box>
                      <Box marginBottom={2}>
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
                          Please provide details on your Subcontractors and
                          check the vehicles you offer
                        </Typography>
                        <Select
                          value={userData.subcontractor}
                          onChange={(e) => handleUserData(e, "subcontractor")}
                          displayEmpty
                          renderValue={() =>
                            userData.subcontractor !== ""
                              ? userData.subcontractor
                              : "Select trucks for own fleet"
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
                          {Subcontractors.map((menuItem, index) => (
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
                          Select service coverage area
                        </Typography>
                        <Box sx={{ gap: 2, display: "flex", marginBottom: 2 }}>
                          <Select
                            value={userData.from}
                            onChange={(e) => handleUserData(e, "from")}
                            displayEmpty
                            renderValue={() =>
                              userData.from !== "" ? userData.from : "From"
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
                          <Select
                            value={userData.to}
                            onChange={(e) => handleUserData(e, "to")}
                            displayEmpty
                            renderValue={() =>
                              userData.to !== "" ? userData.to : "To"
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
                      </Box>
                    </Box>
                  )}
                  {service === "Both1" && (
                    <Box>
                      <Box marginBottom={2}>
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
                          Please provide details on your own fleet and
                          subcontractor and check the vehicles you offer
                        </Typography>
                        <Box sx={{ gap: 2, display: "flex", marginBottom: 2 }}>
                          <Select
                            value={userData.fleet}
                            onChange={(e) => handleUserData(e, "fleet")}
                            displayEmpty
                            renderValue={() =>
                              userData.fleet !== ""
                                ? userData.fleet
                                : "Select trucks for own fleet"
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
                            {Fleets.map((menuItem, index) => (
                              <MenuItem key={index} value={menuItem}>
                                {menuItem}
                              </MenuItem>
                            ))}
                          </Select>
                          <Select
                            value={userData.subcontractor}
                            onChange={(e) => handleUserData(e, "subcontractor")}
                            displayEmpty
                            renderValue={() =>
                              userData.subcontractor !== ""
                                ? userData.subcontractor
                                : "Select trucks for subcontract"
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
                          Select service coverage area
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
                          {Areas.map((menuItem, index) => (
                            <MenuItem key={index} value={menuItem}>
                              {menuItem}
                            </MenuItem>
                          ))}
                        </Select>
                      </Box>
                    </Box>
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
                    Done
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

export default RoadFreightPage;
