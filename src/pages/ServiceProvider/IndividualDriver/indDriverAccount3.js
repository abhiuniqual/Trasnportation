import React, { useState } from "react";
import OnBoardNavBar from "../../../components/OnBoardNavBar";
import {
  Box,
  Button,
  Typography,
  TextField,
  Grid,
  LinearProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { useTheme } from "@mui/material/styles";

const IndDriverAccount3 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [files, setFiles] = useState({
    front: "",
    back: "",
  });
  const [dob, setDob] = useState(false);
  const [expiry, setExpiry] = useState("");
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
                  marginBottom: 2,
                }}
              >
                Please add the required sign-up information in the fields below.
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle1">
                Add your License information
              </Typography>
              <LinearProgress value={60} variant="determinate" />
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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        lg: "row",
                        md: "row",
                        sm: "column",
                        xs: "column",
                      },
                      gap: {
                        md: 2,
                        xs: 3,
                      },
                    }}
                    width={"100%"}
                  >
                    <TextField
                      type="text"
                      placeholder="First Name"
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
                    <TextField
                      type="text"
                      placeholder="Last Name"
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
                      display: "flex",
                      flexDirection: {
                        lg: "row",
                        md: "row",
                        sm: "column",
                        xs: "column",
                      },
                      gap: {
                        md: 2,
                        xs: 3,
                      },
                      marginTop: 3,
                    }}
                    width={"100%"}
                  >
                    <TextField
                      onFocus={() => setExpiry(true)}
                      type={expiry ? `date` : `text`}
                      placeholder="Date of Birth"
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
                    <TextField
                      onFocus={() => setDob(true)}
                      type={dob ? `date` : `text`}
                      placeholder="Expiry date"
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
                  <TextField
                    type="number"
                    placeholder="Enter your drivers license number"
                    sx={{
                      marginY: 3,
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
                  <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
                    <Box
                      onClick={() =>
                        document.getElementById("fileFront").click()
                      }
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
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
                        id="fileFront"
                        accept="image/jpg, image/png, image/jpeg, image/heic"
                        onChange={(e) => {
                          setFiles({
                            front: e.target.files[0],
                            back: files.back,
                          });
                        }}
                      />
                      {files.front ? (
                        <Box sx={{ textAlign: "center" }}>
                          {files.front ? (
                            <img
                              src={URL.createObjectURL(files.front)}
                              alt="import image"
                              style={{ height: "250px", width: "250px" }}
                            />
                          ) : (
                            ""
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
                              Upload your driving licence’s <br />
                              front side image here
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
                    <Box
                      onClick={() =>
                        document.getElementById("fileBack").click()
                      }
                      sx={{
                        width: {
                          md: "50%",
                          xs: "100%",
                        },
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
                        id="fileBack"
                        accept="image/jpg, image/png, image/jpeg, image/heic"
                        onChange={(e) => {
                          setFiles({
                            front: files.front,
                            back: e.target.files[0],
                          });
                        }}
                      />
                      {files.back ? (
                        <Box sx={{ textAlign: "center" }}>
                          {files.back ? (
                            <img
                              src={URL.createObjectURL(files.back)}
                              alt="import image"
                              style={{ height: "250px", width: "250px" }}
                            />
                          ) : (
                            ""
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
                              Upload your driving licence’s <br />
                              back side image here
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
                      navigate("/signup/individualDriver/indDriverAccount2")
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
                      navigate("/signup/individualDriver/vechicleDetails")
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

export default IndDriverAccount3;
