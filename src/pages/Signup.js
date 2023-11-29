import React, { useState } from "react";
import OnBoardNavBar from "../components/OnBoardNavBar";
import { Box, Typography, Grid, Button } from "@mui/material";
import { MdInfo, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { ReactComponent as Cutomer } from "../svgs/cutomer.svg";
import { ReactComponent as Service } from "../svgs/service.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const SignupRoles = [
  {
    className: "customer",
    icon: <Cutomer />,
    title: (
      <>
        I want to become a <br /> customer
      </>
    ),
  },
  {
    className: "serviceProvider",
    icon: <Service />,
    title: (
      <>
        I want to become <br /> a service provider
      </>
    ),
  },
];

const Signup = () => {
  const theme = useTheme();
  const [selectedRole, setSelectedRole] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setDisabled(!role);
  };
  const handleNavigate = () => {
    if (selectedRole === "customer") {
      navigate("/signup/customer");
    } else if (selectedRole === "serviceProvider") {
      navigate("/signup/serviceProvider");
    }
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
                }}
              >
                Welcome to the registration page! Please register below as
                Client or Service provider. For more information see the "info"
                symbol.
              </Typography>
              <Box
                sx={{
                  minHeight: "calc(100vh - 300px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    marginY={3}
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
                  <Box marginBottom={2}>
                    <Grid container spacing={4}>
                      {SignupRoles.map((role, i) => {
                        return (
                          <Grid item xs={12} sm={12} md={6} key={i}>
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
                                height: "150px",
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
                                title="When registering as a customer you can use the platform to outsource your logistics and be connected to service providers who will take the burden of logistics out of your hands."
                              >
                                <Box textAlign={"end"} fontSize={"24px"}>
                                  <MdInfo />
                                </Box>
                              </Tooltip>
                              <Box textAlign={"center"}>
                                {role.icon}
                                <Typography
                                  sx={{
                                    color: `${theme.palette.secondary.main}`,
                                    fontFamily: `${theme.typography.secondaryFontFamily}`,
                                    fontWeight: "500",
                                    fontSize: {
                                      lg: "17px",
                                      md: "17px",
                                      sm: "14px",
                                      xs: "14px",
                                    },
                                    lineHeight: "normal",
                                    fontStyle: "normal",
                                  }}
                                >
                                  {role.title}
                                </Typography>
                              </Box>
                            </Box>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </Box>
                </Box>
                <Box
                  display={"flex"}
                  gap={2}
                  justifyContent={"end"}
                  marginBottom={2}
                >
                  <Button variant="light" onClick={() => navigate("/")}>
                    <MdArrowBackIos sx={{ fontSize: "14px", marginRight: 1 }} />
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
                      sx={{ fontSize: "14px", marginLeft: 1 }}
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

export default Signup;
