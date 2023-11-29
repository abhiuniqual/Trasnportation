import React, { useState, useEffect } from "react";
// import { Box, Typography } from '@mui/material';
import HomeNavbar from "../components/Home/HomeNavbar";
import Footer from "../components/Footer";
import Hero from "../components/Home/Hero";
import Track from "../components/Home/Track";
import Support from "../components/Home/Support";
import Work from "../components/Home/Work";
import Shipment from "../components/Home/Shipment";
import Review from "../components/Home/Review";
import Join from "../components/Home/Join";
import Benefit from "../components/Home/Benefit";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect((_) => {
    const handleScroll = (_) => {
      if (window.pageYOffset > 500) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll, false);
    return (_) => {
      window.addEventListener("scroll", handleScroll, false);
    };
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Home | {process.env.REACT_APP_NAME}</title>
      </Helmet>
      {/* <Box sx={{
      backgroundImage: `url("../images/Hero.png")`
    }}>
        <Typography>Curry Match</Typography>
        <Typography>Your Gateway to Efficient Supply Chain Solutions</Typography>
      </Box> */}
      <HomeNavbar navbar={navbar} />
      <Hero />
      <Track />
      <Support />
      <Benefit />
      <Work />
      <Shipment />
      <Review />
      <Join />
      <Footer />
    </HelmetProvider>
  );
};

export default Home;
