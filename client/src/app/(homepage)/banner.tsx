"use client";
import Image from "next/image";

import {
  Typography,
  styled,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import { useIsMobile } from "../lib/helpers";

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
  return (
    <ParallaxBanner
      style={{
        height: "150vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <ParallaxBannerLayer
        speed={-70}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src={banner3}
          alt="Background Image"
          fill={true}
          objectFit="contain"
        />
      </ParallaxBannerLayer>
    </ParallaxBanner>
  );
};

export default Banner;
