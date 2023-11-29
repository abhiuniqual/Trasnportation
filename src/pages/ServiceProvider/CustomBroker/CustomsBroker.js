import React, { useState } from "react";
import OnBoardNavBar from "../../../components/OnBoardNavBar";
import {
  Box,
  Button,
  Typography,
  Grid,
  Select,
  MenuItem,
  LinearProgress,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { MdInfo } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const serviceTypes = [
  "import",
  "Export",
  "Bonded transit",
  "Import & Export",
  "Import + bonded Transit",
  "Export & Bonded transit",
  "All services (import, export, bonded transit)",
];
const DateZone = ["AM", "PM"];
const TimeZone = [];

const CustomsBroker = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [state, setState] = useState({
    service: "",
    dateZone: "",
    timeZone: "",
  });

  const [selectedFile, setSelectedFile] = useState("");
  const supportedImageTypes = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/heic",
  ];

  const handleFileInput = (e) => {
    const file = e.target.files[0];

    if (file) {
      const fileName = file.name;
      const fileType = file.type;

      if (supportedImageTypes.includes(fileType)) {
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedFile({
            fileName: fileName,
            isImage: true,
            imageUrl: event.target.result,
          });
        };
        reader.readAsDataURL(file);
      } else if (fileType === "application/pdf") {
        setSelectedFile({
          fileName: fileName,
          isImage: false,
          pdfUrl: URL.createObjectURL(file),
        });
      } else {
        alert(
          "Unsupported file format. Please select an image (PNG, JPG, HEIC) or PDF file."
        );
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
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
                    navigate("/signup/cutomBroker/customs-Broker2")
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
                Please add your company details in the fields below
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">
                Add your company information
              </Typography>
              <LinearProgress value={85} variant="determinate" />
            </Box>
            <Box>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "calc(100vh - 150px)",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 2,
                  }}
                >
                  <Box width={"60%"}>
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
                      What customs brokerage services do you offer?
                    </Typography>
                    <Select
                      fullWidth
                      name="service"
                      value={state.service}
                      displayEmpty
                      onChange={handleChange}
                      renderValue={() =>
                        state.service !== ""
                          ? state.service
                          : "Select types of insurance coverage you offer"
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
                      {serviceTypes.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box sx={{ marginY: 3 }}>
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
                      What are your general hours of operation
                    </Typography>
                    <Box sx={{ display: "flex", width: "100%", gap: 2 }}>
                      <Box
                        sx={{
                          width: "20%",
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
                          value={state.dateZone}
                          displayEmpty
                          onChange={handleChange}
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
                          width: "20%",
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
                          value={state.dateZone}
                          displayEmpty
                          onChange={handleChange}
                          //   renderValue={() =>
                          //     state.timezone !== "" ? state.timezone : "AM"
                          //   }
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
                      <Box sx={{ width: "60%" }}>
                        <Select
                          fullWidth
                          name="timeZone"
                          value={state.timeZone}
                          displayEmpty
                          onChange={handleChange}
                          renderValue={() =>
                            state.timeZone !== ""
                              ? state.timeZone
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
                  </Box>
                  <Box
                    onClick={() => document.getElementById("fileInput").click()}
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
                    <Tooltip
                      placement="bottom-end"
                      title="When registering as a customer you can use the platform to outsource your logistics and be connected to service providers who will take the burden of logistics out of your hands."
                    >
                      <Box
                        sx={{
                          textAlign: "end",
                          color: `${theme.palette.secondary.main}`,
                          fontSize: "20px",
                        }}
                      >
                        <MdInfo />
                      </Box>
                    </Tooltip>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      id="fileInput"
                      accept="image/jpg, image/png, image/heic, pdf"
                      onChange={handleFileInput}
                    />
                    {selectedFile ? (
                      <Box sx={{ textAlign: "center" }}>
                        {selectedFile.isImage ? (
                          <img
                            id="remove"
                            src={selectedFile.imageUrl}
                            alt={selectedFile.fileName}
                            style={{ height: "250px", width: "250px" }}
                          />
                        ) : (
                          <iframe
                            title="remove"
                            id="remove"
                            src={selectedFile.pdfUrl}
                            style={{ height: "auto" }}
                          />
                        )}
                      </Box>
                    ) : (
                      <>
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
                      </>
                    )}
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
                    onClick={() => navigate("/signup/cutomBroker/companyInfo2")}
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
                      navigate("/signup/cutomBroker/customs-Broker2")
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

export default CustomsBroker;
