"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import logo from "../../../public/assets/images/favicon.png";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import PricingCard from "./components/pricing-card";
import ImageCarousel from './components/image-carousel';
import ImageCarouselContainer from './image-carousel-container';

type ProjectsProps = {
  itemData: any;
};

const gridStyle = {
  height: "100dvh",
};

const borderImageStyle = {
  position: "absolute",
  top: "50%", // Center vertically
  left: "50%", // Center horizontally
  transform: "translate(-50%, -50%)", // Center the element precisely
  width: "97%",
  height: "97%",
  border: "5px solid #ed4b82",
  boxSizing: "border-box", // Ensure that the border is included in the size
  zIndex: 1,
};

const Projects2 = (props: ProjectsProps) => {
  const { itemData } = props;

  return (
    <>
      <Container maxWidth="xl" disableGutters sx={{ py: 20 }}>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
          }}
          spacing={50}
        >
          <Grid
            item
            xs={3}
            sx={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            {/* <Image src={logo} alt={itemData} width={300} height={200} /> */}
            <Typography
              variant="h2"
              fontSize="6rem"
              fontWeight={400}
              textAlign="left"
              sx={{ letterSpacing: "1.9rem" }}
            >
              Beauty Is In The Details.
            </Typography>
          </Grid>

          <Grid item xs={9}>
            <Typography
              textAlign="center"
              variant="h4"
              sx={{
                fontSize: "1.3rem",
                fontStyle: "italic",
                letterSpacing: "2.5px",
                color: "#bababa",
                lineHeight: 1.5,
              }}
            >
              We thrive in taking homes and accenting their natural beauty while
              bringing together modern design and timeless beauty. We are
              designing homes that hold your personality and embark each project
              with new eyes. We are committed to giving you an elevated
              experience while adhering to your budget.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* <Box width="100%">
        <Grid container gap={5}>
          <Grid
            item
            xs={12}
            sx={{
              height: "150dvh",
              position: "relative",
            }}
          >
            <Image src={itemData[1]} alt={itemData} fill={true} />
          </Grid>
          <Grid
            container
            item
            xs={12}
            sx={{
              height: "100dvh",
            }}
          >
            <Grid item xs={8} position="relative">
              <Image src={itemData[3]} alt={itemData} fill={true} />
            </Grid>
            <Grid item xs={4} sx={{ backgroundColor: "#dd8fa4" }}>
              test
            </Grid>
          </Grid>
        </Grid>
      </Box> */}
    </>
  );
};

export default Projects2;
