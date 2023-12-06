"use client";

import Image from "next/image";

import { Box, Grid, Typography } from "@mui/material";

import logo from "/public/assets/images/favicon.png";
import banner2 from "/public/assets/images/features/feature-img-4.webp";
import banner3 from "/public/assets/images/features/feature-img-3.jpg";
import { motion, Variants } from "framer-motion";

const gridStyles = {
  height: "100dvh",
  width: "100%",
};

const gridWithTextsStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  px: 10,
};

const typographyStyles = {
  letterSpacing: "0.9px",
  lineHeight: " 1.5",
};

const itemVariants: Variants = {
  offscreen: {
    x: -2000,
  },
  onscreen: {
    x: 50,
    transition: {
      duration: 1,
    },
  },
};

const easeInVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 3,
      delay: 1
    },
    
  },
};

const OurServices = () => {
  return (
    <Grid container py={20}>
      <Grid container item xs={12} sx={{ ...gridStyles }}>
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: "#ffe9e6",
            ...gridWithTextsStyles,
          }}
      >
          <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={itemVariants}>
              <Typography
                variant="h1"
                mb={4}
                sx={{ color: "#a4727e", fontStyle: "italic" }}
              >
                When to hire an Interior Designer?
              </Typography>
            </motion.div>

            <motion.div variants={easeInVariants}>
              <Box>
                <Typography variant="h5" sx={{ ...typographyStyles }}>
                  Your home is the one place to relax and reset, so making sure
                  it’s a space you feel good spending time in!
                </Typography>
                <br />
                <Typography variant="h5" sx={{ ...typographyStyles }}>
                  Your interior designer can give your home a new life by
                  curating a style that offers style but fits your personality
                  and the character of your home perfectly. <br />
                  <br />
                  They’ll consider materials, color schemes, and furniture,
                  bringing them all together to create an updated look.
                </Typography>
              </Box>
            </motion.div>
          </motion.div>
        </Grid>
        <Grid item xs={6} position="relative">
          <Image
            src={banner3}
            alt="Background Image"
            fill={true}
            objectFit="cover"
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} sx={{ ...gridStyles }}>
        <Grid item xs={6} position="relative">
          <Image
            src={banner2}
            alt="Background Image"
            fill={true}
            objectFit="cover"
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            // backgroundColor: "#000",
            ...gridWithTextsStyles,
          }}
        >
          <motion.div initial="offscreen" whileInView="onscreen">
            <Box position="relative" width={800} height={800}>
              <motion.div variants={easeInVariants}>
                <Image
                  src={logo}
                  alt="Background Image"
                  fill={true}
                  objectFit="contain"
                />
              </motion.div>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OurServices;
