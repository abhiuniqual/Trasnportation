import { Helmet, HelmetProvider } from "react-helmet-async";
import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Job from "../../images/job.png";
import Job2 from "../../images/job2.png";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useTheme } from "@mui/material/styles";

const JobCenter = () => {
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <HelmetProvider>
      <Navbar />
      <Helmet>
        <title>Job Center | {process.env.REACT_APP_NAME}</title>
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
            backgroundImage: `url(${Job})`,
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
                lg: "70%",
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
              Welcome to CarryMatch: Empowering Independent Drivers in the World
              of Freight
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
              Are you an independent driver seeking opportunities to transport
              freight for leading freight forwarders and logistics companies?
              CarryMatch is your gateway to a world of possibilities. Our
              platform connects individual drivers like you with businesses in
              need of freight transport.
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
            Why Choose CarryMatch for Independent Drivers?
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
                Access to Endless Opportunities:
              </span>
              CarryMatch is the ultimate destination for independent drivers
              looking to find their next gig. Our platform brings together a
              wide array of freight forwarders and logistics companies, offering
              a diverse range of transport jobs.
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
                }}
              >
                Flexibility and Autonomy:
              </span>
              Enjoy the flexibility of choosing when and where you work. With
              CarryMatch, you're in control of your schedule, allowing you to
              balance work and life on your terms.
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
                  marginLeft: 1,
                }}
              >
                Competitive Compensation:
              </span>
              We ensure that you receive competitive compensation for your
              services. Our platform encourages businesses to offer fair rates
              to attract top-notch drivers like yourself.
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
                  marginLeft: 1,
                }}
              >
                Safety and Trust:
              </span>
              CarryMatch prioritizes safety and trust. We screen and verify
              businesses that post jobs on our platform, giving you peace of
              mind when taking on new opportunities.
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
                How Job Center Works
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
                  Start by creating a profile that showcases your skills,
                  experience, and availability. Highlight what makes you an
                  exceptional driver.
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
                      marginLeft: 1,
                    }}
                  >
                    Browse Opportunities:
                  </span>
                  Explore a wide range of transport jobs posted by reputable
                  freight forwarders and logistics companies. Filter and search
                  for opportunities that match your preferences.
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
                      marginLeft: 1,
                    }}
                  >
                    Submit Your Applications:
                  </span>
                  Apply for jobs that align with your interests and expertise.
                  Craft personalized applications to stand out to potential
                  employers.
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
                      marginLeft: 1,
                    }}
                  >
                    Get Hired:
                  </span>
                  Once a business selects you for a job, you'll receive a
                  notification. Review the details, confirm your availability,
                  and start your journey as an independent driver.
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
                      marginLeft: 1,
                    }}
                  >
                    Deliver Excellence:
                  </span>
                  Fulfill your transport duties with professionalism and care.
                  Build a reputation for reliability, efficiency, and
                  exceptional service.
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
              <img src={Job2} width={"100%"} height={"100%"} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </HelmetProvider>
  );
};

export default JobCenter;
