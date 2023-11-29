import React from "react";
import { Box, Typography } from "@mui/material";
import blog from "../../images/blog.png";
import blog3 from "../../images/blog3.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTheme } from "@mui/material/styles";

const GridComponent2 = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        border: "3px solid #FDf3ef",
        boxShadow: "0 0 20px #FDf3ef",
      }}
      padding={3}
    >
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${blog})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: {
            lg: "225px",
            md: "200px",
            sm: "180px",
            xs: "180px",
          },
        }}
        marginBottom={1}
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
              background: "rgba(20, 20, 20, 0.6)",
              backdropFilter: "blur(20px)",
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
      <Typography
        marginBottom={2}
        sx={{
          fontSize: {
            lg: "19px",
            md: "19px",
            sm: "16px",
            xs: "16px",
          },
          fontWeight: "700",
          fontFamily: `${theme.typography.fontFamily}`,
        }}
      >
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia there live the blind texts.
      </Typography>
      <Typography
        sx={{
          fontSize: {
            lg: "17px",
            md: "17px",
            sm: "14px",
            xs: "14px",
          },
          fontWeight: "500",
          fontFamily: `${theme.typography.fontFamily}`,
          color: `${theme.palette.accent.main}`,
        }}
        marginY={2}
      >
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia there live the blind texts. Separated they livethere
        live the blind texts. Far far away, behind the word mountains, far from
        the countries Vokalia and Consonantia there live the blind texts.
        Separated they livethere live the blind texts.
      </Typography>
      <Typography
        sx={{
          fontSize: {
            lg: "17px",
            md: "17px",
            sm: "14px",
            xs: "14px",
          },
          fontWeight: "500",
          fontFamily: `${theme.typography.fontFamily}`,
          color: `${theme.palette.accent.main}`,
        }}
      >
        Far away, behind the word mountains, far from the countries Vokalia and
        Consonantia there live the blind texts. Separated they livethere live
        the blind texts. Far far away, behind the word mountains, far from the
        countries Vokalia and Consonantia there live the blind texts. Separated
        they livethere live the blind texts.Far far away, behind the word
        mountains, far from the countries Vokalia and Consonantia there live the
        blind texts. Separated they livethere live the blind texts. Far far
        away, behind the word mountains, far from the countries Vokalia and
        Consonantia there live the blind texts. Separated they livethere live
        the blind texts. Far far away, behind the word mountains, far from the
        countries Vokalia and Consonantia there live the blind texts. Far far
        away, behind the word mountains, far from the countries Vokalia and
        Consonantia there live the blind texts. Separated they live there live
        the blind texts.
        <br /> Far far away, behind the word mountains, far from the countries
        Vokalia and Consonantia there live the blind texts. Separated they
        livethere live the blind texts.
      </Typography>
      <Typography
        sx={{
          fontSize: {
            lg: "17px",
            md: "17px",
            sm: "14px",
            xs: "14px",
          },
          fontWeight: "500",
          fontFamily: `${theme.typography.fontFamily}`,
          color: `${theme.palette.accent.main}`,
        }}
        marginY={2}
      >
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia there live the blind texts. Separated they live there
        live the blind texts. Far far away, behind the word mountains, <br />
        far from the countries Vokalia and Consonantia there live the blind
        texts. Separated they live there live the blind texts.
      </Typography>
      <Box marginY={1} display={"flex"} justifyContent={"space-between"}>
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
  );
};

export default GridComponent2;
