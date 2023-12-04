"use client";

import { Box, Container, Stack, Typography, styled } from "@mui/material";
import { useBreakpoints } from "../lib/helpers";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";

const CustomTypography = styled(Typography)();

type AboutProps = {
  aboutImagePath?: string;
};

const About = ({ aboutImagePath }: AboutProps) => {
  const { sm } = useBreakpoints();

  return (
    <Box sx={{ py: 20 }}>
      <Grid container>
        <Grid
          xs={12}
          md={5}
          sx={{
            display: "flex",
            alignItems: "start",
            backgroundColor: "#F7D2CC",
          }}
        >
          <Stack spacing={4} textAlign="left" px={10} py={10}>
            <Typography
              variant="h3"
              sx={{ color: "#a4727e", fontStyle: "italic", fontWeight: "300" }}
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
            <br />
            <br />
            <CustomTypography
              className="font-great-vibes"
              sx={{ fontSize: "3rem", color: "#a4727e" }}
            >
              Brenda Hernandez
            </CustomTypography>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          md={7}
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "100dvh",
            width: "100%",
            position: "relative",
          }}
        >
          <Image
            src={aboutImagePath ? aboutImagePath : ""}
            fill={true}
            alt="Brenda Hernandez"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
