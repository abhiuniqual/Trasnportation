import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import PAHimg from "../../images/pah.png";
import PHAimg2 from "../../images/pah2.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useTheme } from "@mui/material/styles";

const PAH = () => {
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Navbar />
      <Helmet>
        <title>PAH | {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <Box
        sx={{
          marginTop: {
            lg: 22,
            md: 18,
            sm: 14,
            xs: 14,
          },
          marginBottom: {
            lg: 12,
            md: 12,
            sm: 10,
            xs: 10,
          },
          marginX: {
            lg: 16,
            md: 10,
            sm: 6,
            xs: 4,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(${PAHimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: {
              lg: "560px",
              md: "460px",
              sm: "400px",
              xs: "350px",
            },
            marginBottom: {
              lg: 10,
              md: 10,
              sm: 6,
              xs: 4,
            },
          }}
        >
          <Box
            paddingBottom={3}
            position={"absolute"}
            bottom={0}
            color={`${theme.palette.primary.light}`}
            sx={{
              width: {
                lg: "68%",
                md: "70%",
                sm: "90%",
                xs: "90%",
              },
              paddingLeft: {
                lg: 6,
                md: 4,
                sm: 2,
                xs: 2,
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: {
                  lg: "40px",
                  md: "30px",
                  sm: "24px",
                  xs: "20px",
                },
                fontFamily: `${theme.typography.fontFamily}`,
              }}
            >
              Welcome to Partner Alliance Hub
            </Typography>
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: {
                  lg: "20px",
                  md: "18px",
                  sm: "16px",
                  xs: "16px",
                },
                fontFamily: `${theme.typography.fontFamily}`,
                color: "#b4b4b4",
              }}
            >
              Are you a Freight Forwarder or Service Provider looking to expand
              your global reach and unlock new opportunities? The Partner
              Alliance Hub is your gateway to a world of possibilities. Join our
              platform, and harness the power of collaboration, innovation, and
              growth in the ever-evolving logistics industry.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: `${theme.typography.secondaryFontFamily}`,
              color: `${theme.palette.primary.main}`,
              fontSize: {
                lg: "40px",
                md: "32px",
                sm: "24px",
                xs: "24px",
              },
              fontWeight: "700",
            }}
          >
            Why Join the Partner Alliance Hub?
          </Typography>
          <Box>
            <Typography
              sx={{
                fontFamily: `${theme.typography.fontFamily}`,
                fontSize: {
                  lg: "20px",
                  md: "20px",
                  sm: "16px",
                  xs: "16px",
                },
                color: `${theme.palette.accent.main}`,
                fontWeight: "500",
                marginY: 3,
              }}
            >
              <span
                style={{
                  color: `${theme.palette.primary.main}`,
                  fontSize: {
                    lg: "20px",
                    md: "20px",
                    sm: "16px",
                    xs: "16px",
                  },
                  fontWeight: "600",
                  fontFamily: `${theme.typography.fontFamily}`,
                  marginRight: 1,
                }}
              >
                Unlock Global Opportunities:
              </span>
              The Partner Alliance Hub connects you with other freight Service
              Providers from around the world who are seeking reliable,
              trustworthy transportation and logistics partners. Expand your
              reach, start a collaboration and tap into markets you never
              thought possible.
            </Typography>
            <Typography
              sx={{
                fontFamily: `${theme.typography.fontFamily}`,
                fontSize: {
                  lg: "20px",
                  md: "20px",
                  sm: "16px",
                  xs: "16px",
                },
                color: `${theme.palette.accent.main}`,
                fontWeight: "500",
              }}
            >
              <span
                style={{
                  color: `${theme.palette.primary.main}`,
                  fontSize: {
                    lg: "20px",
                    md: "20px",
                    sm: "16px",
                    xs: "16px",
                  },
                  fontWeight: "600",
                  fontFamily: `${theme.typography.fontFamily}`,
                  marginRight: 1,
                }}
              >
                Maximize Your Efficiency:
              </span>
              Our platform streamlines the process of finding potential
              partners. Say goodbye to countless emails, phone calls, and
              negotiations. With Partner Alliance Hub, you can discover
              like-minded service providers effortlessly.
            </Typography>
            <Typography
              sx={{
                fontFamily: `${theme.typography.fontFamily}`,
                fontSize: {
                  lg: "20px",
                  md: "20px",
                  sm: "16px",
                  xs: "16px",
                },
                color: `${theme.palette.accent.main}`,
                fontWeight: "500",
                marginY: 3,
              }}
            >
              <span
                style={{
                  color: `${theme.palette.primary.main}`,
                  fontSize: {
                    lg: "20px",
                    md: "20px",
                    sm: "16px",
                    xs: "16px",
                  },
                  fontWeight: "600",
                  fontFamily: `${theme.typography.fontFamily}`,
                  marginRight: 1,
                }}
              >
                Boost Your Reputation:
              </span>
              Partnering with reputable service providers enhances your
              credibility in the industry. Leverage our platform to build your
              portfolio, earn positive reviews, and establish yourself as a
              trusted partner in global logistics.
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  lg: "20px",
                  md: "20px",
                  sm: "16px",
                  xs: "16px",
                },
                color: `${theme.palette.accent.main}`,
                fontFamily: `${theme.typography.fontFamily}`,
                fontWeight: "500",
              }}
            >
              <span
                style={{
                  fontWeight: "600",
                  color: `${theme.palette.primary.main}`,
                  fontSize: {
                    lg: "20px",
                    md: "20px",
                    sm: "16px",
                    xs: "16px",
                  },
                  fontWeight: "600",
                  fontFamily: `${theme.typography.fontFamily}`,
                  marginRight: 1,
                }}
              >
                Stay Competitive:
              </span>
              In today's fast-paced world, staying competitive means staying
              connected. Partner Alliance Hub equips you with the tools to
              remain relevant and competitive in a dynamic market.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          paddingY: {
            lg: 12,
            md: 12,
            sm: 10,
            xs: 10,
          },
          paddingX: {
            lg: 14,
            md: 10,
            sm: 6,
            xs: 4,
          },
          backgroundColor: "#fbf7f5",
        }}
      >
        <Grid container spacing={4}>
          <Grid
            item
            xs={12}
            sm={12}
            md={8}
            sx={{
              padding: 0,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: `${theme.typography.secondaryFontFamily}`,
                  color: `${theme.palette.primary.main}`,
                  fontSize: {
                    lg: "40px",
                    md: "32px",
                    sm: "24px",
                    xs: "24px",
                  },
                  fontWeight: "700",
                }}
              >
                How PAH Works
              </Typography>
              <Box>
                <Typography
                  sx={{
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "16px",
                      xs: "16px",
                    },
                    color: `${theme.palette.accent.main}`,
                    fontWeight: "500",
                    marginY: 2,
                  }}
                >
                  <span
                    style={{
                      color: `${theme.palette.primary.main}`,
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "16px",
                        xs: "16px",
                      },
                      fontWeight: "600",
                      fontFamily: `${theme.typography.fontFamily}`,
                    }}
                  >
                    Create Your Profile:
                  </span>
                  Sign up and complete your service provider profile. Highlight
                  your strengths, specialties, and areas of expertise.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "16px",
                      xs: "16px",
                    },
                    color: `${theme.palette.accent.main}`,
                    fontWeight: "500",
                  }}
                >
                  <span
                    style={{
                      color: `${theme.palette.primary.main}`,
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "16px",
                        xs: "16px",
                      },
                      fontWeight: "600",
                      fontFamily: `${theme.typography.fontFamily}`,
                      marginRight: 1,
                    }}
                  >
                    Browse Opportunities:
                  </span>
                  Explore a vast array of shipping projects posted by service
                  providers from various industries and locations.
                </Typography>
                <Typography
                  sx={{
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "16px",
                      xs: "16px",
                    },
                    color: `${theme.palette.accent.main}`,
                    fontWeight: "500",
                    marginY: 2,
                  }}
                >
                  <span
                    style={{
                      color: `${theme.palette.primary.main}`,
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "16px",
                        xs: "16px",
                      },
                      fontWeight: "600",
                      fontFamily: `${theme.typography.fontFamily}`,
                      marginRight: 1,
                    }}
                  >
                    Submit Proposals:
                  </span>
                  Tailor your proposals to match the needs of the service
                  provider. Showcase your unique value and commitment to
                  excellence.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "16px",
                      xs: "16px",
                    },
                    color: `${theme.palette.accent.main}`,
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontWeight: "500",
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: `${theme.palette.primary.main}`,
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "16px",
                        xs: "16px",
                      },
                      fontWeight: "600",
                      fontFamily: `${theme.typography.fontFamily}`,
                      marginRight: 1,
                    }}
                  >
                    Build Partnerships:
                  </span>
                  Engage with service providers, negotiate terms, and establish
                  mutually beneficial partnerships. Strengthen your network and
                  expand your reach.
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "20px",
                      md: "20px",
                      sm: "16px",
                      xs: "16px",
                    },
                    color: `${theme.palette.accent.main}`,
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontWeight: "500",
                    marginY: 2,
                  }}
                >
                  <span
                    style={{
                      fontWeight: "600",
                      color: `${theme.palette.primary.main}`,
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "16px",
                        xs: "16px",
                      },
                      fontWeight: "600",
                      fontFamily: `${theme.typography.fontFamily}`,
                      marginRight: 1,
                    }}
                  >
                    Grow Your Business:
                  </span>
                  Partner Alliance Hub is your growth engine. Increase your
                  revenue, diversify your clientele, and expand your global
                  presence.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{
              padding: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "460px",
                height: "460px",
              }}
            >
              <img src={PHAimg2} width={"100%"} height={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </HelmetProvider>
  );
};

export default PAH;
