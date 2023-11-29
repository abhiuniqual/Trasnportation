import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../svgs/facebook.svg";
import { ReactComponent as Instagram } from "../svgs/instagram.svg";
import { ReactComponent as Twitter } from "../svgs/twitter.svg";
import { ReactComponent as Linkedin } from "../svgs/linkedin.svg";
import { ReactComponent as Mail } from "../svgs/mail.svg";
import { ReactComponent as Map } from "../svgs/map.svg";
import { ReactComponent as Web } from "../svgs/web.svg";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f8e9df",
          paddingX: {
            lg: 14,
            md: 10,
            sm: 4,
            xs: 2,
          },
          paddingY: {
            lg: 6,
            md: 4,
            sm: 2,
            xs: 2,
          },
        }}
      >
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Box display={"flex"} alignItems={"center"} gap={2}>
                <svg
                  width="79"
                  height="33"
                  viewBox="0 0 79 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.4258 31.0289V12.3125L23.998 26.4991L11.4258 31.0289Z"
                    fill="#141414"
                  />
                  <path
                    d="M79 6.89552L0 0L29.8113 33L79 6.89552Z"
                    fill="#141414"
                  />
                  <path
                    d="M12.9203 14.7757L11.4297 28.5667V12.313L67.0775 8.86523L12.9203 14.7757Z"
                    fill="#CCB5A5"
                  />
                </svg>
                <Typography
                  fontWeight={"bold"}
                  sx={{
                    fontSize: {
                      lg: "32px",
                      md: "28px",
                      sm: "24px",
                      xs: "24px",
                    },
                  }}
                >
                  Logo
                </Typography>
              </Box>
              <Typography
                marginY={2}
                textAlign={"justify"}
                sx={{
                  fontFamily: `${theme.typography.fontFamily}`,
                  fontSize: "14px",
                }}
              >
                Your Complete Logistics Solution At CarryMatch, we redefine the
                way you navigate the world of logistics. Whether you're a
                shipper in need of carriers, freight forwarders, or warehousing
                solutions, we bring everything together under one roof. Think of
                us as your logistics partner, simplifying the complexities of
                shipping and storage.
              </Typography>
              <Box display={"flex"} gap={4} sx={{ cursor: "pointer" }}>
                <Facebook />
                <Instagram />
                <Twitter />
                <Linkedin />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box>
              <Typography
                marginBottom={4}
                width={"max-content"}
                sx={{
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                  fontWeight: "600",
                  fontSize: {
                    lg: "18px",
                    md: "18px",
                    sm: "16px",
                    xs: "16px",
                  },
                }}
              >
                Quick link
              </Typography>
              <Typography
                marginBottom={2}
                sx={{
                  cursor: "pointer",
                  fontSize: {
                    lg: "16px",
                    md: "14px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
                onClick={() => navigate("/")}
              >
                Home
              </Typography>
              <Typography
                marginBottom={2}
                sx={{
                  cursor: "pointer",
                  fontSize: {
                    lg: "16px",
                    md: "14px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
                onClick={() => navigate("/about")}
              >
                About Us
              </Typography>
              <Typography
                marginBottom={2}
                sx={{
                  cursor: "pointer",
                  fontSize: {
                    lg: "16px",
                    md: "14px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                Chatbot Support
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: {
                    lg: "16px",
                    md: "14px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                Customer Services
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box>
              <Typography
                marginBottom={4}
                width={"max-content"}
                sx={{
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                  fontWeight: "600",
                  fontSize: {
                    lg: "18px",
                    md: "18px",
                    sm: "16px",
                    xs: "16px",
                  },
                }}
              >
                Resources
              </Typography>
              <Typography
                marginBottom={2}
                sx={{
                  cursor: "pointer",
                  fontSize: {
                    lg: "16px",
                    md: "14px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
                onClick={() => navigate("/blog")}
              >
                Blog
              </Typography>
              <Typography
                marginBottom={2}
                sx={{
                  cursor: "pointer",
                  fontSize: {
                    lg: "16px",
                    md: "14px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                Market updates
              </Typography>
              <Typography
                marginBottom={2}
                fontSize={"14px"}
                sx={{ cursor: "pointer" }}
              >
                Case studies
              </Typography>
              <Typography
                marginBottom={2}
                fontSize={"14px"}
                sx={{ cursor: "pointer" }}
              >
                Video
              </Typography>
              <Typography
                sx={{
                  cursor: "pointer",
                  fontSize: {
                    lg: "16px",
                    md: "14px",
                    sm: "12px",
                    xs: "12px",
                  },
                }}
              >
                Webinars
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography
                marginBottom={4}
                width={"max-content"}
                sx={{
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                  fontWeight: "600",
                  fontSize: {
                    lg: "18px",
                    md: "18px",
                    sm: "16px",
                    xs: "16px",
                  },
                }}
              >
                Contact
              </Typography>
              <Box
                display={"flex"}
                gap={2}
                alignItems={"center"}
                marginBottom={2}
              >
                <Map />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "14px",
                      sm: "12px",
                      xs: "12px",
                    },
                  }}
                >
                  ROMANIA, Oradea, Str. Evreilor Deportati 4A
                </Typography>
              </Box>
              <Box
                display={"flex"}
                gap={2}
                alignItems={"center"}
                marginBottom={2}
              >
                <Mail />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "14px",
                      sm: "12px",
                      xs: "12px",
                    },
                  }}
                >
                  support@carrymatch.com
                </Typography>
              </Box>
              <Box display={"flex"} gap={2} alignItems={"center"}>
                <Web />
                <Typography
                  sx={{
                    fontSize: {
                      lg: "16px",
                      md: "14px",
                      sm: "12px",
                      xs: "12px",
                    },
                  }}
                >
                  https://transportation.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography
        paddingY={3}
        sx={{
          backgroundColor: `${theme.palette.primary.main}`,
          color: `${theme.palette.primary.light}`,
          textAlign: "center",
          fontFamily: `${theme.typography.fontFamily}`,
          fontSize: "14px",
        }}
      >
        Copyright © {new Date().getFullYear()} | All Rights Reserved
        <Link
          to={"https://uniqualitech.com/"}
          style={{
            fontWeight: "600",
            color: `${theme.palette.primary.light}`,
            textDecoration: "none",
          }}
        >
          Uniqual itech
        </Link>
      </Typography>
    </>
  );
};

export default Footer;
