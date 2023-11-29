import React, { useEffect } from "react";
import { Grid, Box, Typography } from "@mui/material";
import Aboutimage from "../../images/About.png";
import about2 from "../../images/About2.png";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTheme } from "@mui/material/styles";

const About = () => {
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider>
      <Helmet>
        <title>About | {process.env.REACT_APP_NAME}</title>
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
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(${Aboutimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: {
              lg: "560px",
              md: "460px",
              sm: "360px",
              xs: "360px",
            },
            marginBottom: {
              lg: 12,
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
            color={"white"}
            sx={{
              width: {
                lg: "72%",
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
              Who we are
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
              At CarryMatch, we redefine the way you navigate the world of
              logistics. Whether you're a shipper in need of carriers, freight
              forwarders, or warehousing solutions, we bring everything together
              under one roof. Think of us as your logistics partner, simplifying
              the complexities of shipping and storage.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            marginBottom={4}
            sx={{
              fontSize: {
                lg: "48px",
                md: "34px",
                sm: "28px",
                xs: "24px",
              },
              fontWeight: "600",
              fontFamily: `${theme.typography.secondaryFontFamily}`,
              color: "#141414",
            }}
          >
            Meet our team
          </Typography>
          <Box marginBottom={8}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={4}>
                <Box
                  sx={{
                    border: "2px solid #Ebebeb",
                    boxShadow: "0 0 20px #Ebebeb",
                  }}
                  height={"100%"}
                >
                  <Box
                    sx={{
                      height: {
                        md: "450px",
                        xs: "250px",
                      },
                    }}
                  >
                    <img
                      src={about2}
                      alt="about2"
                      width={"100%"}
                      height={"100%"}
                    />
                  </Box>
                  <Box
                    paddingY={2}
                    paddingX={3}
                    sx={{ fontFamily: `${theme.typography.fontFamily}` }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "26px",
                          md: "22px",
                          sm: "18px",
                          xs: "18px",
                        },
                        color: "#141414",
                        fontWeight: "700",
                      }}
                    >
                      IGOR MOLDOVANU
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "23px",
                          md: "19px",
                          sm: "16px",
                          xs: "16px",
                        },
                        color: `${theme.palette.accent.main}`,
                        fontWeight: "500",
                        paddingY: 1,
                      }}
                    >
                      Co - founder (Ph.D)
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "23px",
                          md: "19px",
                          sm: "16px",
                          xs: "16px",
                        },
                        color: `${theme.palette.accent.main}`,
                        fontWeight: "500",
                      }}
                    >
                      10 years of experience in <br /> international
                      transactions
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={8}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "31px",
                        md: "27px",
                        sm: "22px",
                        xs: "20px",
                      },
                      color: "#141414",
                      fontWeight: "700",
                      fontFamily: `${theme.typography.fontFamily}`,
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts.
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      color: `${theme.palette.accent.main}`,
                      marginBottom: 2,
                      fontFamily: `${theme.typography.fontFamily}`,
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts. Separated they livethere live the blind texts. Far
                    far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia there live the blind texts.
                    Separated they livethere live the blind texts.
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      color: `${theme.palette.accent.main}`,
                      marginBottom: 2,
                      fontFamily: `${theme.typography.fontFamily}`,
                    }}
                  >
                    Far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia there live the blind texts.
                    Separated they livethere live the blind texts. Far far away,
                    behind the word mountains, far from the countries Vokalia
                    and Consonantia there live the blind texts. Separated they
                    livethere live the blind texts.Far far away, behind the word
                    mountains, far from the countries Vokalia and Consonantia
                    there live the blind texts. Separated they livethere live
                    the blind texts. Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia there live
                    the blind texts. Separated they livethere live the blind
                    texts. Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts. Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts. Separated they live there live the blind texts.
                    <br />
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts. Separated they livethere live the blind texts.
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      color: `${theme.palette.accent.main}`,
                      fontFamily: `${theme.typography.fontFamily}`,
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts. Separated they live there live the blind texts. Far
                    far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia there live the blind texts.
                    Separated they live there live the blind texts.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={8}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: {
                        lg: "31px",
                        md: "27px",
                        sm: "22px",
                        xs: "20px",
                      },
                      color: "#141414",
                      fontWeight: "700",
                      fontFamily: `${theme.typography.fontFamily}`,
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts.
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      color: `${theme.palette.accent.main}`,
                      marginBottom: 2,
                      fontFamily: `${theme.typography.fontFamily}`,
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts. Separated they livethere live the blind texts. Far
                    far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia there live the blind texts.
                    Separated they livethere live the blind texts.
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      color: `${theme.palette.accent.main}`,
                      marginBottom: 2,
                      fontFamily: `${theme.typography.fontFamily}`,
                    }}
                  >
                    Far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia there live the blind texts.
                    Separated they livethere live the blind texts. Far far away,
                    behind the word mountains, far from the countries Vokalia
                    and Consonantia there live the blind texts. Separated they
                    livethere live the blind texts.Far far away, behind the word
                    mountains, far from the countries Vokalia and Consonantia
                    there live the blind texts. Separated they livethere live
                    the blind texts. Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia there live
                    the blind texts. Separated they livethere live the blind
                    texts. Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts. Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts. Separated they live there live the blind texts.
                    <br />
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts. Separated they livethere live the blind texts.
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "500",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      color: `${theme.palette.accent.main}`,
                      fontFamily: `${theme.typography.fontFamily}`,
                    }}
                  >
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia there live the blind
                    texts. Separated they live there live the blind texts. Far
                    far away, behind the word mountains, far from the countries
                    Vokalia and Consonantia there live the blind texts.
                    Separated they live there live the blind texts.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Box
                  sx={{
                    border: "2px solid #Ebebeb",
                    boxShadow: "0 0 20px #Ebebeb",
                  }}
                  height={"100%"}
                >
                  <Box
                    sx={{
                      height: {
                        md: "450px",
                        xs: "250px",
                      },
                    }}
                  >
                    <img
                      src={about2}
                      alt="about2"
                      width={"100%"}
                      height={"100%"}
                    />
                  </Box>
                  <Box
                    paddingY={2}
                    paddingX={3}
                    sx={{ fontFamily: `${theme.typography.fontFamily}` }}
                  >
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "26px",
                          md: "22px",
                          sm: "18px",
                          xs: "18px",
                        },
                        color: "#141414",
                        fontWeight: "700",
                      }}
                    >
                      IGOR MOLDOVANU
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "23px",
                          md: "19px",
                          sm: "16px",
                          xs: "16px",
                        },
                        color: `${theme.palette.accent.main}`,
                        fontWeight: "500",
                        paddingY: 1,
                      }}
                    >
                      Co - founder (Ph.D)
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          lg: "23px",
                          md: "19px",
                          sm: "16px",
                          xs: "16px",
                        },
                        color: `${theme.palette.accent.main}`,
                        fontWeight: "500",
                      }}
                    >
                      10 years of experience in <br /> international
                      transactions
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: {
              lg: 14,
              md: 10,
              sm: 4,
              xs: 4,
            },
            marginBottom: {
              lg: 6,
              md: 4,
              sm: 2,
              xs: 2,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                lg: "52px",
                md: "40px",
                sm: "30px",
                xs: "26px",
              },
              textAlign: "center",
              fontWeight: "700",
              fontFamily: `${theme.typography.secondaryFontFamily}`,
            }}
          >
            How We do it
          </Typography>
          <Box
            sx={{
              marginTop: {
                lg: 16,
                md: 12,
                sm: 6,
                xs: 4,
              },
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12} md={4}>
                <Box
                  position={"relative"}
                  textAlign={"center"}
                  sx={{
                    border: "3px solid #FDf3ef",
                    boxShadow: "0 0 20px #FDf3ef",
                    paddingX: 2,
                    paddingTop: 8,
                    paddingBottom: 4,
                  }}
                >
                  <Box
                    position={"absolute"}
                    sx={{
                      top: "0%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <svg
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="35" cy="35" r="35" fill="#CBAB96" />
                      <path
                        d="M22.7323 40.3429L22.3519 39.9625C22.3519 39.9625 22.3519 39.9625 22.3519 39.9625C22.3 39.9106 22.2588 39.849 22.2307 39.7812C22.2026 39.7134 22.1882 39.6407 22.1882 39.5673C22.1882 39.4939 22.2026 39.4213 22.2307 39.3534C22.2588 39.2856 22.3 39.224 22.3519 39.1721M22.7323 40.3429L22.4226 39.2429M22.7323 40.3429L15.4707 47.6045L15.4706 47.6045C14.1115 48.9642 14.1102 51.1656 15.4707 52.5256C16.8274 53.8818 19.0347 53.8825 20.3916 52.5256L27.6536 45.264M22.7323 40.3429L27.5828 45.1933M22.3519 39.1721L22.4226 39.2429M22.3519 39.1721L22.3519 39.1722L22.4226 39.2429M22.3519 39.1721L24.6694 36.8548M22.4226 39.2429L24.7909 36.8747M24.6694 36.8548C24.68 36.8763 24.6907 36.8979 24.7014 36.9194L24.7909 36.8747M24.6694 36.8548C22.0931 31.619 22.9291 25.0392 27.3707 20.5981M24.6694 36.8548L24.7202 36.804L24.7909 36.8747M24.7909 36.8747L27.3707 20.5981M27.3707 20.5981L27.4414 20.6688L27.3707 20.5981M27.3707 20.5981L27.7243 45.1933L27.6536 45.264M27.3707 20.5981C27.3707 20.5981 27.3707 20.5981 27.3707 20.5981M27.3707 20.5981L27.3707 20.5981M27.3707 20.5981C32.8919 15.0764 41.8763 15.0759 47.3982 20.5981C52.9336 26.1329 52.9327 35.092 47.3982 40.6256C43.0484 44.9757 36.4914 45.9407 31.1455 43.3218L28.8237 45.6437C28.8237 45.6437 28.8236 45.6437 28.8236 45.6437C28.7718 45.6956 28.7102 45.7368 28.6424 45.7649L28.6041 45.6725L28.6424 45.7649C28.5745 45.793 28.5019 45.8075 28.4285 45.8075C28.3551 45.8075 28.2824 45.793 28.2146 45.7649L28.2529 45.6725L28.2146 45.7649C28.1468 45.7368 28.0852 45.6956 28.0333 45.6437M28.0333 45.6437L28.104 45.573L28.0333 45.6437L28.0333 45.6437ZM28.0333 45.6437L27.6536 45.264M27.6536 45.264L27.5828 45.1933M27.5828 45.1933L20.3209 52.4549C19.0031 53.7727 16.859 53.7721 15.5414 52.4549C14.22 51.134 14.2212 48.9958 15.5414 47.6752L27.5828 45.1933ZM47.3275 40.5549C52.8229 35.0604 52.8239 26.1646 47.3275 20.6688V40.5549ZM19.6013 51.7354L19.672 51.8062L19.6013 51.7354C18.6805 52.6562 17.1818 52.6562 16.261 51.7354C15.3378 50.8119 15.3378 49.3184 16.261 48.3948L23.5226 41.1332L26.8632 44.4738L19.6013 51.7354ZM46.6077 39.8353L46.6784 39.906L46.6077 39.8353C41.5163 44.9274 33.239 44.913 28.161 39.8353C23.0975 34.7718 23.0322 26.5172 28.161 21.3883C33.2466 16.3026 41.5219 16.3023 46.6077 21.3883C51.7054 26.4861 51.7061 34.737 46.6077 39.8353ZM30.1184 42.768L28.4284 44.4583L28.0631 44.093C28.0495 44.0782 28.0587 44.0864 28.0591 44.086C28.061 44.0841 27.8453 43.8703 23.5374 39.5672L25.2258 37.8789C25.8256 38.8787 26.5459 39.8011 27.3706 40.6256C28.1948 41.4504 29.1178 42.17 30.1184 42.768Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.2"
                      />
                      <path
                        d="M30.9787 37.0183C34.5135 40.5531 40.2561 40.5525 43.7899 37.0183C47.3218 33.4862 47.3218 27.7391 43.7899 24.207C40.2582 20.6756 34.511 20.6751 30.9787 24.207C30.9787 24.207 30.9787 24.207 30.9787 24.207M30.9787 37.0183L30.908 37.089C27.337 33.5179 27.337 27.7074 30.908 24.1363L30.9787 24.207M30.9787 37.0183C27.4468 33.4862 27.4468 27.7391 30.9787 24.207M30.9787 37.0183L30.9787 24.207M30.1884 23.4167L30.1884 23.4167C26.2206 27.3847 26.2205 33.8408 30.1884 37.8086C34.1586 41.7793 40.609 41.7808 44.5802 37.8086C48.5482 33.8408 48.5482 27.3846 44.5802 23.4167C40.6129 19.4494 34.1566 19.4489 30.1884 23.4167Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.2"
                      />
                      <path
                        d="M37.3851 26.0293C35.8212 26.0293 34.5488 27.3015 34.5488 28.8655C34.5479 29.3281 34.6605 29.7839 34.877 30.1927C35.0934 30.6016 35.407 30.951 35.7901 31.2102L35.4462 34.0854C35.4384 34.1498 35.4444 34.2151 35.4638 34.277C35.4831 34.339 35.5154 34.3961 35.5584 34.4446C35.6015 34.4932 35.6543 34.532 35.7135 34.5586C35.7726 34.5852 35.8368 34.599 35.9016 34.599H38.8681C38.9329 34.599 38.9971 34.5853 39.0563 34.5587C39.1154 34.5321 39.1683 34.4932 39.2113 34.4447C39.2544 34.3961 39.2867 34.339 39.306 34.2771C39.3253 34.2151 39.3313 34.1498 39.3235 34.0854L38.9796 31.2098C39.3625 30.9504 39.6759 30.601 39.8923 30.1923C40.1087 29.7836 40.2215 29.328 40.2209 28.8655C40.221 27.3015 38.9488 26.0293 37.3851 26.0293ZM38.2757 30.563C38.1934 30.6063 38.1261 30.6736 38.0828 30.7559C38.0394 30.8382 38.0221 30.9318 38.0331 31.0241L38.351 33.6812H36.419L36.7366 31.0241C36.7478 30.9317 36.7305 30.838 36.6871 30.7555C36.6438 30.6731 36.5763 30.6058 36.4938 30.5626C36.1835 30.401 35.9236 30.1573 35.7424 29.858C35.5613 29.5587 35.4659 29.2154 35.4666 28.8655C35.4666 27.8077 36.3273 26.9471 37.3851 26.9471C38.4429 26.9471 39.3034 27.8077 39.3034 28.8655C39.3037 29.2154 39.2081 29.5587 39.0269 29.858C38.8457 30.1573 38.5859 30.4012 38.2757 30.563Z"
                        fill="white"
                      />
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: `${theme.typography.secondaryFontFamily}`,
                      fontWeight: "600",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      paddingBottom: {
                        lg: 2,
                        md: 2,
                        sm: 1,
                        xs: 1,
                      },
                    }}
                  >
                    Transparency
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontWeight: "500",
                      color: `${theme.palette.accent.main}`,
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                    }}
                  >
                    We build transparency into everything we create. In every
                    interaction, and with features like real-time pricing and
                    facility insights, we aim to provide a reliable measure and
                    clear expectations.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Box
                  position={"relative"}
                  textAlign={"center"}
                  sx={{
                    border: "3px solid #FDf3ef",
                    boxShadow: "0 0 20px #FDf3ef",
                    paddingX: 2,
                    paddingTop: 8,
                    paddingBottom: 4,
                  }}
                >
                  <Box
                    position={"absolute"}
                    sx={{
                      top: "0%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <svg
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="35" cy="35" r="35" fill="#CBAB96" />
                      <g clip-path="url(#clip0_7927_182178)">
                        <path
                          d="M52.8518 34.449C51.0722 31.3727 48.5132 28.7926 45.4515 26.9877C42.2962 25.1276 38.6821 24.1445 35 24.1445C31.3179 24.1445 27.7038 25.1277 24.5485 26.9878C21.4868 28.7927 18.9278 31.3727 17.1481 34.449C17.0511 34.6167 17 34.8071 17 35.0009C17 35.1946 17.0511 35.385 17.1481 35.5527C18.9278 38.629 21.4868 41.209 24.5485 43.0139C27.7038 44.8739 31.3179 45.857 35 45.857C38.682 45.857 42.2962 44.8738 45.4515 43.0138C48.5132 41.2089 51.0722 38.6288 52.8518 35.5525C52.9489 35.3848 53 35.1945 53 35.0007C53 34.807 52.9489 34.6167 52.8518 34.449ZM44.3322 41.1152C41.5159 42.7754 38.2888 43.653 35.0001 43.653C31.7113 43.653 28.4843 42.7754 25.6679 41.1152C23.1174 39.6117 20.9574 37.5062 19.3882 35.0008C20.9574 32.4953 23.1174 30.3898 25.6678 28.8864C28.4842 27.2261 31.7113 26.3485 35 26.3485C38.2887 26.3485 41.5158 27.2261 44.3322 28.8864C46.8825 30.3898 49.0425 32.4954 50.6117 35.0008C49.0426 37.5062 46.8826 39.6117 44.3322 41.1152Z"
                          fill="white"
                        />
                        <path
                          d="M34.9993 27.6523C30.9482 27.6523 27.6523 30.9482 27.6523 34.9993C27.6523 39.0504 30.9482 42.3463 34.9993 42.3463C39.0504 42.3463 42.3463 39.0504 42.3463 34.9993C42.3463 30.9482 39.0504 27.6523 34.9993 27.6523ZM34.9993 40.1422C32.1635 40.1422 29.8564 37.8351 29.8564 34.9993C29.8564 32.1635 32.1635 29.8564 34.9993 29.8564C37.8351 29.8564 40.1422 32.1635 40.1422 34.9993C40.1422 37.8351 37.8351 40.1422 34.9993 40.1422Z"
                          fill="white"
                        />
                        <path
                          d="M35 31.3265C32.9744 31.3265 31.3265 32.9744 31.3265 35C31.3265 37.0256 32.9744 38.6735 35 38.6735C37.0256 38.6735 38.6735 37.0256 38.6735 35C38.6735 32.9744 37.0256 31.3265 35 31.3265ZM35 36.4694C34.1898 36.4694 33.5306 35.8102 33.5306 35C33.5306 34.1898 34.1898 33.5306 35 33.5306C35.8102 33.5306 36.4694 34.1898 36.4694 35C36.4694 35.8102 35.8102 36.4694 35 36.4694ZM23.2449 17H18.102C17.4935 17 17 17.4935 17 18.102V23.2449C17 23.8535 17.4935 24.3469 18.102 24.3469C18.7106 24.3469 19.204 23.8534 19.204 23.2449V19.2041H23.2448C23.8534 19.2041 24.3468 18.7106 24.3468 18.1021C24.347 17.4935 23.8535 17 23.2449 17ZM23.2449 50.7959H19.2041V46.7551C19.2041 46.1465 18.7106 45.6531 18.1021 45.6531C17.4935 45.653 17 46.1465 17 46.7551V51.898C17 52.5065 17.4935 53 18.102 53H23.2449C23.8535 53 24.3469 52.5065 24.3469 51.898C24.3469 51.2894 23.8535 50.7959 23.2449 50.7959ZM51.8975 17H46.7546C46.146 17 45.6526 17.4935 45.6526 18.102C45.6526 18.7106 46.1461 19.204 46.7546 19.204H50.7954V23.2448C50.7954 23.8534 51.2889 24.3468 51.8974 24.3468C52.506 24.3468 52.9994 23.8534 52.9994 23.2448V18.102C52.9996 17.4935 52.5061 17 51.8975 17ZM51.8975 45.653C51.2889 45.653 50.7955 46.1465 50.7955 46.7551V50.7958H46.7547C46.1461 50.7958 45.6527 51.2893 45.6527 51.8979C45.6527 52.5064 46.146 53 46.7546 53H51.8975C52.5061 53 52.9995 52.5065 52.9995 51.898V46.7551C52.9996 46.1465 52.5061 45.653 51.8975 45.653Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7927_182178">
                          <rect
                            width="36"
                            height="36"
                            fill="white"
                            transform="translate(17 17)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: `${theme.typography.secondaryFontFamily}`,
                      fontWeight: "600",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      paddingBottom: {
                        lg: 2,
                        md: 2,
                        sm: 1,
                        xs: 1,
                      },
                    }}
                  >
                    Visibility
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontWeight: "500",
                      color: `${theme.palette.accent.main}`,
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                    }}
                  >
                    From technology that tracks freight and raises any potential
                    concerns in real-time, to load-booking tools that put
                    carriers in control, we remove barriers and increase
                    visibility— especially.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={4}>
                <Box
                  position={"relative"}
                  textAlign={"center"}
                  sx={{
                    border: "3px solid #FDf3ef",
                    boxShadow: "0 0 20px #FDf3ef",
                    paddingX: 2,
                    paddingTop: 8,
                    paddingBottom: 4,
                  }}
                >
                  <Box
                    position={"absolute"}
                    sx={{
                      top: "0%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <svg
                      width="70"
                      height="70"
                      viewBox="0 0 70 70"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="35" cy="35" r="35" fill="#CBAB96" />
                      <g clipPath="url(#clip0_7927_182190)">
                        <path
                          d="M52.708 31.2369C52.5537 31.0091 52.3458 30.8227 52.1025 30.6942C51.8592 30.5657 51.5881 30.499 51.313 30.5C50.5667 30.4993 49.8505 30.7946 49.3217 31.3213C49.0721 31.5767 48.8718 31.8761 48.7311 32.2044C48.6547 32.1932 48.5777 32.1875 48.5005 32.1875C48.0691 32.1871 47.6434 32.2858 47.2562 32.4759C46.869 32.6661 46.5307 32.9427 46.2673 33.2844C45.8786 33.8114 45.675 34.4521 45.688 35.1069V39.2244C45.6711 39.2413 45.6374 39.2638 45.6205 39.2806L42.5661 42.3688L41.8911 42.5375C40.8866 42.7929 39.9958 43.3756 39.3592 44.1935C38.7226 45.0114 38.3765 46.0179 38.3755 47.0544V52.4994C38.3747 52.6035 38.4034 52.7057 38.4581 52.7942C38.5128 52.8828 38.5914 52.9541 38.6848 53H45.9411C46.0345 52.9541 46.1131 52.8828 46.1678 52.7942C46.2226 52.7057 46.2512 52.6035 46.2505 52.4994V50.9581L51.808 44.3769C52.5784 43.4622 53.0007 42.3047 53.0005 41.1088V32.2494C53.0088 31.8899 52.9067 31.5365 52.708 31.2369ZM48.5005 33.3125V39.0253C48.1232 38.7583 47.6722 38.6154 47.2101 38.6163C47.0768 38.6177 46.9439 38.6309 46.813 38.6557V35C46.8235 34.5558 47.0047 34.1327 47.3189 33.8185C47.6331 33.5043 48.0562 33.3231 48.5005 33.3125ZM51.8755 41.1093C51.8752 42.0391 51.5462 42.9388 50.9468 43.6496L45.2582 50.3866C45.1726 50.4881 45.1256 50.6166 45.1255 50.7494V51.875H39.5005V47.0516C39.5005 46.2655 39.7628 45.5019 40.2459 44.8818C40.7289 44.2617 41.4051 43.8205 42.1673 43.6282L42.9925 43.4201C43.0918 43.3949 43.1824 43.3432 43.2546 43.2704L46.4192 40.0738C46.5217 39.9668 46.6451 39.8821 46.7818 39.825C46.9184 39.7679 47.0654 39.7396 47.2135 39.7419C47.3613 39.741 47.5078 39.7695 47.6444 39.8258C47.7811 39.8821 47.9051 39.9651 48.0094 40.0698C48.1915 40.2428 48.3068 40.4746 48.3348 40.7242C48.3627 40.9739 48.3017 41.2254 48.1624 41.4344C48.1166 41.4994 48.0662 41.5611 48.0117 41.6189L44.3003 45.3646C44.1981 45.471 44.1418 45.6133 44.1434 45.7608C44.1451 45.9083 44.2047 46.0492 44.3093 46.1532C44.4139 46.2572 44.5552 46.316 44.7027 46.3168C44.8502 46.3177 44.9921 46.2606 45.0979 46.1578L45.1002 46.1561L48.8115 42.4104C49.0706 42.1501 49.2759 41.8413 49.4155 41.5017C49.5552 41.162 49.6265 40.7982 49.6255 40.4309V33.3125C49.6355 32.8681 49.8165 32.4447 50.1308 32.1304C50.4451 31.816 50.8686 31.635 51.313 31.625C51.3869 31.6249 51.46 31.6394 51.5283 31.6677C51.5966 31.6959 51.6586 31.7373 51.7109 31.7896C51.7631 31.8418 51.8046 31.9039 51.8328 31.9722C51.861 32.0404 51.8755 32.1136 51.8755 32.1875V41.1093ZM28.1098 42.5375L27.4348 42.3688L24.3805 39.2806C24.3636 39.2638 24.3298 39.2413 24.313 39.2244V35.1069C24.326 34.4521 24.1223 33.8114 23.7336 33.2844C23.4703 32.9427 23.1319 32.6661 22.7447 32.4759C22.3576 32.2858 21.9318 32.1871 21.5005 32.1875C21.4233 32.1875 21.3462 32.1932 21.2698 32.2044C21.1291 31.8761 20.9289 31.5767 20.6792 31.3213C20.1504 30.7946 19.4343 30.4993 18.688 30.5C18.4129 30.499 18.1417 30.5657 17.8984 30.6942C17.6552 30.8227 17.4472 31.0091 17.293 31.2369C17.0942 31.5365 16.9921 31.8899 17.0005 32.2494V41.1088C17.0002 42.3047 17.4226 43.4622 18.193 44.3769L23.7505 50.9581V52.4994C23.7497 52.6035 23.7784 52.7057 23.8331 52.7942C23.8878 52.8828 23.9664 52.9541 24.0598 53H31.3161C31.4095 52.9541 31.4881 52.8828 31.5428 52.7942C31.5976 52.7057 31.6262 52.6035 31.6255 52.4994V47.0544C31.6245 46.0179 31.2783 45.0114 30.6417 44.1935C30.0051 43.3756 29.1143 42.7929 28.1098 42.5375ZM21.5005 33.3125C21.9447 33.3231 22.3678 33.5043 22.682 33.8185C22.9962 34.1327 23.1774 34.5558 23.188 35V38.6563C23.057 38.6314 22.9241 38.6183 22.7908 38.6169C22.3288 38.6156 21.8779 38.7582 21.5005 39.0247V33.3125ZM30.5005 51.875H24.8755V50.75C24.8755 50.617 24.8285 50.4883 24.7427 50.3866L19.0542 43.6496C18.4546 42.9387 18.1256 42.0387 18.1255 41.1088V32.1875C18.1254 32.1136 18.1399 32.0404 18.1681 31.9722C18.1964 31.9039 18.2378 31.8418 18.2901 31.7896C18.3423 31.7373 18.4043 31.6959 18.4726 31.6677C18.5409 31.6394 18.6141 31.6249 18.688 31.625C19.1324 31.635 19.5558 31.816 19.8701 32.1304C20.1844 32.4447 20.3655 32.8681 20.3755 33.3125V40.4309C20.3744 40.7983 20.4458 41.1623 20.5856 41.502C20.7253 41.8418 20.9307 42.1506 21.19 42.4109L24.9019 46.1561L24.9036 46.1578C25.0094 46.2606 25.1513 46.3177 25.2988 46.3168C25.4464 46.316 25.5876 46.2572 25.6922 46.1532C25.7968 46.0492 25.8564 45.9083 25.8581 45.7608C25.8598 45.6133 25.8034 45.471 25.7012 45.3646L21.9898 41.6189C21.9353 41.5611 21.8849 41.4994 21.8391 41.4344C21.6998 41.2254 21.6388 40.9739 21.6668 40.7242C21.6947 40.4746 21.81 40.2428 21.9921 40.0698C22.0964 39.9649 22.2205 39.8818 22.3573 39.8254C22.4941 39.769 22.6407 39.7404 22.7886 39.7413C22.9367 39.7391 23.0837 39.7674 23.2203 39.8245C23.357 39.8816 23.4804 39.9662 23.5828 40.0732L26.7463 43.2704C26.8185 43.3432 26.9091 43.3949 27.0085 43.4201L27.8337 43.6282C28.5958 43.8205 29.272 44.2617 29.7551 44.8818C30.2381 45.5019 30.5005 46.2655 30.5005 47.0516V51.875ZM46.2505 28.25C46.2505 26.025 45.5907 23.8499 44.3545 21.9998C43.1183 20.1498 41.3613 18.7078 39.3057 17.8564C37.25 17.0049 34.988 16.7821 32.8057 17.2162C30.6234 17.6503 28.6189 18.7217 27.0455 20.2951C25.4722 21.8684 24.4007 23.873 23.9666 26.0552C23.5326 28.2375 23.7553 30.4995 24.6068 32.5552C25.4583 34.6109 26.9003 36.3679 28.7503 37.604C30.6004 38.8402 32.7754 39.5 35.0005 39.5C37.9831 39.4966 40.8426 38.3102 42.9516 36.2012C45.0607 34.0921 46.247 31.2326 46.2505 28.25ZM31.0708 18.9193L33.2067 20.1314C33.239 20.1497 33.2644 20.1781 33.279 20.2122C33.2936 20.2463 33.2966 20.2843 33.2875 20.3203C33.2785 20.3562 33.2578 20.3883 33.2288 20.4114C33.1997 20.4345 33.1639 20.4474 33.1268 20.4481L32.3185 20.4628C32.1904 20.4651 32.0669 20.5111 31.9685 20.5931C31.8701 20.6751 31.8027 20.7883 31.7773 20.9139L31.4337 22.6081L28.5227 25.1551C28.4626 25.208 28.4144 25.273 28.3814 25.346C28.3484 25.4189 28.3314 25.4981 28.3315 25.5781V26.3848L27.8027 26.2526L27.5187 25.4004C27.4844 25.2974 27.421 25.2066 27.3363 25.1388C27.2516 25.0711 27.1491 25.0293 27.0411 25.0184L25.4717 24.8609C25.944 23.5375 26.6853 22.3263 27.649 21.3037C28.6126 20.281 29.7778 19.4692 31.0708 18.9193ZM29.5858 33.6793L29.1308 34.1855C28.988 34.3451 28.884 34.5355 28.8268 34.7418C28.7697 34.9481 28.7609 35.1649 28.8012 35.3752L28.9969 36.3843C27.3994 35.2192 26.1818 33.6081 25.4967 31.7533C24.8117 29.8985 24.6899 27.8827 25.1466 25.9589L26.5663 26.1013L26.833 26.9011C26.8629 26.9909 26.915 27.0717 26.9844 27.136C27.0538 27.2003 27.1383 27.246 27.2301 27.269L27.6317 27.3691L27.04 27.7921C26.967 27.8441 26.9074 27.9128 26.8663 27.9924C26.8252 28.0721 26.8038 28.1604 26.8037 28.25V29.2681C26.8039 29.3411 26.8183 29.4133 26.8459 29.4808L27.9912 32.2798C28.0246 32.3615 28.0767 32.4343 28.1435 32.4921C28.2102 32.55 28.2897 32.5913 28.3753 32.6128L29.3338 32.8524C29.4184 32.8734 29.496 32.9159 29.5592 32.9758C29.6223 33.0357 29.6689 33.111 29.6943 33.1943C29.7198 33.2776 29.7232 33.366 29.7043 33.451C29.6854 33.536 29.6442 33.6146 29.5858 33.6793ZM31.4224 36.062L30.8706 37.4851C30.6788 37.3999 30.4897 37.3087 30.3036 37.2118L29.9053 35.1614C29.8978 35.122 29.8994 35.0813 29.9101 35.0425C29.9209 35.0038 29.9404 34.9681 29.9672 34.9381L30.4223 34.4319C30.6103 34.223 30.741 33.969 30.8019 33.6946C30.8627 33.4202 30.8515 33.1347 30.7694 32.866C30.6873 32.5972 30.5371 32.3542 30.3334 32.1606C30.1296 31.967 29.8793 31.8294 29.6067 31.7611L28.9243 31.5907L27.9287 29.1573V28.5397L29.3822 27.5013C29.4162 27.4758 29.4562 27.4594 29.4984 27.4537C29.5405 27.448 29.5834 27.4531 29.623 27.4687C29.6629 27.4828 29.6986 27.5066 29.7269 27.5381C29.7552 27.5695 29.7752 27.6075 29.785 27.6487L29.8738 28.0042C29.9042 28.1259 29.9744 28.234 30.0733 28.3113C30.1721 28.3885 30.294 28.4305 30.4195 28.4306H32.917C32.9688 28.4305 33.0195 28.446 33.0624 28.4751C33.1054 28.5042 33.1386 28.5455 33.1577 28.5937L33.7146 29.9853C33.7493 30.0721 33.8052 30.1489 33.8771 30.2088C33.949 30.2686 34.0346 30.3095 34.1263 30.3279L35.1951 30.5416C35.2708 30.5567 35.3418 30.5897 35.4021 30.638C35.4624 30.6862 35.5101 30.7483 35.5414 30.8189C35.5727 30.8895 35.5865 30.9665 35.5817 31.0436C35.577 31.1206 35.5538 31.1954 35.514 31.2616L34.6253 32.7444L34.24 32.8732C33.9641 32.9646 33.7241 33.1407 33.554 33.3764C33.3839 33.6121 33.2925 33.8954 33.2927 34.1861V34.802L31.6575 35.7836C31.5503 35.8476 31.4676 35.9456 31.4224 36.062ZM35.0005 38.375C33.9545 38.3748 32.9149 38.2118 31.9191 37.8918L32.4012 36.6487L34.1449 35.6024C34.2281 35.5526 34.297 35.482 34.3449 35.3977C34.3928 35.3133 34.4181 35.218 34.4183 35.1209V34.1861C34.4183 34.1316 34.4354 34.0785 34.4674 34.0344C34.4993 33.9902 34.5443 33.9573 34.596 33.9403L35.1788 33.7456C35.3059 33.7031 35.4136 33.6165 35.4825 33.5015L36.4793 31.8416C36.6117 31.6207 36.6892 31.3713 36.7051 31.1143C36.721 30.8572 36.6749 30.6002 36.5707 30.3647C36.4665 30.1292 36.3072 29.9222 36.1063 29.7611C35.9054 29.6 35.6687 29.4896 35.4162 29.4391L34.6461 29.285L34.2023 28.1763C34.1002 27.9189 33.923 27.6983 33.6938 27.5431C33.4645 27.3878 33.1938 27.3053 32.917 27.3061H30.8571C30.7694 27.0091 30.5825 26.751 30.3277 26.575C30.0728 26.399 29.7654 26.3155 29.4565 26.3386V25.8335L32.3173 23.3293C32.41 23.2481 32.4734 23.1388 32.4979 23.0182L32.7904 21.5799L33.147 21.5731C33.4308 21.568 33.7049 21.4698 33.9274 21.2936C34.1498 21.1174 34.3082 20.873 34.3781 20.598C34.4481 20.323 34.4257 20.0326 34.3144 19.7716C34.2032 19.5105 34.0092 19.2933 33.7624 19.1533L32.5165 18.4456C34.6744 17.8866 36.957 18.0609 39.0051 18.9413C41.0531 19.8216 42.7502 21.3579 43.8295 23.3084L42.6201 23.8265L39.892 22.8033L39.2597 22.1711C38.8944 21.8301 38.4205 21.629 37.9214 21.6032C37.4223 21.5774 36.9302 21.7285 36.5316 22.0299L35.4072 22.9288C35.215 23.0828 35.0673 23.2853 34.9793 23.5153C34.8913 23.7454 34.8662 23.9947 34.9065 24.2377L35.2092 26.0518C35.2217 26.1276 35.2497 26.2001 35.2914 26.2648C35.3331 26.3294 35.3876 26.3848 35.4516 26.4275L37.4395 27.7522C37.5999 27.8593 37.781 27.9316 37.9711 27.9646C38.1611 27.9975 38.356 27.9903 38.5431 27.9434L39.1416 27.7938C39.1945 27.7807 39.2502 27.7845 39.3009 27.8047C39.3515 27.8249 39.3946 27.8604 39.424 27.9063L40.927 30.2716V33.5448C40.927 33.9541 41.0703 34.3505 41.332 34.6653L42.039 35.5124C40.1558 37.3478 37.6301 38.375 35.0005 38.375ZM42.1965 33.9459C42.1031 33.8333 42.0519 33.6917 42.052 33.5454V30.1085C42.0519 30.0017 42.0214 29.8972 41.9642 29.807L40.3735 27.3039C40.2179 27.0581 39.9886 26.8676 39.7184 26.7598C39.4483 26.6519 39.1509 26.6321 38.8688 26.7031L38.2697 26.8528C38.2347 26.8616 38.1983 26.863 38.1628 26.8569C38.1272 26.8508 38.0933 26.8373 38.0633 26.8173L36.2785 25.6271L36.0163 24.0532C36.0088 24.0076 36.0135 23.9608 36.03 23.9175C36.0465 23.8743 36.0742 23.8363 36.1103 23.8074L37.2342 22.9085C37.4134 22.7721 37.6349 22.7032 37.8599 22.7139C38.0849 22.7246 38.2989 22.8142 38.4643 22.967L39.1832 23.6859C39.24 23.7428 39.3083 23.7869 39.3835 23.8153L42.4367 24.9599C42.5724 25.011 42.7227 25.0074 42.8558 24.9498L44.3307 24.3181C45.0485 26.02 45.2865 27.886 45.0188 29.7136C44.751 31.5412 43.9878 33.2605 42.8119 34.685L42.1965 33.9459Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_7927_182190">
                          <rect
                            width="36"
                            height="36"
                            fill="white"
                            transform="translate(17 17)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: `${theme.typography.secondaryFontFamily}`,
                      fontWeight: "600",
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                      paddingBottom: {
                        lg: 2,
                        md: 2,
                        sm: 1,
                        xs: 1,
                      },
                    }}
                  >
                    Impact
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontWeight: "500",
                      color: `${theme.palette.accent.main}`,
                      fontSize: {
                        lg: "16px",
                        md: "16px",
                        sm: "14px",
                        xs: "14px",
                      },
                    }}
                  >
                    Our deep industry knowledge, experienced global team, and
                    extensive freight network widens the breadth of solutions we
                    can offer for any challenge. With more choices come more
                    opportunities to make an impact.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Footer />
    </HelmetProvider>
  );
};

export default About;
