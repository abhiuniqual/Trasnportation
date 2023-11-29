import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { ReactComponent as Tag } from "../../svgs/tag.svg";
import { ReactComponent as Line } from "../../svgs/line.svg";
import { ReactComponent as Partnership } from "../../svgs/hand.svg";
import { ReactComponent as Warehouse } from "../../svgs/Whouse.svg";
import { ReactComponent as Ship } from "../../svgs/Ship.svg";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

const Track = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        marginRight: {
          lg: 20,
          md: 14,
          sm: 6,
          xs: 2,
        },
        marginLeft: {
          lg: 20,
          md: 10,
          sm: 2,
          xs: 1,
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          backgroundColor: `${theme.palette.primary.light}`,
          display: {
            lg: "flex",
            md: "flex",
            sm: "flex",
            xs: "none",
          },
          width: "100%",
          flexWrap: {
            lg: "nowrap",
            md: "wrap",
            sm: "wrap",
            xs: "wrap",
          },

          flexDirection: {
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          },
          alignItems: "center",
          top: {
            lg: "-80px",
            md: "-160px",
            sm: "-140px",
            xs: "-150px",
          },
          boxShadow: "0 0 21px rgba(0, 0, 0, 0.09)",
        }}
      >
        <Box
          display={"flex"}
          sx={{
            backgroundColor: `${theme.palette.primary.light}`,
            justifyContent: "space-around",
            width: {
              lg: "50%",
              md: "100%",
              sm: "100%",
              xs: "90%",
            },
            paddingX: {
              lg: 3,
              md: 2,
              sm: 2,
              xs: 1,
            },
          }}
          paddingY={2}
          alignItems={"center"}
          alignContent={"center"}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate("/quote")}
          >
            <Tag />
            <Typography
              sx={{
                color: "#141414",
                fontFamily: `${theme.typography.fontFamily}`,
                fontSize: {
                  lg: "18px",
                  md: "18px",
                  sm: "16px",
                  xs: "16px",
                },
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                marginTop: 1,
              }}
            >
              Get Quote
            </Typography>
          </Box>
          <Line />
          <Box
            sx={{ cursor: "pointer", textAlign: "center" }}
            onClick={() => navigate("/pah")}
          >
            <Partnership />
            <Typography
              sx={{
                color: "#141414",
                fontFamily: `${theme.typography.fontFamily}`,
                fontSize: {
                  lg: "18px",
                  md: "18px",
                  sm: "16px",
                  xs: "16px",
                },
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                marginTop: 1,
              }}
            >
              Partnership <br /> Allience hub
            </Typography>
          </Box>
          <Line />
          <Box
            sx={{ cursor: "pointer", textAlign: "center" }}
            onClick={() => navigate("/job-center")}
          >
            <Ship />
            <Typography
              sx={{
                color: "#141414",
                fontFamily: `${theme.typography.fontFamily}`,
                fontSize: {
                  lg: "18px",
                  md: "18px",
                  sm: "16px",
                  xs: "16px",
                },
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                marginTop: 1,
              }}
            >
              Job Center
            </Typography>
          </Box>
          <Line />
          <Box
            sx={{ cursor: "pointer", textAlign: "center" }}
            onClick={() => navigate("/warehouse")}
          >
            <Warehouse />
            <Typography
              sx={{
                color: "#141414",
                fontFamily: `${theme.typography.fontFamily}`,
                fontSize: {
                  lg: "18px",
                  md: "18px",
                  sm: "16px",
                  xs: "16px",
                },
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                marginTop: 1,
              }}
            >
              Warehouse
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#f7f0eb",
            borderLeft: `1px solid ${theme.palette.secondary.main}`,
            width: {
              lg: "50%",
              md: "100%",
              sm: "100%",
              xs: "93.5%",
            },
          }}
          padding={"30px"}
        >
          <Typography
            marginBottom={1}
            sx={{
              fontSize: {
                lg: "20px",
                md: "18px",
                sm: "16px",
                xs: "16px",
              },
            }}
          >
            Track your shipments
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              alignItems: "center",
            }}
          >
            <TextField
              fullWidth
              type="number"
              placeholder="Enter shipment number"
              sx={{
                backgroundColor: "transparent",
                borderRadius: "4px",
                color: "#000",
                "& .MuiInputBase-input": {
                  padding: {
                    lg: "12px",
                    md: "10px",
                    sm: "8px",
                    xs: "8px",
                  },
                },
              }}
            />

            <Button
              sx={{
                backgroundColor: `${theme.palette.primary.main}`,
                color: `${theme.palette.primary.light}`,
                border: `1px solid ${theme.palette.primary.main}`,
                paddingX: 4,
                paddingY: 1.5,
                "&:hover": {
                  backgroundColor: "transparent",
                  border: `1px solid ${theme.palette.primary.main}`,
                  color: `${theme.palette.primary.main}`,
                },
              }}
            >
              Track
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Track;
