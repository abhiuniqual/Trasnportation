import React, { useEffect } from "react";
import { Box, Grid, Typography, Pagination } from "@mui/material";
import blog1 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import GridComponent from "../../components/Blog/GridComponent1";
import GridComponent2 from "../../components/Blog/GridComponent2";
import { useTheme } from "@mui/material/styles";

const Blog = () => {
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = [
    {
      img: blog1,
      title: "Total liquid transportation around the world",
      desc: "Far far away, behind the word mountains, far from the countries",
      uImg: blog3,
    },
    {
      img: blog1,
      title: "Total liquid transportation around the world",
      desc: "Far far away, behind the word mountains, far from the countries",
      uImg: blog3,
    },
    {
      img: blog1,
      title: "Total liquid transportation around the world",
      desc: "Far far away, behind the word mountains, far from the countries",
      uImg: blog3,
    },
  ];
  return (
    <HelmetProvider>
      <Helmet>
        <title> Blog | {process.env.REACT_APP_NAME} </title>
      </Helmet>
      <Navbar />
      <Box
        sx={{
          marginX: {
            lg: 16,
            md: 10,
            sm: 6,
            xs: 4,
          },
          marginY: {
            lg: 22,
            md: 18,
            sm: 14,
            xs: 14,
          },
        }}
      >
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={8}>
              <GridComponent2 />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <GridComponent />
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            {data.map((d, i) => {
              return (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Box
                    marginBottom={2}
                    padding={3}
                    sx={{
                      border: "3px solid #FDf3ef",
                      boxShadow: "0 0 20px #FDf3ef",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        backgroundImage: `url(${d.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: {
                          lg: "200px",
                          md: "200px",
                          sm: "180px",
                          xs: "180px",
                        },
                      }}
                      marginBottom={2}
                    >
                      <Box
                        paddingRight={2}
                        paddingBottom={1}
                        position={"absolute"}
                        bottom={0}
                        color={`${theme.palette.primary.light}`}
                        right={0}
                      >
                        <Typography
                          paddingX={2}
                          paddingY={1}
                          sx={{
                            background: "rgba(20, 20, 20, 0.4)",
                            backdropFilter: "blur(10px)",
                            fontFamily: `${theme.typography.fontFamily}`,
                            fontWeight: "600",
                            fontSize: {
                              lg: "14px",
                              md: "16px",
                              sm: "12px",
                              xs: "12px",
                            },
                          }}
                        >
                          World
                        </Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: {
                            lg: "19px",
                            md: "19px",
                            sm: "16px",
                            xs: "16px",
                          },
                          fontWeight: "700",
                          fontFamily: `${theme.typography.fontFamily}`,
                          marginBottom: 1,
                        }}
                      >
                        {d.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: `${theme.palette.accent.main}`,
                          fontSize: {
                            lg: "17px",
                            md: "17px",
                            sm: "14px",
                            xs: "14px",
                          },
                          fontWeight: "500",
                          fontFamily: `${theme.typography.fontFamily}`,
                        }}
                      >
                        {d.desc}
                      </Typography>
                      <Box
                        marginY={1}
                        display={"flex"}
                        justifyContent={"space-between"}
                      >
                        <Box display={"flex"} gap={2} alignItems={"center"}>
                          <Box width={"37px"} height={"37px"}>
                            <img
                              src={d.uImg}
                              alt="blog"
                              width={"100%"}
                              height={"100%"}
                            />
                          </Box>
                          <Box>
                            <Typography
                              sx={{
                                fontFamily: `${theme.typography.fontFamily}`,
                                fontSize: {
                                  lg: "16px",
                                  md: "16px",
                                  sm: "14px",
                                  xs: "14px",
                                },
                                fontWeight: "600",
                              }}
                            >
                              John doe
                            </Typography>
                            <Typography
                              sx={{
                                fontFamily: `${theme.typography.fontFamily}`,
                                fontSize: {
                                  lg: "14px",
                                  md: "14px",
                                  sm: "12px",
                                  xs: "12px",
                                },
                                fontWeight: "500",
                                color: `${theme.palette.accent.main}`,
                              }}
                            >
                              Admin
                            </Typography>
                          </Box>
                        </Box>
                        <Typography
                          sx={{
                            fontFamily: `${theme.typography.secondaryFontFamily}`,
                            fontWeight: "400",
                            fontSize: {
                              lg: "16px",
                              md: "16px",
                              sm: "14px",
                              xs: "14px",
                            },
                          }}
                        >
                          11 April 2023
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          color: `${theme.palette.secondary.main}`,
                          borderBottom: "2px solid",
                          fontSize: {
                            lg: "18px",
                            md: "18px",
                            sm: "16px",
                            xs: "16px",
                          },
                          lineHeight: "20px",
                          fontWeight: "600",
                          width: "max-content",
                          fontFamily: `${theme.typography.fontFamily}`,
                        }}
                      >
                        Read more <ArrowForwardIcon sx={{ marginLeft: 1 }} />
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4}>
              <GridComponent />
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <GridComponent2 />
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: {
              lg: 6,
              md: 6,
              sm: 4,
              xs: 4,
            },
          }}
        >
          <Pagination
            count={2}
            variant="outlined"
            shape="rounded"
            sx={{
              "& ul": {
                gap: 2,
              },
              "& button": {
                paddingX: 2,
                paddingY: 3,
                fontSize: {
                  lg: "24px",
                  md: "24px",
                  sm: "20px",
                  xs: "20px",
                },
                fontFamily: `${theme.typography.fontFamily}`,
                backgroundColor: "#F5EEEA",
                color: `${theme.palette.secondary.main}`,
                borderRadius: "14px",
                border: "2px solid #F5EEEA",
                "&.Mui-selected": {
                  backgroundColor: `${theme.palette.secondary.main}`,
                  color: `${theme.palette.primary.light}`,
                  borderColor: `${theme.palette.secondary.main}`,
                },
                "&:hover": {
                  borderColor: `${theme.palette.secondary.main}`,
                },
              },
            }}
          />
        </Box>
      </Box>
      <Footer />
    </HelmetProvider>
  );
};

export default Blog;
