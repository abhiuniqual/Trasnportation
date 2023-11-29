import React from "react";
import { Box, Typography } from "@mui/material";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";

const GridComponent = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box
        marginBottom={3}
        padding={3}
        sx={{
          border: "3px solid #FDf3ef",
          boxShadow: "0 0 20px #FDf3ef",
        }}
      >
        <Box
          sx={{
            position: "relative",
            backgroundImage: `url(${blog2})`,
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
              marginBottom: 2,
            }}
          >
            Total liquid transportation around the world
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
            Far far away, behind the word mountains, far from the countries
          </Typography>
          <Box marginY={2} display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"} gap={2} alignItems={"center"}>
              <Box width={"37px"} height={"37px"}>
                <img src={blog3} alt="blog" width={"100%"} />
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
              color: "#cbab96",
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
            backgroundImage: `url(${blog2})`,
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
              marginBottom: 2,
            }}
          >
            Total liquid transportation around the world
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
            Far far away, behind the word mountains, far from the countries
          </Typography>
          <Box marginY={2} display={"flex"} justifyContent={"space-between"}>
            <Box display={"flex"} gap={2} alignItems={"center"}>
              <Box width={"37px"} height={"37px"}>
                <img src={blog3} alt="blog" width={"100%"} />
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
    </Box>
  );
};

export default GridComponent;
