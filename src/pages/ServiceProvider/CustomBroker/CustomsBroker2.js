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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { MdInfo } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const serviceAreas = ["Import", "export", " bonded transit", "all"];

const CustomsBroker2 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [serviceArea, setServiceArea] = useState("");
  const handleServiceArea = (e) => {
    setServiceArea(e.target.value);
  };

  const [files, setFiles] = useState({
    import: "",
    export: "",
    bounded: "",
  });

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
                <Typography variant="skip" sx={{ paddingBottom: "5px" }}>
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
              <LinearProgress value={100} variant="determinate" />
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
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "17px",
                        md: "17px",
                        sm: "15px",
                        xs: "15px",
                      },
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontWeight: "600",
                      marginBottom: 2,
                    }}
                  >
                    Tell us about Service 1
                  </Typography>
                  <Box width={"50%"}>
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
                        paddingBottom: "5px",
                      }}
                    >
                      Please add your service coverage area
                    </Typography>
                    <Select
                      fullWidth
                      value={serviceArea}
                      displayEmpty
                      onChange={handleServiceArea}
                      renderValue={() =>
                        serviceArea !== "" ? serviceArea : "Select"
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
                      {serviceAreas.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box
                    sx={{ display: "flex", gap: 2, width: "100%", marginY: 3 }}
                  >
                    <Box
                      onClick={() =>
                        document.getElementById("fileInputImport").click()
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
                        id="fileInputImport"
                        accept="image/jpg, image/png, image/heic, application/pdf"
                        onChange={(e) => {
                          setFiles({
                            import: e.target.files[0],
                            export: files.export,
                            bounded: files.bounded,
                          });
                        }}
                      />
                      {files.import ? (
                        <Box sx={{ textAlign: "center" }}>
                          {files.import.type === "application/pdf" ? (
                            <iframe
                              id="remove"
                              src={URL.createObjectURL(files.import)}
                              style={{ height: "auto" }}
                            />
                          ) : (
                            <img
                              id="remove"
                              src={URL.createObjectURL(files.import)}
                              alt="import image"
                              style={{ height: "250px", width: "250px" }}
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
                              Please upload your power of <br /> attorney for
                              Import
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
                        document.getElementById("fileInputExport").click()
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
                        id="fileInputExport"
                        accept="image/jpg, image/png, image/heic, application/pdf"
                        onChange={(e) => {
                          setFiles({
                            import: files.import,
                            export: e.target.files[0],
                            bounded: files.bounded,
                          });
                        }}
                      />
                      {files.export ? (
                        <Box sx={{ textAlign: "center" }}>
                          {files.export.type === "application/pdf" ? (
                            <iframe
                              id="remove"
                              src={URL.createObjectURL(files.export)}
                              style={{ height: "auto" }}
                            />
                          ) : (
                            <img
                              id="remove"
                              src={URL.createObjectURL(files.export)}
                              alt="import image"
                              style={{ height: "250px", width: "250px" }}
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
                              Please upload your power of
                              <br /> attorney for Export
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
                    onClick={() =>
                      document.getElementById("fileInputBounded").click()
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
                      id="fileInputBounded"
                      accept="image/jpg, image/png, image/heic, application/pdf"
                      onChange={(e) => {
                        setFiles({
                          import: files.import,
                          export: files.export,
                          bounded: e.target.files[0],
                        });
                      }}
                    />
                    {files.bounded ? (
                      <Box sx={{ textAlign: "center" }}>
                        {files.bounded.type === "application/pdf" ? (
                          <iframe
                            id="remove"
                            src={URL.createObjectURL(files.bounded)}
                            style={{ height: "auto" }}
                          />
                        ) : (
                          <img
                            id="remove"
                            src={URL.createObjectURL(files.bounded)}
                            alt="import image"
                            style={{ height: "250px", width: "250px" }}
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
                            Upload other documents that need to
                            <br /> be filled out by the customer.
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
                    onClick={() => navigate("/signup/non-owner/createAccount2")}
                  >
                    <MdArrowBackIos sx={{ marginRight: 1, fontSize: "14px" }} />
                    Back
                  </Button>
                  <Button
                    variant="dark"
                    sx={{
                      backgroundColor: `${theme.palette.primary.main}`,
                    }}
                  >
                    Create
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

export default CustomsBroker2;
