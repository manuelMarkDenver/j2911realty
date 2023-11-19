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

const CustomTaskAltIcon = styled(TaskAltIcon)({
  "&.MuiSvgIcon-root": {
    fill: "#403f3f",
  },
});

const CustomTypography = styled(Typography)({
  fontFamily: "Arial",
  color: "#403f3f",
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
      <Box className="absolute inset-0 bg-black opacity-10"></Box>
      <Box className="absolute inset-0 flex items-center justify-start">
        <Stack
          direction="column"
          className="text-white"
          sx={{
            backgroundColor: "rgba(255, 182, 193, 0.5)",
            px: "5%",
            py: "10%",
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
          }}
        >
          <Typography
            component="h5"
            sx={{
              fontSize: !useIsMobile() ? "2rem" : "1rem",
              color: "#403f3f",
            }}
          >
            Design the home of your dreams
          </Typography>
          <Typography
            component="h1"
            sx={{
              color: "black",
              fontSize: !useIsMobile() ? "5rem" : "2.5rem",
              fontStyle: "italic",
              mb: 4,
            }}
          >
            Beauty Is In The Details
          </Typography>
          <Stack gap={2} mb={4}>
            <Stack
              gap={1}
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <CustomTaskAltIcon fontSize="large" sx={{ color: "#fff" }} />
              <CustomTypography variant="h4">
                Highest-rated Designers
              </CustomTypography>
            </Stack>
            <Stack
              gap={1}
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <CustomTaskAltIcon fontSize="large" sx={{ color: "#fff" }} />
              <CustomTypography variant="h4">
                Cost-effective pricing
              </CustomTypography>
            </Stack>
            <Stack
              gap={1}
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <CustomTaskAltIcon fontSize="large" sx={{ color: "#fff" }} />
              <CustomTypography variant="h4">
                Simple booking process
              </CustomTypography>
            </Stack>
          </Stack>
          <Link href="https://calendly.com/j2911realty" target="_blank">
            <CustomButton
              variant="contained"
              size={!useIsMobile() ? "large" : "small"}
            >
              Book Your Consultation
            </CustomButton>
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Banner;
