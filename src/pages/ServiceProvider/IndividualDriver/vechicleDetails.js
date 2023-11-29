import React, { useState } from "react";
import OnBoardNavBar from "../../../components/OnBoardNavBar";
import {
  Box,
  Button,
  Typography,
  Grid,
  LinearProgress,
  Radio,
  Select,
  MenuItem,
  TextField,
  Tooltip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos, MdInfo } from "react-icons/md";
import { FiUpload, FiPlus } from "react-icons/fi";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const vechicles = ["Bike", "Car", "Bus", "Truck"];
const Years = [];

const VechicleDetails = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("No");
  const [field, setField] = useState([
    {
      vechicleType: "",
      regYears: "",
      GPSTrack: "No",
      file: "",
    },
  ]);

  const handleRegYears = (event) => {
    const updatedField = [...field];
    updatedField[0].regYears = event.target.value;
    setField(updatedField);
  };

  const handleVechicleType = (event) => {
    const updatedField = [...field];
    updatedField[0].vechicleType = event.target.value;
    setField(updatedField);
  };
  const handleGPSTrack = (event) => {
    const updatedField = [...field];
    updatedField[0].GPSTrack = event.target.value;
    setField(updatedField);
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleAddField = () => {
    setField([
      ...field,
      {
        vechicleType: "",
        regYears: "",
        GPSTrack: "No",
        file: "",
      },
    ]);
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
                Please add your vehicle information
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">
                Add your vehicle information
              </Typography>
              <LinearProgress value={80} variant="determinate" />
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
                <Box width={"50%"}>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "17px",
                          md: "17px",
                          sm: "16px",
                          xs: "16px",
                        },
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontWeight: "600",
                      }}
                    >
                      Do you have a vehicle?
                    </Typography>
                    <Box>
                      <Radio
                        checked={selectedValue === "Yes"}
                        onChange={handleChange}
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
                          fontWeight: "500",
                        }}
                      >
                        Yes
                      </Typography>
                      <Radio
                        checked={selectedValue === "No"}
                        onChange={handleChange}
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
                </Box>
                {selectedValue === "Yes" &&
                  field.map((set, i) => {
                    return (
                      <Box
                        key={i}
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          marginBottom: 2,
                        }}
                      >
                        <Box marginTop={2}>
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
                              value={field[i].vechicleType}
                              onChange={handleVechicleType}
                              displayEmpty
                              renderValue={() =>
                                field[i].vechicleType !== ""
                                  ? field[i].vechicleType
                                  : "Select vechicle"
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
                              {vechicles.map((menuItem, index) => (
                                <MenuItem key={index} value={menuItem}>
                                  {menuItem}
                                </MenuItem>
                              ))}
                            </Select>
                            <TextField
                              type="text"
                              placeholder="Vehicle brand"
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
                              gap: 2,
                              display: "flex",
                              flexDirection: {
                                md: "row",
                                xs: "column",
                              },
                              marginY: 3,
                            }}
                            width={"100%"}
                          >
                            <TextField
                              type="text"
                              placeholder="Vehicle Modal"
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
                            <Select
                              value={field[i].regYears}
                              onChange={handleRegYears}
                              displayEmpty
                              renderValue={() =>
                                field[i].regYears !== ""
                                  ? field[i].regYears
                                  : "Select years of registration"
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
                              {Years.map((menuItem, index) => (
                                <MenuItem key={index} value={menuItem}>
                                  {menuItem}
                                </MenuItem>
                              ))}
                            </Select>
                          </Box>
                          <TextField
                            type="number"
                            placeholder="Vehicle's license plate number"
                            sx={{
                              width: {
                                md: "49%",
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
                          <Box
                            sx={{
                              width: {
                                md: "50%",
                                xs: "100%",
                              },
                            }}
                            marginY={3}
                          >
                            <Typography
                              sx={{
                                fontSize: {
                                  lg: "17px",
                                  md: "17px",
                                  sm: "16px",
                                  xs: "16px",
                                },
                                fontFamily: `${theme.typography.fontFamily}`,
                                fontWeight: "600",
                                paddingBottom: "5px",
                              }}
                            >
                              Vehicle's loading space or capacity (m)
                            </Typography>
                            <Box display={"flex"} gap={2}>
                              {["L", "W", "H"].map((menu, i) => {
                                return (
                                  <Typography
                                    key={i}
                                    sx={{
                                      cursor: "pointer",
                                      backgroundColor: `${theme.palette.primary.light}`,
                                      color: `${theme.palette.accent.main}`,
                                      fontSize: {
                                        lg: "17px",
                                        md: "17px",
                                        sm: "16px",
                                        xs: "16px",
                                      },
                                      fontFamily: `${theme.typography.fontFamily}`,
                                      padding: "16px 46px",
                                    }}
                                  >
                                    {menu}
                                  </Typography>
                                );
                              })}
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              width: {
                                md: "50%",
                                xs: "100%",
                              },
                            }}
                            marginBottom={3}
                          >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <Typography
                                sx={{
                                  fontSize: {
                                    lg: "17px",
                                    md: "17px",
                                    sm: "16px",
                                    xs: "16px",
                                  },
                                  fontFamily: `${theme.typography.fontFamily}`,
                                  fontWeight: "600",
                                  paddingBottom: "5px",
                                }}
                              >
                                Upload your vehicle photos
                              </Typography>
                              <Tooltip title="When registering as a customer you can use the platform to outsource your logistics and be connected to service providers who will take the burden of logistics out of your hands.">
                                <Box
                                  sx={{
                                    color: "#cbab96",
                                    marginLeft: "4px",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                  }}
                                >
                                  <MdInfo />
                                </Box>
                              </Tooltip>
                            </Box>
                            <Box
                              sx={{
                                width: "max-content",
                                cursor: "pointer",
                                backgroundColor: `${theme.palette.primary.light}`,
                                color: `${theme.palette.accent.main}`,
                                fontSize: {
                                  lg: "17px",
                                  md: "17px",
                                  sm: "16px",
                                  xs: "16px",
                                },
                                fontFamily: `${theme.typography.fontFamily}`,
                                paddingX: 4,
                                paddingY: 3,
                              }}
                            >
                              <FiPlus color={theme.palette.secondary.main} />
                            </Box>
                          </Box>
                          <Box marginBottom={2}>
                            <Typography
                              sx={{
                                fontSize: {
                                  lg: "17px",
                                  md: "17px",
                                  sm: "16px",
                                  xs: "16px",
                                },
                                fontFamily: `${theme.typography.fontFamily}`,
                                fontWeight: "600",
                              }}
                            >
                              GPS or other tracking device installed in the
                              vehicle?
                            </Typography>
                            <Box>
                              <Radio
                                checked={field[i].GPSTrack === "Yes"}
                                onChange={handleGPSTrack}
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
                                  fontWeight: "500",
                                }}
                              >
                                Yes
                              </Typography>
                              <Radio
                                checked={field[i].GPSTrack === "No"}
                                onChange={handleGPSTrack}
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
                          <Box
                            onClick={() =>
                              document.getElementById(`fileInput${i}`).click()
                            }
                            sx={{
                              cursor: "pointer",
                              backgroundColor: `${theme.palette.primary.light}`,
                              padding: {
                                lg: 2,
                                md: 2,
                                sm: 1,
                                xs: 1,
                              },
                              border: `1px dashed ${theme.palette.accent.main}`,
                            }}
                          >
                            <input
                              type="file"
                              style={{ display: "none" }}
                              id={`fileInput${i}`}
                              accept="image/jpg, image/png, image/jpeg, image/heic"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                const reader = new FileReader();

                                reader.onload = () => {
                                  const updatedField = [...field];
                                  updatedField[i].file = file;
                                  updatedField[i].imageUrl = reader.result;
                                  setField(updatedField);
                                };
                                reader.readAsDataURL(file);
                              }}
                            />
                            {field[i].imageUrl ? (
                              <Box textAlign={"center"}>
                                <img
                                  src={field[i].imageUrl}
                                  style={{
                                    height: "200px",
                                    width: "250px",
                                  }}
                                />
                              </Box>
                            ) : (
                              <Box
                                sx={{
                                  textAlign: "center",
                                  paddingY: 1,
                                }}
                              >
                                <Box
                                  sx={{
                                    color: `${theme.palette.accent.main}`,
                                    fontSize: "24px",
                                  }}
                                >
                                  <FiUpload />
                                </Box>
                                <Typography
                                  sx={{
                                    fontFamily: `${theme.typography.fontFamily}`,
                                    fontSize: {
                                      lg: "16px",
                                      md: "16px",
                                      sm: "14px",
                                      xs: "14px",
                                    },
                                    color: `${theme.palette.accent.main}`,
                                    fontWeight: "500",
                                    marginBottom: 1,
                                  }}
                                >
                                  Upload your company’s Terms & Conditions
                                </Typography>
                                <Typography
                                  sx={{
                                    fontFamily: `${theme.typography.fontFamily}`,
                                    fontSize: {
                                      lg: "12px",
                                      md: "12px",
                                      sm: "10px",
                                      xs: "10px",
                                    },
                                    color: "red",
                                    fontWeight: "500",
                                  }}
                                >
                                  Support: PDF, JPG, PNG, HEIC
                                </Typography>
                              </Box>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                {selectedValue === "Yes" && (
                  <Button
                    variant="vechicle"
                    sx={{
                      marginY: 2,
                      fontSize: "16px",
                      width: "max-content",
                    }}
                    onClick={handleAddField}
                  >
                    <FiPlus style={{ marginRight: 2 }} />
                    Add another vechicle
                  </Button>
                )}

                <Box
                  display={"flex"}
                  gap={2}
                  justifyContent={"end"}
                  marginBottom={2}
                >
                  <Button
                    variant="light"
                    onCick={() =>
                      navigate("/signup/individualDriver/vechicleDetails")
                    }
                  >
                    <MdArrowBackIos sx={{ marginRight: 1, fontSize: "14px" }} />
                    Back
                  </Button>
                  <Button
                    variant="dark"
                    sx={{
                      backgroundColor: `${theme.palette.primary.main}`,
                    }}
                    onClick={() =>
                      navigate("/signup/individualDriver/vechicleDetails2")
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

export default VechicleDetails;
