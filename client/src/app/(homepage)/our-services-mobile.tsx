"use client";

import Image from "next/image";

import { Box, Grid, Typography } from "@mui/material";

import logo from "/public/assets/images/favicon.png";
import banner2 from "/public/assets/images/features/feature-img-4.jpg";
import banner3 from "/public/assets/images/features/feature-img-3.jpg";
import { motion, Variants } from "framer-motion";
import { useIsMobile } from "../lib/helpers";
import { Height } from "@mui/icons-material";

const gridWithTextsStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  px: 5,
  py: 5,
};

const typographyStyles = {
  lineHeight: " 1.5",
  fontSize: "1rem",
  color: "#9a9a9a",
};

// const itemVariants: Variants = {
//   offscreen: {
//     x: -2000,
//   },
//   onscreen: {
//     x: 50,
//     transition: {
//       duration: 1,
//     },
//   },
// };

// const easeInVariants: Variants = {
//   offscreen: {
//     opacity: 0,
//   },
//   onscreen: {
//     opacity: 1,
//     transition: {
//       duration: 3,
//       delay: 1
//     },

//   },
// };

const OurServicesMobile = () => {
  const isMobile = useIsMobile();

  return (
    <Grid container my={5}>
      <Grid
        item
        xs={12}
        sx={{
          backgroundColor: "#ffe9e6",
          ...gridWithTextsStyles,
        }}
      >
        <Box position="relative" width={80} height={80} sx={{ mb: 2 }}>
          <Image
            src={logo}
            alt="Background Image"
            fill={true}
            objectFit="contain"
          />
        </Box>

        <Typography
          variant="h1"
          mb={4}
          sx={{ color: "#a4727e", fontStyle: "italic" }}
          fontSize="1.5rem"
        >
          When to hire an Interior Designer?
        </Typography>

        <Box>
          <Typography variant="h5" sx={{ ...typographyStyles }}>
            Your home is the one place to relax and reset, so making sure it’s a
            space you feel good spending time in!
          </Typography>
          <br />
          <Typography variant="h5" sx={{ ...typographyStyles }}>
            Your interior designer can give your home a new life by curating a
            style that offers style but fits your personality and the character
            of your home perfectly. <br />
            <br />
            They’ll consider materials, color schemes, and furniture, bringing
            them all together to create an updated look.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} position="relative" height="300px" width="100%">
        <Image
          src={banner2}
          alt="Background Image"
          fill={true}
          objectFit="cover"
        />
      </Grid>
    </Grid>
  );
};

export default OurServicesMobile;
