import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { Helmet, HelmetProvider } from "react-helmet-async";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTheme } from "@mui/material/styles";

const data = [
  {
    summery: "How do I sign up for an account on this platform?",
    details: `To sign up, click on the "Sign Up" button on the homepage. Fill in the required information, including your name, email, and password. Follow the on-screen prompts to complete the registration process.`,
  },
  {
    summery:
      "What information do I need to provide during the registration process?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery: "Is my personal and company information secure on this platform?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery: "What are the benefits of creating an account?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery: "Do I need to pay to sign up or use this platform?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery: "How can I reset my password if I forget it?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery:
      "What should I do if I encounter issues during the registration process?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery: "Can I edit my profile or company information after registration?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery: "Can I edit my profile or company information after registration?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery: "What is the verification process for my account?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery: "What happens if I want to delete or deactivate my account?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery:
      "How do I find and connect with other users or businesses on the platform?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery: "How can I post or respond to job listings or service requests?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery: "What payment methods are accepted on this platform?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
  {
    summery:
      "What support or customer service options are available if I have questions or issues?",
    details:
      "Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing pellentesque egestas parturient elementum tellus ultrices. At nibh accumsan malesuada rhoncus cras urna.",
  },
];

const Faq = () => {
  const theme = useTheme();
  const [isExpand, setIsExpand] = useState(null);

  const handleToggle = (index) => {
    if (isExpand === index) {
      setIsExpand(null);
    } else {
      setIsExpand(index);
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>FAQ | {process.env.REACT_APP_NAME}</title>
      </Helmet>
      <Navbar />
      <Box
        sx={{
          marginX: {
            lg: 30,
            md: 20,
            sm: 6,
            xs: 4,
          },
          marginY: {
            lg: 18,
            md: 18,
            sm: 14,
            xs: 14,
          },
        }}
      >
        <Box textAlign={"center"}>
          <Typography
            sx={{
              fontFamily: `${theme.typography.secondaryFontFamily}`,
              fontWeight: "700",
              fontSize: {
                lg: "52px",
                md: "42px",
                sm: "30px",
                xs: "30px",
              },
            }}
          >
            FAQ
          </Typography>
          <Typography
            sx={{
              fontFamily: `${theme.typography.fontFamily}`,
              fontWeight: "500",
              fontSize: {
                lg: "20px",
                md: "20px",
                sm: "18px",
                xs: "18px",
              },
              color: `${theme.palette.accent.main}`,
              paddingX: {
                md: 6,
                xs: 0,
              },
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Non tortor adipiscing
            pellentesque egestas parturient elementum tellus ultrices. At nibh
            accumsan malesuada rhoncus cras urna.
          </Typography>
        </Box>
        <Box marginY={4}>
          {data.map((data, i) => {
            return (
              <Accordion
                sx={{
                  paddingY: 3,
                  paddingX: 4,
                  marginBottom: "32px",
                  borderRadius: "18px",
                  border: "2px solid #ffffff",
                  boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
                  "&:before": {
                    display: "none",
                  },
                  "&.Mui-expanded": {
                    border: "2px solid #cbab96",
                    borderRadius: "18px",
                  },
                  "&.MuiPaper-root-MuiAccordion-root.Mui-expanded": {},
                }}
                key={i}
                expanded={isExpand === i}
                onChange={() => handleToggle(i)}
              >
                <AccordionSummary
                  sx={{
                    "& .MuiAccordionSummary-expandIconWrapper ": {
                      transform: "rotate(0deg)",
                      "&.Mui-expanded": {
                        transform: "rotate(90deg)",
                      },
                    },
                  }}
                  expandIcon={
                    <KeyboardArrowRightIcon
                      sx={{
                        color: isExpand === i ? "#ffffff" : "#cbab96",
                        backgroundColor: isExpand === i ? "#cbab96" : "ffffff",
                        width: "30px",
                        height: "50px",
                        padding: "0px 10px 0px 10px",
                        borderRadius: "50%",
                        borderColor: isExpand === i ? "#cbab96" : "#ffffff",
                        boxShadow: "0px 5px 16px 0px rgba(8, 15, 52, 0.06)",
                      }}
                    />
                  }
                >
                  <Typography
                    sx={{
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontWeight: "600",
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "17px",
                        xs: "17px",
                      },
                    }}
                  >
                    {data.summery}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      paddingRight: 10,
                      fontFamily: `${theme.typography.fontFamily}`,
                      fontWeight: "500",
                      color: `${theme.palette.accent.main}`,
                      fontSize: {
                        lg: "20px",
                        md: "20px",
                        sm: "17px",
                        xs: "17px",
                      },
                    }}
                  >
                    {data.details}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Box>
      <Footer />
    </HelmetProvider>
  );
};

export default Faq;
