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

const Services = [];

const Logistics = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("Yes");
  const [service, setService] = useState("");
  const [userData, setUserData] = useState({
    from: "",
    to: "",
    service: "",
  });

  const handleUserData = (e, name) => {
    setUserData({ ...userData, [name]: e.target.value });
  };
  const handleService = (e) => {
    setService(e.target.value);
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="subtitle">
                  {selectedValue === "No"
                    ? "Complete your profile"
                    : "Create your account"}
                </Typography>
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
                {selectedValue === "No"
                  ? "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia there live the blind texts. Separated they livethere live the blind texts."
                  : "Please select your service type"}
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
                    Tell us about 4PL - Fourth Party Logistics details
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
                          lg: "16px",
                          md: "16px",
                          sm: "14px",
                          xs: "14px",
                        },
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontWeight: "600",
                      }}
                    >
                      Do you operate on a worldwide scale?
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
                    <Box width={"50%"}>
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
                          marginY: 1,
                        }}
                      >
                        Select services
                      </Typography>
                      <Select
                        fullWidth
                        value={service}
                        onChange={handleService}
                        displayEmpty
                        renderValue={() =>
                          service !== "" ? service : "Select"
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
                        {Services.map((menuItem, index) => (
                          <MenuItem key={index} value={menuItem}>
                            {menuItem}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  ) : (
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
                          marginY: 1,
                        }}
                      >
                        Select regions/countries where services are offered
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
                          marginY: 1,
                        }}
                      >
                        Select services
                      </Typography>
                      <Select
                        value={userData.service}
                        onChange={(e) => handleUserData(e, "service")}
                        displayEmpty
                        renderValue={() =>
                          userData.service !== "" ? userData.service : "Select"
                        }
                        sx={{
                          width: {
                            md: "49%",
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

export default Logistics;
