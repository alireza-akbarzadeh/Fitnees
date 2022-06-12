import React from "react";
// @mui
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImg from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        p: "20px",
      }}
    >
      <Typography color='#ff2625' fontWeight={"600"} fontSize={"26px"}>
        Fitness Club
      </Typography>
      <Typography
        sx={{ fontSize: { lg: "44px", sm: "40px" } }}
        fontWeight={"700"}
        mb={"22px"}
        mt={"30px"}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography mb={4} lineHeight={"35px"} fontSize={"22"}>
        Check out the most
      </Typography>

      <Button
        sx={{ backgroundColor: "#ff2526", padding: "10px" }}
        href='#exercises'
        variant='contained'
        color='error'
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={"600px"}
        color='#ff2525'
        sx={{
          opacity: 0.1,
          fontSize: "200px",
          display: { lg: "block", xs: "none" },
        }}
      >
        Exercises
      </Typography>
      <img className='hero-banner-img' src={HeroBannerImg} alt='Banner' />
    </Box>
  );
};

export default HeroBanner;
