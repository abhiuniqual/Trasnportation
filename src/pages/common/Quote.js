import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Qimg from "../../images/quote.png";
import Qimg2 from "../../images/quote2.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useTheme } from "@mui/material/styles";

const Quote = () => {
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Navbar />
      <Helmet>
        <title>Get Quote | {process.env.REACT_APP_NAME}</title>
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
            backgroundImage: `url(${Qimg})`,
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
                lg: "68.7%",
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
              Welcome to CarryMatch - Your Instant Freight Cost Solution
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
              Are you tired of the lengthy and complex process of obtaining
              freight quotes? At CarryMatch, we've simplified the journey for
              shippers like you. Our Get Quote page is your gateway to receiving
              quick, accurate, and competitive cost indications for your freight
              move, just like you've never experienced before.
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
            Why Choose CarryMatch Get Quote?
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
                }}
              >
                Instant Cost Indications:
              </span>
              Say goodbye to waiting for days to get a freight quote. With
              CarryMatch, you can receive cost indications within minutes,
              helping you make informed decisions faster.{}
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
                Transparency:
              </span>
              We believe in complete transparency. Our platform provides you
              with detailed cost breakdowns, so you know exactly what you're
              paying for. No hidden fees, no surprises.
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
                Competitive Pricing:
              </span>
              We've gathered a network of carriers and freight forwarders who
              are eager to serve you. Our competitive bidding system ensures
              that you receive the best possible prices for your freight moves.
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
                  fontFamily: `${theme.typography.fontFamily}`,
                  marginRight: 1,
                }}
              >
                User-Friendly Experience:
              </span>
              CarryMatch is designed with simplicity in mind. Our user-friendly
              interface makes it easy for you to input your shipment details and
              receive instant cost indications without any hassle.
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
                How Get Quote Works
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
                    Enter Your Shipment Details:
                  </span>
                  Start by entering the basic details of your shipment. Tell us
                  what you're shipping, its dimensions, weight, origin, and
                  destination.
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
                    Receive Instant Indications:
                  </span>
                  Once you've submitted your shipment details, our platform
                  matches you with carriers and freight forwarders who are ready
                  to provide you with cost indications.
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
                    Compare and Choose:
                  </span>
                  Review the cost indications and additional information from
                  potential service providers. Compare quotes, service levels,
                  and ratings to select the best fit for your needs.
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
                      fontFamily: `${theme.typography.fontFamily}`,
                      marginRight: 1,
                    }}
                  >
                    Seamless Booking:
                  </span>
                  Once you've found the ideal match, you can proceed to book
                  your shipment directly through CarryMatch. It's quick, simple,
                  and hassle-free.
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
                      fontFamily: `${theme.typography.fontFamily}`,
                      marginRight: 1,
                    }}
                  >
                    Track Your Shipment:
                  </span>
                  Our platform provides real-time tracking capabilities, so you
                  can monitor the progress of your shipment from pickup to
                  delivery.
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
              <img src={Qimg2} width={"100%"} height={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </HelmetProvider>
  );
};

export default Quote;
