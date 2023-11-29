import React, { useState } from "react";
import OnBoardNavBar from "../../components/OnBoardNavBar";
import { Box, Typography, Grid, Button } from "@mui/material";
import { MdInfo, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { ReactComponent as Individual } from "../../svgs/individual.svg";
import { ReactComponent as Business } from "../../svgs/Business.svg";
import { ReactComponent as Service } from "../../svgs/AddService.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const ServiceRoles = [
  {
    className: "individualDriver",
    icon: <Individual />,
    title: "I operate individually",
    desc: "I am a Individual driver (non business owner)",
  },
  {
    className: "RoadFrieght",
    icon: <Business />,
    title: "Business service provider",
    desc: "Airfreight, Roadfreight, Railfreight, Seafreight, and 4PL - 4th Party Logistic",
  },
  {
    className: "CustomBroker",
    icon: <Service />,
    title: "Additional services",
    desc: (
      <>
        Insurance and Customs <br />
        brokerage
      </>
    ),
  },
];

const ServiceProviderRole = () => {
  const theme = useTheme();
  const [selectedRole, setSelectedRole] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setDisabled(!role);
  };

  const handleNavigate = () => {
    if (selectedRole === "individualDriver") {
      navigate("/signup/individualDriver/indDriverAccount");
    } else if (selectedRole === "RoadFrieght") {
      navigate("/signup/RoadFrieght/RoadFrieghtAccount");
    } else if (selectedRole === "CustomBroker") {
      navigate("/signup/cutomBroker/customBrokerAccount");
    }
  };

  return (
    <>
      <OnBoardNavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          paddingTop: {
            lg: "100px",
            md: "120px",
            sm: "120px",
            xs: "120px",
          },
          alignItems: "center",
          backgroundColor: "#e5e5e5",
        }}
      >
        <Grid container sx={{ marginX: 2, justifyContent: "center" }}>
          <Grid item xs={12} sm={8} md={6}>
            <Box>
              <Box>
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
                  I want to become a CarryMatch service provider
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "17px",
                      md: "17px",
                      sm: "15px",
                      xs: "15px",
                    },
                    color: `${theme.palette.accent.main}`,
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontWeight: "500",
                  }}
                >
                  Please select the service offering below that best describes
                  the services you can offer to the customers of the platform
                </Typography>
              </Box>
              <Box
                sx={{
                  minHeight: "calc(100vh - 180px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    marginY={2}
                    sx={{
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "18px",
                        xs: "18px",
                      },
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontWeight: "600",
                    }}
                  >
                    Select role
                  </Typography>
                  <Grid container spacing={2} marginBottom={2}>
                    {ServiceRoles.map((role, i) => {
                      return (
                        <Grid item xs={12} sm={12} md={6} lg={4} key={i}>
                          <Box
                            className={
                              selectedRole === `${role.className}`
                                ? "selected"
                                : ""
                            }
                            bgcolor={`${theme.palette.primary.light}`}
                            color={theme.palette.primary.main}
                            padding={3}
                            sx={{
                              height: "280px",
                              border: `2px solid ${theme.palette.secondary.main}`,
                              cursor: "pointer",
                              "&:hover": {
                                border: `4px solid ${theme.palette.secondary.main}`,
                              },
                              [`&.selected`]: {
                                border: `4px solid ${theme.palette.secondary.main}`,
                              },
                            }}
                            onClick={() =>
                              handleRoleSelection(`${role.className}`)
                            }
                          >
                            <Tooltip
                              placement="bottom-start"
                              title="As I private individual I offer my services to carry out jobs for freight forwarding business or customers directly. I do not own a (logistics) business."
                            >
                              <Box textAlign={"end"} fontSize={"24px"}>
                                <MdInfo />
                              </Box>
                            </Tooltip>
                            <Box sx={{ textAlign: "center" }}>
                              {role.icon}
                              <Typography
                                sx={{
                                  fontFamily: `${theme.typography.secondaryFontFamily}`,
                                  fontWeight: "600",
                                  fontSize: {
                                    lg: "18px",
                                    md: "18px",
                                    sm: "16px",
                                    xs: "16px",
                                  },
                                  fontStyle: "normal",
                                  lineHeight: "normal",
                                  marginY: 1,
                                }}
                              >
                                {role.title}
                              </Typography>
                              <Typography
                                sx={{
                                  fontFamily: `${theme.typography.secondaryFontFamily}`,
                                  color: `${theme.palette.secondary.main}`,
                                  fontWeight: "400",
                                  fontSize: {
                                    lg: "16px",
                                    md: "16px",
                                    sm: "14px",
                                    xs: "14px",
                                  },
                                  fontStyle: "normal",
                                  lineHeight: "normal",
                                }}
                              >
                                {role.desc}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
                <Box display={"flex"} gap={2} justifyContent={"end"}>
                  <Button variant="light" onClick={() => navigate("/signup")}>
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
                    disabled={!selectedRole}
                    onClick={handleNavigate}
                  >
                    Next
                    <MdArrowForwardIos
                      sx={{ marginLeft: 1, fontSize: "14px" }}
                    />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ServiceProviderRole;
