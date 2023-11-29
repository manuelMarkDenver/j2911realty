"use client";
import Image from "next/image";

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { useIsMobile } from "../lib/helpers";

import banner from "../../../public/assets/images/banner-img-3.jpg";
import Link from "next/link";
import CustomButton from './components/custom-button';

const CustomTaskAltIcon = styled(TaskAltIcon)({
  "&.MuiSvgIcon-root": {
    fill: "#fff",
  },
});

const CustomTypography = styled(Typography)({
  fontFamily: "Arial",
  color: "#fff",
  fontSize: "1.5rem",
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
      <Box className="absolute inset-0 bg-black opacity-40"></Box>
      <Box className="absolute inset-0 flex pt-60 justify-start">
        <Stack
          direction="column"
          className="text-white"
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            // backgroundColor: "rgba(214,106,127, 0.9 )",
            px: "5%",
            // borderRadius: "50px",
            // borderTopRightRadius: "50px",
            // borderBottomRightRadius: "50px",
          }}
        >
          <Typography
            component="h1"
            sx={{
              color: "#F5F5F5",
              fontSize: !useIsMobile() ? "5rem" : "2.5rem",
              fontStyle: "italic",
              mb: 2,
            }}
          >
            Beauty Is In The Details
          </Typography>
          <Link href="https://calendly.com/j2911realty" target="_blank">
            <CustomButton title="Book a Consultation" />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Banner;
