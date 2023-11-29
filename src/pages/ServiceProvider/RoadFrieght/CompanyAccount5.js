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

const Types = [
  "Airfreight",
  "Railway operator",
  "Road Freight",
  "Sea Freight",
  "Warehouse",
  "4PL - Fourth Party Logistics",
];

const CompanyAccount5 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [selectedType, setselectedType] = useState("");

  const handleBusinessType = (e) => {
    setselectedType(e.target.value);
    setDisabled(!disabled);
  };

  const handleNavigate = () => {
    console.log();
    if (selectedType === "Airfreight") {
      navigate("/signup/RoadFrieght/Airfreight");
    } else if (selectedType === "Railway operator") {
      navigate("/signup/RoadFrieght/Railway-operator");
    } else if (selectedType === "Road Freight") {
      navigate("/signup/RoadFrieght/Road-Freight");
    } else if (selectedType === "Sea Freight") {
      navigate("/signup/RoadFrieght/Sea-Freight");
    } else if (selectedType === "Warehouse") {
      navigate("/signup/RoadFrieght/Warehouse");
    } else if (selectedType === "4PL - Fourth Party Logistics") {
      navigate("/signup/RoadFrieght/4PL");
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
                Create your account
              </Typography>
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
                      value={selectedType}
                      displayEmpty
                      onChange={handleBusinessType}
                      renderValue={() =>
                        selectedType !== ""
                          ? selectedType
                          : "Select business type"
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
                      {Types.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
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
                      navigate("/signup/RoadFrieght/companyAccount4")
                    }
                  >
                    <MdArrowBackIos sx={{ marginRight: 1, fontSize: "14px" }} />
                    Back
                  </Button>
                  <Button
                    variant="dark"
                    onClick={handleNavigate}
                    sx={{
                      backgroundColor: disabled
                        ? "#ccc"
                        : `${theme.palette.primary.main}`,
                    }}
                    disabled={!selectedType}
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

export default CompanyAccount5;
