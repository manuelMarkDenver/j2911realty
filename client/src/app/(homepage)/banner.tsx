"use client";
import Image from 'next/image';

import {
  Box,
  Button,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { useIsMobile } from "../lib/helpers";

import banner from '../../../public/assets/images/banner-img-3.jpg'

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
  const theme = useTheme();

  return (
    <Box className="relative h-screen z-0">
      <Image
        src={banner}
        alt="Background Image"
        className="w-full h-full object-cover absolute inset-0"
        fill={true}
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
            sx={{
              fontSize: !useIsMobile() ? "2rem" : "1rem",
              color: theme.palette.primary.main,
            }}
          >
            Design The Home of Your Dreams
          </Typography>
          <Typography
            component="h1"
            sx={{
              color: theme.palette.primary.main,
              fontSize: !useIsMobile() ? "5rem" : "2.5rem",
              mb: "40px",
              fontStyle: "italic",
            }}
          >
            Beauty Is In The Details
          </Typography>
          <CustomButton
            variant="contained"
            size={!useIsMobile() ? "large" : "small"}
          >
            Book With Us
          </CustomButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default Banner;
