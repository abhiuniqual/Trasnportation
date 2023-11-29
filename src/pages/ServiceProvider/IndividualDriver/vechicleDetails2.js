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
  Modal,
  TextField,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const services = [
  "Looking for jobs directly",
  "Offering my services as subcontractor as well",
  "Both",
];
const TimeZone = [];
const Cities = [];

const Days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const days = ["S", "M", "T", "W", "T", "F", "S"];

const VechicleDetails2 = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(true);
  const [service, setService] = useState("");
  const [field, setField] = useState({
    timeZone: "",
    city: "",
  });

  const [modal, setModal] = useState(false);
  const [value, setValue] = useState("Open 24 hours");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [timeSlots, setTimeSlots] = useState([
    [{ open: "", close: "" }],
    [{ open: "", close: "" }],
    [{ open: "", close: "" }],
    [{ open: "", close: "" }],
    [{ open: "", close: "" }],
    [{ open: "", close: "" }],
    [{ open: "", close: "" }],
  ]);

  const handleOnSave = async (times, selectedDay) => {
    const selectedTimeSlots = [...timeSlots];
    (await selectedDay) &&
      (await selectedDay.length) > 0 &&
      (await selectedDay.map((day) => {
        selectedTimeSlots[day] = [...times];
      }));
    setTimeSlots(selectedTimeSlots);
    setModal(false);
  };

  const handleDayClick = (index) => {
    setSelectedDayIndex(index);
    setModal(true);
  };

  const handleService = (e) => {
    setService(e.target.value);
    setDisabled(!disabled);
  };
  const handleClose = () => {
    setModal(!modal);
  };

  const initialTime = timeSlots[selectedDayIndex];

  const [times, setTimes] = useState([initialTime]);
  const [selectedDay, setSelectedDay] = useState([selectedDayIndex]);

  const handleAddClick = () => {
    setTimes([...times, { open: "", close: "" }]);
  };

  const handleRemoveClick = (index) => {
    const updatedTimes = [...times];
    updatedTimes.splice(index, 1);
    setTimes(updatedTimes);
  };

  const handleDaysClick = (index) => {
    setSelectedDay((prevSelectedDay) => {
      if (prevSelectedDay.includes(index)) {
        return prevSelectedDay.filter((day) => day !== index);
      } else {
        return [...prevSelectedDay, index];
      }
    });
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
                  <Box width={"100%"}>
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
                        marginBottom: 2,
                      }}
                    >
                      Would like to offer my services as follows
                    </Typography>
                    <Select
                      fullWidth
                      value={service}
                      displayEmpty
                      onChange={handleService}
                      renderValue={() => (service !== "" ? service : "Select")}
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
                      {services.map((menuItem, index) => (
                        <MenuItem key={index} value={menuItem}>
                          {menuItem}
                        </MenuItem>
                      ))}
                    </Select>
                  </Box>
                  {service !== "Looking for jobs directly" && (
                    <Box>
                      <Box marginY={3}>
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
                            marginBottom: 1,
                          }}
                        >
                          Select your availability
                        </Typography>
                        {Days.map((day, index) => (
                          <Box
                            sx={{
                              width: {
                                md: "50%",
                                xs: "100%",
                              },
                              display: "flex",
                              justifyContent: "space-between",
                              gap: 2,
                              marginBottom: 1,
                            }}
                            key={index}
                          >
                            <Typography
                              sx={{
                                fontSize: "18px",
                                fontWeight: "500",
                                fontFamily: theme.typography.fontFamily,
                              }}
                            >
                              {day}
                            </Typography>
                            <Typography
                              sx={{
                                cursor: "pointer",
                                display: "flex",
                                flexDirection: "column",
                                fontSize: "18px",
                                fontWeight: "500",
                                fontFamily: theme.typography.fontFamily,
                                color: theme.palette.accent.main,
                              }}
                              className="cursor-pointer flex flex-col"
                              onClick={() => handleDayClick(index)}
                            >
                              {timeSlots[index].map((slot, idx) => (
                                <>
                                  {slot?.open && slot?.close ? (
                                    <span
                                      key={idx}
                                      style={{
                                        cursor: "pointer",
                                        display: "flex",
                                        flexDirection: "column",
                                        fontSize: "18px",
                                        fontWeight: "500",
                                        fontFamily: theme.typography.fontFamily,
                                        color: theme.palette.accent.main,
                                      }}
                                    >
                                      {slot.open} - {slot.close}
                                    </span>
                                  ) : (
                                    <Typography
                                      sx={{
                                        cursor: "pointer",
                                        display: "flex",
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        fontFamily: theme.typography.fontFamily,
                                        color: theme.palette.accent.main,
                                        gap: 1,
                                        alignItems: "center",
                                      }}
                                    >
                                      Select start and end time <BiEditAlt />
                                    </Typography>
                                  )}
                                </>
                              ))}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                      <Box marginBottom={3}>
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
                            marginBottom: 2,
                          }}
                        >
                          Select time zone
                        </Typography>
                        <Select
                          displayEmpty
                          renderValue={() =>
                            field.timeZone !== ""
                              ? field.timeZone
                              : "Select time zone"
                          }
                          sx={{
                            width: {
                              md: "50%",
                              xs: "100%",
                            },
                            backgroundColor: theme.palette.primary.light,
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
                            marginBottom: 2,
                          }}
                        >
                          Select service coverage area
                        </Typography>
                        <Select
                          displayEmpty
                          renderValue={() =>
                            field.city !== "" ? field.city : "Select area"
                          }
                          sx={{
                            width: {
                              md: "50%",
                              xs: "100%",
                            },
                            backgroundColor: theme.palette.primary.light,
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
                          {Cities.map((menuItem, index) => (
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
                    onCick={() => navigate("/signup/non-owner/createAccount2")}
                  >
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
      <Modal
        open={modal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ outline: "none", border: "none" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: theme.palette.primary.light,
            p: 4,
          }}
        >
          <Typography
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: "600",
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            Select days & time
          </Typography>
          <Box sx={{ display: "flex", gap: 2 }}>
            {days.map((day, index) => (
              <Typography
                key={index}
                sx={{
                  paddingY: 1,
                  paddingX: 2,
                  marginY: 2,
                  cursor: "pointer",
                  fontWeight: "500",
                  fontFamily: theme.typography.fontFamily,
                  fontSize: "24px",
                  backgroundColor: selectedDay.includes(index)
                    ? theme.palette.secondary.main
                    : "rgba(20, 20, 20, 0.20)",
                  color: theme.palette.primary.main,
                }}
                onClick={() => handleDaysClick(index)}
              >
                {days[index]}
              </Typography>
            ))}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <Box sx={{ display: "flex" }}>
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontFamily: theme.typography.fontFamily,
                        fontSize: {
                          md: "18px",
                          xs: "16px",
                        },
                        fontWeight: "500",
                      },
                    }}
                    value="Open 24 hours"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: `${theme.palette.secondary.main}`,
                          },
                        }}
                      />
                    }
                    label="Open 24 hours"
                  />
                  <FormControlLabel
                    sx={{
                      "& .MuiFormControlLabel-label": {
                        fontFamily: theme.typography.fontFamily,
                        fontSize: {
                          md: "18px",
                          xs: "16px",
                        },
                        fontWeight: "500",
                      },
                    }}
                    value="Closed"
                    control={
                      <Radio
                        sx={{
                          "&.Mui-checked": {
                            color: `${theme.palette.secondary.main}`,
                          },
                        }}
                      />
                    }
                    label="Closed"
                  />
                </Box>
              </RadioGroup>
            </FormControl>
          </Box>
          {times.map((time, index) => (
            <Box sx={{ display: "flex", flexDirection: "column" }} key={index}>
              <Box sx={{ display: "flex", marginY: 1, gap: 2 }}>
                <TextField
                  type="time"
                  sx={{
                    width: "50%",
                  }}
                  value={time.open}
                  onChange={(e) => {
                    const updatedTimes = [...times];
                    Object.assign(updatedTimes[index], {
                      open: e.target.value,
                    });
                    // updatedTimes[index].open = e.target.value;
                    setTimes(updatedTimes);
                  }}
                />
                <TextField
                  type="time"
                  sx={{
                    width: "50%",
                  }}
                  value={time.close}
                  onChange={(e) => {
                    const updatedTimes = [...times];
                    Object.assign(updatedTimes[index], {
                      close: e.target.value,
                    });
                    // updatedTimes[index].close = e.target.value;
                    setTimes(updatedTimes);
                  }}
                />
              </Box>
              {index > 0 && (
                <Typography
                  sx={{
                    marginY: 2,
                    cursor: "pointer",
                    color: theme.palette.secondary.main,
                    fontSize: "16px",
                    fontFamily: theme.typography.fontFamily,
                    fontWeight: "500",
                  }}
                  onClick={() => handleRemoveClick(index)}
                >
                  Remove
                </Typography>
              )}
            </Box>
          ))}
          <Typography
            sx={{
              marginY: 2,
              cursor: "pointer",
              color: theme.palette.secondary.main,
              fontSize: "16px",
              fontFamily: theme.typography.fontFamily,
              fontWeight: "500",
            }}
            onClick={handleAddClick}
          >
            Add hours
          </Typography>
          <Box
            sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
          >
            <Button
              sx={{
                width: "50%",
                padding: "12px 62px",
                backgroundColor: "rgba(20, 20, 20, 0.2)",
                color: theme.palette.primary.main,
                borderRadius: 0,
                fontFamily: theme.typography.fontFamily,
                fontSize: "18px",
                textTransform: "capitalize",
              }}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              sx={{
                width: "50%",
                padding: "12px 62px",
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.primary.light,
                borderRadius: 0,
                fontSize: "18px",
                textTransform: "capitalize",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
              onClick={() => handleOnSave(times, selectedDay)}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default VechicleDetails2;
