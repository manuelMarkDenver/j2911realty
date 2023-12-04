"use client";

import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import { motion } from "framer-motion";

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

  return (
    <>
      <Box sx={{ px: 20, py: 20 }}>
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
            xs={4}
            sx={{
              display: "flex",
              justifyContent: "start",
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
                fontSize="4rem"
                fontWeight="300"
                color="#a4727e"
                textAlign="left"
                sx={{ letterSpacing: "1rem" }}
              >
                Beauty Is In The Details.
              </Typography>
            </motion.div>
          </Grid>

          <Grid item xs={8}>
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
                sx={{
                  fontSize: "1.5rem",
                  fontStyle: "italic",
                  letterSpacing: "2.5px",
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
            </motion.div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Projects2;
