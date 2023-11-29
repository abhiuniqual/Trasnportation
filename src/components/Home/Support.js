import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import hour1 from "../../images/hour1.png";
import hour2 from "../../images/hour2.png";
import hour3 from "../../images/hour3.png";
import { Box, Button, Typography } from "@mui/material";
import "../../styles/swiper/navigation.css";
import { useTheme } from "@mui/material/styles";

const Support = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        paddingX: {
          lg: 16,
          md: 10,
          sm: 4,
          xs: 2,
        },
        paddingTop: {
          lg: 16,
          md: 20,
          sm: 18,
          xs: 8,
        },
        paddingBottom: {
          lg: 12,
          md: 16,
          xs: 10,
          xs: 5,
        },
      }}
    >
      <Box>
        <Swiper
          style={{
            height: "400px",
          }}
          slidesPerView={1}
          loop={true}
          speed={2000}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            320: {
              spaceBetween: 20,
              centeredSlides: true,
            },
            360: {
              spaceBetween: 20,
              centeredSlides: true,
            },
            480: {
              spaceBetween: 20,
              centeredSlides: true,
            },
            768: {
              spaceBetween: 30,
            },
            1024: {
              spaceBetween: 40,
            },
            1280: {
              spaceBetween: 50,
            },
            1536: {
              spaceBetween: 60,
            },
          }}
          modules={[Navigation, Autoplay, Pagination]}
        >
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  md: "row",
                  sm: "column",
                  xs: "column",
                },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  height: {
                    lg: "400px",
                    md: "350px",
                    sm: "300px",
                    xs: "300px",
                  },
                  width: {
                    md: "60%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <img
                  src={hour1}
                  alt="hour1"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                padding={4}
                sx={{
                  width: {
                    md: "40%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: {
                      lg: "34px",
                      md: "30px",
                      sm: "28px",
                      xs: "24px",
                    },
                    fontFamily: `${theme.typography.fontFamily}`,
                  }}
                >
                  All-in-One Transportation Hub
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "22px",
                      md: "20px",
                      sm: "18px",
                      xs: "18px",
                    },
                    marginTop: 1,
                    marginBottom: {
                      md: 8,
                      sm: 8,
                      xs: 9,
                    },
                    fontFamily: `${theme.typography.fontFamily}`,
                  }}
                >
                  Comprehensive services for trucks, ships, trains, and planes,
                  unmatched by other platforms.
                </Typography>
                <Button fullWidth variant="explore" sx={{ paddingY: 2 }}>
                  Explore More
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  md: "row",
                  sm: "column",
                  xs: "column",
                },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  height: {
                    lg: "400px",
                    md: "350px",
                    sm: "300px",
                    xs: "300px",
                  },
                  width: {
                    md: "60%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <img
                  src={hour2}
                  alt="hour2"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                padding={4}
                sx={{
                  width: {
                    md: "40%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: {
                      lg: "32px",
                      md: "28px",
                      sm: "24px",
                      xs: "20px",
                    },
                  }}
                >
                  Driver Empowerment
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "22px",
                      md: "20px",
                      sm: "18px",
                      xs: "18px",
                    },
                    marginTop: 1,
                    marginBottom: {
                      md: 18,
                      sm: 9,
                      xs: 9,
                    },
                  }}
                >
                  Drivers can create profiles and post job offers for easier
                  hiring, a unique feature.
                </Typography>
                <Button fullWidth variant="explore" sx={{ paddingY: 2 }}>
                  Explore More
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  md: "row",
                  sm: "column",
                  xs: "column",
                },
                width: "100%",
              }}
            >
              <Box
                sx={{
                  height: {
                    lg: "400px",
                    md: "350px",
                    sm: "300px",
                    xs: "300px",
                  },
                  width: {
                    md: "60%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <img
                  src={hour3}
                  alt="hour3"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
              <Box
                paddingX={2}
                paddingY={4}
                sx={{
                  width: {
                    md: "40%",
                    sm: "100%",
                    xs: "100%",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: {
                      lg: "32px",
                      md: "28px",
                      sm: "24px",
                      xs: "20px",
                    },
                  }}
                >
                  Resource Sharing
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      lg: "22px",
                      md: "20px",
                      sm: "18px",
                      xs: "18px",
                    },
                    marginTop: 1,
                    marginBottom: {
                      md: 14,
                      sm: 9,
                      xs: 9,
                    },
                  }}
                >
                  Smaller companies can compete with industry giants by pooling
                  resources for shared services.
                </Typography>
                <Button fullWidth variant="explore" sx={{ paddingY: 2 }}>
                  Explore More
                </Button>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Support;
