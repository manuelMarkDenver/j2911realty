"use client";
import Image from "next/image";

import { Box, Typography, styled } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { useBreakpoints, useIsMobile } from "../lib/helpers";

import Link from "next/link";
import CustomButton from "./components/custom-button";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import banner from "../../../public/assets/images/banner-img-3.jpg";
import banner2 from "/public/assets/images/mission-vision/mission-vision-img.jpg";
import banner3 from "/public/assets/images/features/feature-img-3.jpg";

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

const bannerStr = "../../../public/assets/images/banner-img-3.jpg";

const Banner = () => {
  const isMobile = useIsMobile();
  const { md, mdDown } = useBreakpoints();
  return md ? (
    <ParallaxBanner
      style={{
        height: md ? "200dvh" : "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <ParallaxBannerLayer
        speed={-100}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={banner}
          alt="Background Image"
          fill={true}
          objectFit={md ? "contain" : "cover"}
        />
      </ParallaxBannerLayer>
    </ParallaxBanner>
  ) : (
    <Box
      sx={{
        position: "relative",
        height: { xs: "30dvh", sm: "70dvh", md: "200dvh" },
        width: "100%",
      }}
    >
      <Image
        src={banner}
        alt="Background Image"
        fill={true}
        objectFit={md ? "contain" : "cover"}
      />
    </Box>
  );
};

export default Banner;
