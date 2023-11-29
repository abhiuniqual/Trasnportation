import React from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import review from "../../images/review.png";
import star from "../../images/Star.png";
import "../../styles/swiper/swiper.css";
import { useTheme } from "@mui/material/styles";

const Review = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: "#FAF7F4",
        paddingX: {
          lg: 14,
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
      textAlign={"center"}
    >
      <Box>
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: {
              lg: "26px",
              md: "24px",
              sm: "22px",
              xs: "20px",
            },
          }}
        >
          Testimonials
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
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
          What Our
          <Typography
            sx={{
              marginLeft: 1,
              position: "relative",
              zIndex: 1,
              fontFamily: `${theme.typography.secondaryFontFamily}`,
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
            }}
          >
            Client Say
          </Typography>
        </Typography>
      </Box>
      <Box marginTop={6}>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          spaceBetween={50}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            360: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide>
            <Box
              sx={{
                border: "2px solid #eaddd3",
                backgroundColor: `${theme.palette.primary.light}`,
              }}
            >
              <Box padding={5}>
                <Box display={"flex"} gap={1}>
                  <img src={review} alt="review" />
                  <Box textAlign={"start"} marginLeft={1}>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        marginBottom: "5px",
                      }}
                    >
                      Ann J. Contreras
                    </Typography>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        opacity: 0.6,
                      }}
                    >
                      AJ Transport
                    </Typography>
                  </Box>
                </Box>
                <Box marginY={2}>
                  <ul
                    style={{
                      display: "flex",
                      listStyle: "none",
                      marginX: 0,
                      padding: 0,
                    }}
                  >
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                  </ul>
                </Box>
                <Typography
                  textAlign={"justify"}
                  sx={{
                    color: "#141414",
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nunc lorem, bibendum in tortor nec, mollis feugiat eros. Nam
                  nec ipsum ante. Vestibulum accuad litora torquent per.
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                border: "2px solid #eaddd3",
                backgroundColor: `${theme.palette.primary.light}`,
              }}
            >
              <Box padding={5}>
                <Box display={"flex"} gap={1}>
                  <img src={review} alt="review" />
                  <Box textAlign={"start"} marginLeft={1}>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        marginBottom: "5px",
                      }}
                    >
                      Ann J. Contreras
                    </Typography>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        opacity: 0.6,
                      }}
                    >
                      AJ Transport
                    </Typography>
                  </Box>
                </Box>
                <Box marginY={2}>
                  <ul
                    style={{
                      display: "flex",
                      listStyle: "none",
                      marginX: 0,
                      padding: 0,
                    }}
                  >
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                  </ul>
                </Box>
                <Typography
                  textAlign={"justify"}
                  sx={{
                    color: "#141414",
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nunc lorem, bibendum in tortor nec, mollis feugiat eros. Nam
                  nec ipsum ante. Vestibulum accuad litora torquent per.
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                border: "2px solid #eaddd3",
                backgroundColor: `${theme.palette.primary.light}`,
              }}
            >
              <Box padding={5}>
                <Box display={"flex"} gap={1}>
                  <img src={review} alt="review" />
                  <Box textAlign={"start"} marginLeft={1}>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        marginBottom: "5px",
                      }}
                    >
                      Ann J. Contreras
                    </Typography>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        opacity: 0.6,
                      }}
                    >
                      AJ Transport
                    </Typography>
                  </Box>
                </Box>
                <Box marginY={2}>
                  <ul
                    style={{
                      display: "flex",
                      listStyle: "none",
                      marginX: 0,
                      padding: 0,
                    }}
                  >
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                  </ul>
                </Box>
                <Typography
                  textAlign={"justify"}
                  sx={{
                    color: "#141414",
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nunc lorem, bibendum in tortor nec, mollis feugiat eros. Nam
                  nec ipsum ante. Vestibulum accuad litora torquent per.
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                border: "2px solid #eaddd3",
                backgroundColor: `${theme.palette.primary.light}`,
              }}
            >
              <Box padding={5}>
                <Box display={"flex"} gap={1}>
                  <img src={review} alt="review" />
                  <Box textAlign={"start"} marginLeft={1}>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        marginBottom: "5px",
                      }}
                    >
                      Ann J. Contreras
                    </Typography>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        opacity: 0.6,
                      }}
                    >
                      AJ Transport
                    </Typography>
                  </Box>
                </Box>
                <Box marginY={2}>
                  <ul
                    style={{
                      display: "flex",
                      listStyle: "none",
                      marginX: 0,
                      padding: 0,
                    }}
                  >
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                  </ul>
                </Box>
                <Typography
                  textAlign={"justify"}
                  sx={{
                    color: "#141414",
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nunc lorem, bibendum in tortor nec, mollis feugiat eros. Nam
                  nec ipsum ante. Vestibulum accuad litora torquent per.
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                border: "2px solid #eaddd3",
                backgroundColor: `${theme.palette.primary.light}`,
              }}
            >
              <Box padding={5}>
                <Box display={"flex"} gap={1}>
                  <img src={review} alt="review" />
                  <Box textAlign={"start"} marginLeft={1}>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        marginBottom: "5px",
                      }}
                    >
                      Ann J. Contreras
                    </Typography>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        opacity: 0.6,
                      }}
                    >
                      AJ Transport
                    </Typography>
                  </Box>
                </Box>
                <Box marginY={2}>
                  <ul
                    style={{
                      display: "flex",
                      listStyle: "none",
                      marginX: 0,
                      padding: 0,
                    }}
                  >
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                  </ul>
                </Box>
                <Typography
                  textAlign={"justify"}
                  sx={{
                    color: "#141414",
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nunc lorem, bibendum in tortor nec, mollis feugiat eros. Nam
                  nec ipsum ante. Vestibulum accuad litora torquent per.
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              sx={{
                border: "2px solid #eaddd3",
                backgroundColor: `${theme.palette.primary.light}`,
              }}
            >
              <Box padding={5}>
                <Box display={"flex"} gap={1}>
                  <img src={review} alt="review" />
                  <Box textAlign={"start"} marginLeft={1}>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        marginBottom: "5px",
                      }}
                    >
                      Ann J. Contreras
                    </Typography>
                    <Typography
                      sx={{
                        color: "#141414",
                        fontFamily: `${theme.typography.fontFamily}`,
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        opacity: 0.6,
                      }}
                    >
                      AJ Transport
                    </Typography>
                  </Box>
                </Box>
                <Box marginY={2}>
                  <ul
                    style={{
                      display: "flex",
                      listStyle: "none",
                      marginX: 0,
                      padding: 0,
                    }}
                  >
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                    <li>
                      <img src={star} alt="star" />
                    </li>
                  </ul>
                </Box>
                <Typography
                  textAlign={"justify"}
                  sx={{
                    color: "#141414",
                    fontFamily: `${theme.typography.fontFamily}`,
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nunc lorem, bibendum in tortor nec, mollis feugiat eros. Nam
                  nec ipsum ante. Vestibulum accuad litora torquent per.
                </Typography>
              </Box>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Box>
  );
};

export default Review;
