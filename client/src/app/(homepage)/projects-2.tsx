"use client";

import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import { motion } from "framer-motion";
import { useBreakpoints, useIsMobile } from "../lib/helpers";

type ProjectsProps = {
  itemData: any;
};

const Projects2 = (props: ProjectsProps) => {
  const { itemData } = props;

  const slideInFromTheLeftVariants = {
    hidden: { x: -500 }, // Start from outside the viewport
    visible: { x: 0 },
  };

  const slideInFromTheTopVariants = {
    hidden: { x: 1800 }, // Start from outside the viewport
    visible: { x: 0 },
  };

  const isMobile = useIsMobile();

  return (
    <>
      {!isMobile ? (
        <Box sx={{ px: !isMobile ? 20 : 5, py: !isMobile ? 20 : 5 }}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            spacing={!isMobile ? 50 : 10}
          >
            <Grid
              item
              xs={!isMobile ? 4 : 12}
              sx={{
                display: "flex",
                justifyContent: !isMobile ? "start" : "center",
              }}
            >
              <motion.div
                variants={slideInFromTheLeftVariants}
                initial="hidden"
                animate="visible"
                transition={{ ease: "easeInOut", duration: 2 }}
              >
                <Typography
                  variant="h2"
                  fontSize={!isMobile ? "4rem" : "1.5rem"}
                  fontWeight="300"
                  color="#a4727e"
                  textAlign="center"
                  sx={{ letterSpacing: !isMobile ? "1rem" : "0.5rem" }}
                >
                  Beauty Is In The Details.
                </Typography>
              </motion.div>
            </Grid>

            <Grid item xs={!isMobile ? 8 : 12}>
              <motion.div
                variants={slideInFromTheTopVariants}
                initial="hidden"
                animate="visible"
                transition={{ ease: "easeInOut", duration: 3 }}
                whileInView={{ opacity: 1 }}
              >
                <Typography
                  textAlign="center"
                  variant="h4"
                  fontSize={!isMobile ? "1.5rem" : "1rem"}
                  sx={{
                    fontStyle: "italic",
                    letterSpacing: !isMobile ? "2.5px" : "1px",
                    color: "#9a9a9a",
                    lineHeight: 1.5,
                  }}
                >
                  We thrive in taking homes and accenting their natural beauty
                  while bringing together modern design and timeless beauty. We
                  are designing spaces that hold your personality. We are
                  committed to giving you an elevated experience while adhering
                  to your budget.
                </Typography>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box sx={{ px: !isMobile ? 20 : 5, py: !isMobile ? 20 : 5 }}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
            }}
            spacing={!isMobile ? 50 : 5}
          >
            <Grid
              item
              xs={!isMobile ? 4 : 12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h2"
                fontSize={!isMobile ? "4rem" : "1.5rem"}
                fontWeight="300"
                color="#a4727e"
                textAlign="center"
                sx={{ letterSpacing: !isMobile ? "1rem" : "0.5rem" }}
              >
                Beauty Is In The Details.
              </Typography>
            </Grid>

            <Grid item xs={!isMobile ? 8 : 12}>
              <Typography
                textAlign="center"
                variant="h4"
                sx={{
                  fontSize: !isMobile ? "1.5rem" : "1rem",
                  fontStyle: "italic",
                  letterSpacing: !isMobile ? "2.5px" : "1px",
                  color: "#9a9a9a",
                  lineHeight: 1.5,
                }}
              >
                We thrive in taking homes and accenting their natural beauty
                while bringing together modern design and timeless beauty. We
                are designing spaces that hold your personality. We are
                committed to giving you an elevated experience while adhering to
                your budget.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </>
  );
};

export default Projects2;
