"use client";

import { Box, Container, Stack, Typography, styled } from "@mui/material";
import { useBreakpoints, useIsMobile } from "../lib/helpers";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";

const CustomTypography = styled(Typography)({
  fontSize: "0.9rem",
  color: "#9a9a9a",
});

type AboutProps = {
  aboutImagePath?: string;
};

const About = ({ aboutImagePath }: AboutProps) => {
  const isMobile = useIsMobile();

  const { xsDown, md, lg, rangeXsSm, rangeSmMd } = useBreakpoints();
  console.log("🚀 ~ file: about.tsx:21 ~ About ~ xsDown:", xsDown);
  console.log("🚀 ~ file: about.tsx:21 ~ About ~ rangeSmMd:", rangeSmMd);
  console.log("🚀 ~ file: about.tsx:21 ~ About ~ rangeXsSm:", rangeXsSm);
  console.log("🚀 ~ file: about.tsx:21 ~ About ~ md:", md);

  return (
    <Box sx={{ py: !isMobile ? 20 : 10 }} id="about">
      <Grid container>
        <Grid
          xs={12}
          md={6}
          sx={{
            display: "flex",
            alignItems: "start",
            backgroundColor: "#ffe9e6",
          }}
        >
          <Stack
            spacing={!isMobile ? 4 : 2}
            textAlign={!isMobile ? "left" : "center"}
            px={!isMobile ? 10 : 2}
            py={!isMobile ? 10 : 5}
          >
            <Typography
              variant="h3"
              sx={{ color: "#a4727e", fontStyle: "italic", fontWeight: "300" }}
              fontSize={!isMobile ? "4rem" : "1.5rem"}
            >
              About Me
            </Typography>
            <CustomTypography variant="h5">
              I am the CEO and principal designer for J.2911 Realty and
              committed to giving you the best quality designs while sticking to
              your budget.
            </CustomTypography>
            <CustomTypography variant="h5">
              I have practical experience in inhabitant upgrades and providing
              stunning transformations. I truly enjoy working with clients and
              bringing your vision into reality.
            </CustomTypography>
            <CustomTypography variant="h5">
              I understand the importance of how your space looks and feels
              impacts you and others. It brings me pure joy to be able to take a
              room and create efficiency while adding character.
            </CustomTypography>
            <CustomTypography variant="h5">
              My goal is to curate a personalized experience with each of my
              clients, guaranteed timely delivery and full satisfaction.
            </CustomTypography>
            <CustomTypography variant="h5">
              I look forwarding to working with you,
            </CustomTypography>
            {!isMobile && (
              <>
                <br />
                <br />
              </>
            )}

            <CustomTypography
              className="font-great-vibes"
              sx={{ fontSize: !isMobile ? "3rem" : "1.5rem", color: "#a4727e" }}
            >
              Brenda Hernandez
            </CustomTypography>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            height: md
              ? "100dhv"
              : rangeSmMd
              ? "100dvh"
              : rangeXsSm
              ? "40vh"
              : "10dvh",
            width: "100%",
            position: "relative",
          }}
        >
          <Image
            src={aboutImagePath ? aboutImagePath : ""}
            fill={true}
            alt="Brenda Hernandez"
            objectFit={
              md
                ? "cover"
                : rangeSmMd
                ? "cover"
                : rangeXsSm
                ? "cover"
                : "contain"
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
