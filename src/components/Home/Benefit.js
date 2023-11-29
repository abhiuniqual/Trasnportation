import React, { useState } from "react";
import { Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Benefit = () => {
  const theme = useTheme();
  const [text, setText] = useState(
    "CarryMatch is more than a platform; it's a logistics ecosystem designed to meet all your needs. From finding reliable carriers to accessing competitive warehousing solutions, we've got you covered. Streamline your logistics operations with a single, powerful platform."
  );

  const handleShowMore = () => {
    setText("");
  };

  const rows = text.split(/(\r|\n)/g);

  return (
    <Box
      sx={{
        backgroundColor: "#f7f0eb",
        paddingX: {
          lg: 12,
          md: 8,
          sm: 4,
          xs: 2,
        },
        paddingY: {
          lg: 8,
          md: 6,
          sm: 4,
          xs: 2,
        },
      }}
    >
      <Box textAlign={"center"} paddingY={2}>
        <Typography
          fontWeight={"600"}
          sx={{
            fontSize: {
              lg: "26px",
              md: "24px",
              sm: "22px",
              xs: "20px",
            },
            fontFamily: `${theme.typography.fontFamily}`,
          }}
        >
          Benefits
        </Typography>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: {
              lg: "44px",
              md: "40px",
              sm: "32px",
              xs: "26px",
            },
            fontWeight: "bold",
            fontFamily: `${theme.typography.secondaryFontFamily}`,
          }}
        >
          One
          <Typography
            sx={{
              marginX: 1,
              position: "relative",
              zIndex: 1,
              fontSize: {
                lg: "44px",
                md: "40px",
                sm: "32px",
                xs: "26px",
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: "32px",
                width: "100%",
                height: "10px",
                backgroundColor: `${theme.palette.secondary.main}`,
                zIndex: -1,
              },

              fontWeight: "bold",
              lineHeight: 1,
              fontFamily: `${theme.typography.secondaryFontFamily}`,
            }}
          >
            solutions,
          </Typography>
          Many benefits
        </Typography>
        <Typography
          sx={{
            fontSize: {
              lg: "20px",
              md: "18px",
              sm: "16px",
              xs: "16px",
            },
            fontFamily: `${theme.typography.fontFamily}`,
            color: `${theme.palette.accent.main}`,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            paddingX: {
              lg: 10,
              md: 8,
              sm: 4,
              xs: 2,
            },
            marginBottom: 4,
          }}
        >
          Your all-in-one logistics hub, connecting shippers with carriers,
          warehousing solutions, and independent drivers, offering seamless
          services from ocean and airfreight to rail and road transport,
        </Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              padding={4}
              sx={{
                backgroundColor: `${theme.palette.primary.light}`,
                border: "3px solid #f6e5dd",
                boxShadow: "0 0 20px #F6e5dd",
              }}
            >
              <Box
                paddingX={3}
                paddingY={4}
                marginBottom={1}
                width={"max-content"}
                sx={{
                  backgroundColor: `${theme.palette.secondary.main}`,
                  borderRadius: "18px",
                  fontWeight: "600",
                  color: `${theme.palette.primary.light}`,
                  fontSize: {
                    lg: "22px",
                    md: "20px",
                    sm: "18px",
                    xs: "16px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                }}
              >
                Icon
              </Box>
              <Typography
                fontWeight={"700"}
                sx={{
                  fontSize: {
                    lg: "30px",
                    md: "28px",
                    sm: "24px",
                    xs: "20px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                }}
              >
                Seamless Integration of Services
              </Typography>
              <Typography
                color={"#989898"}
                marginY={1}
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "5",
                  WebkitBoxOrient: "vertical",
                  flexDirection: "column",
                  fontSize: {
                    lg: "18px",
                    md: "16px",
                    sm: "14px",
                    xs: "14px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontWeight: 500,
                }}
              >
                CarryMatch is more than a platform; it's a logistics ecosystem
                designed to meet all your needs. From finding reliable carriers
                to accessing competitive warehousing solutions, we've got you
                covered. Streamline your logistics operations with a single,
                powerful platform.
              </Typography>
              {/* {rows.slice(0, 5).map((row, index) => (
                <Typography
                  key={index}
                  color={"#979797"}
                  marginY={1}
                  sx={{
                    fontSize: {
                      lg: "18px",
                      md: "16px",
                      sm: "14px",
                      xs: "14px",
                    },
                  }}>
                  {row}
                </Typography>
              ))}
              {rows.length > 5 && (
                <Button variant="outlined" onClick={handleShowMore}>
                  ...Show more
                </Button>
              )} */}
              <Typography
                sx={{
                  color: `${theme.palette.secondary.main}`,
                  borderBottom: `1px solid ${theme.palette.secondary.main}`,
                  width: "max-content",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: {
                    lg: "20px",
                    md: "16px",
                    sm: "14px",
                    xs: "14px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                }}
              >
                Discover more
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              padding={4}
              sx={{
                backgroundColor: `${theme.palette.secondary.main}`,
                color: `${theme.palette.primary.light}`,
                border: "3px solid #f6e5dd",
                boxShadow: "0 0 20px #F6e5dd",
              }}
            >
              <Box
                paddingX={3}
                paddingY={4}
                marginBottom={1}
                width={"max-content"}
                sx={{
                  backgroundColor: `${theme.palette.primary.light}`,
                  borderRadius: "18px",
                  fontWeight: "600",
                  color: `${theme.palette.secondary.main}`,
                  fontSize: {
                    lg: "22px",
                    md: "20px",
                    sm: "18px",
                    xs: "16px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                }}
              >
                Icon
              </Box>
              <Typography
                fontWeight={"700"}
                sx={{
                  fontSize: {
                    lg: "30px",
                    md: "28px",
                    sm: "24px",
                    xs: "20px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                }}
              >
                Carriers and Freight Forwarders
              </Typography>
              <Typography
                marginY={1}
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "5",
                  WebkitBoxOrient: "vertical",
                  flexDirection: "column",
                  fontSize: {
                    lg: "18px",
                    md: "16px",
                    sm: "14px",
                    xs: "14px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontWeight: 500,
                }}
              >
                Explore a diverse range of warehousing options that suit your
                storage and dispatch needs. Whether it's short-term storage,
                long-term warehousing, or immediate dispatch capabilities,
                CarryMatch has the perfect solution for you. Manage your entire
                logistics chain seamlessly.
              </Typography>
              <Typography
                sx={{
                  borderBottom: `1px solid ${theme.palette.primary.light}`,
                  width: "max-content",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: {
                    lg: "20px",
                    md: "16px",
                    sm: "14px",
                    xs: "14px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                }}
              >
                Discover more
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              padding={4}
              sx={{
                backgroundColor: `${theme.palette.primary.light}`,
                marginBottom: {
                  sm: 0,
                  xs: 2,
                },
                fontFamily: `${theme.typography.fontFamily}`,
                border: "3px solid #f6e5dd",
                boxShadow: "0 0 20px #F6e5dd",
              }}
            >
              <Box
                paddingX={3}
                paddingY={4}
                marginBottom={1}
                width={"max-content"}
                sx={{
                  backgroundColor: `${theme.palette.secondary.main}`,
                  borderRadius: "18px",
                  fontWeight: "600",
                  color: `${theme.palette.primary.light}`,
                  fontSize: {
                    lg: "22px",
                    md: "20px",
                    sm: "18px",
                    xs: "16px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                }}
              >
                Icon
              </Box>
              <Typography
                fontWeight={"700"}
                sx={{
                  fontSize: {
                    lg: "30px",
                    md: "28px",
                    sm: "24px",
                    xs: "20px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                }}
              >
                Warehousing <br /> Solutions
              </Typography>
              <Typography
                color={"#979797"}
                marginY={1}
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "5",
                  WebkitBoxOrient: "vertical",
                  flexDirection: "column",
                  fontSize: {
                    lg: "18px",
                    md: "16px",
                    sm: "14px",
                    xs: "14px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontWeight: 500,
                }}
              >
                Explore a diverse range of warehousing options that suit your
                storage and dispatch needs. Whether it's short-term storage,
                long-term warehousing, or immediate dispatch capabilities,
                CarryMatch has the perfect solution for you. Manage your entire
                logistics chain seamlessly.
              </Typography>
              <Typography
                sx={{
                  color: `${theme.palette.secondary.main}`,
                  borderBottom: `1px solid ${theme.palette.secondary.main}`,
                  width: "max-content",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: {
                    lg: "20px",
                    md: "16px",
                    sm: "14px",
                    xs: "14px",
                  },
                  fontFamily: `${theme.typography.fontFamily}`,
                }}
              >
                Discover more
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Benefit;
