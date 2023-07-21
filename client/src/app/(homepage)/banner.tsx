"use client";

import { Box, Button, Stack, Typography, styled } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

const useIsMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile;
};

const CustomButton = styled(Button)({
  width: "300px",
  padding: "15px 0",
  fontWeight: "bold",
  color: "white",
  backgroundColor: "#ed4b82",
  letterSpacing: "1.5px",
  "&:hover": {
    backgroundColor: "white",
    color: "black",
  },
});

const Banner = () => {
  return (
    <Box className="relative h-screen">
      <img
        src="/assets/images/banner-img-3.jpg"
        alt="Background Image"
        className="w-full h-full object-cover absolute inset-0"
      />
      <Box className="absolute inset-0 bg-black opacity-30"></Box>
      <Box className="absolute inset-0 flex items-center justify-center">
        <Stack
          direction="column"
          className="text-white p-8 text-center"
          alignItems="center"
        >
          <Typography
            component="h5"
            className="text-slate-200"
            sx={{
              fontSize: !useIsMobile() ? "2rem" : "1rem",
            }}
          >
            A Home That Reflects Your Tastes
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontSize: !useIsMobile() ? "5rem" : "2.5rem",
              mb: "40px",
            }}
            className="text-slate-200"
          >
            Design The Home
            <br /> of Your <span className="italic">Dreams</span>
          </Typography>
          <CustomButton variant="contained" size={!useIsMobile() ? "large" : "small"}>
            Book With Us
          </CustomButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Banner;
