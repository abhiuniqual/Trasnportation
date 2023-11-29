import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import WH1 from "../../images/warehouse1.png";
import WH2 from "../../images/warehouse2.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useTheme } from "@mui/material/styles";

const WareHouse = () => {
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Navbar />
      <Helmet>
        <title>WareHouse | {process.env.REACT_APP_NAME}</title>
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
            backgroundImage: `url(${WH1})`,
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
              Welcome to CarryMatch Warehousing Solutions:
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
              Are you in search of efficient, cost-effective warehousing
              solutions to streamline your shipping and storage needs?
              CarryMatch is your ultimate destination. Our platform seamlessly
              connects shippers with reputable warehouses capable of receiving,
              storing, and dispatching your shipments with precision and care.
              Think of us as the one-stop-shop for all your logistics needs.
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
            Why Choose CarryMatch Warehousing Solutions?
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
                Diverse Warehousing Options:
              </span>
              CarryMatch brings together a vast network of warehouses, each
              equipped to meet unique storage and dispatch requirements. Whether
              you need short-term storage, long-term warehousing, or immediate
              dispatch capabilities, we've got you covered.
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
                Competitive Pricing:
              </span>
              We understand the importance of cost-efficiency in logistics. Our
              platform ensures you receive competitive pricing from warehousing
              providers, allowing you to maximize your budget and reduce
              overhead costs.
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
                Reliability and Security:
              </span>
              Rest assured knowing your shipments are in the hands of reliable
              and secure warehouses. We vet and verify each warehouse partner to
              guarantee the safety of your goods.
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
                Streamlined Operations:
              </span>
              With CarryMatch, you can manage your entire logistics chain from
              one platform. Easily schedule pickups, monitor inventory levels,
              and dispatch shipments with just a few clicks.
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
                How Warehouse Solution Work
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
                    Discover Warehousing Options:
                  </span>
                  Begin by browsing our extensive network of warehouses. Filter
                  your search based on location, capacity, and specific services
                  you require.
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
                    Request Quotes:
                  </span>
                  Select the warehousing solutions that best fit your needs, and
                  request quotes from multiple providers. Compare pricing and
                  services to make an informed decision.
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
                    Choose Your Partner:
                  </span>
                  After reviewing quotes and details from potential warehousing
                  partners, select the one that aligns perfectly with your
                  requirements.
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
                    Coordinate with Ease:
                  </span>
                  Communicate directly with your chosen warehouse through the
                  CarryMatch platform. Coordinate shipments, share inventory
                  details, and track your goods in real-time.
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
                    }}
                  >
                    Efficient Dispatch:
                  </span>
                  When it's time to dispatch your goods, rely on CarryMatch to
                  ensure a seamless transition from warehouse to destination.
                  Minimize downtime and maximize efficiency.
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
              <img src={WH2} width={"100%"} height={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </HelmetProvider>
  );
};

export default WareHouse;
