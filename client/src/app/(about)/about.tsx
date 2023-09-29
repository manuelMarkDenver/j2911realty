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
    <Container sx={{ py: 10 }}>
      <Typography
        variant="h3"
        className="font-great-vibes text-center mb-10 text-pink-600"
      >
        About Me
      </Typography>
      <Grid container>
        <Grid xs={12} md={5}>
          <Image
            src={aboutImagePath ? aboutImagePath : ""}
            width={400}
            height={600}
            alt="Brenda Hernandez"
          />
        </Grid>
        <Grid xs={12} md={7} justifyContent={"center"} alignItems={"center"}>
          <Stack
            spacing={4}
            textAlign="center"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomTypography variant="h5">
              Brenda Hernandez is CEO and Principal Designer of J.2911 Realty,
              an interior design business committed to giving you the best
              quality design while sticking to your budget.
            </CustomTypography>
            <CustomTypography variant="h5">
              J.2911 Realty has practical experience in inhabitant upgrades and
              providing stunning transformations. We excel in working with our
              clients and brining their vision to reality.{" "}
            </CustomTypography>
            <CustomTypography variant="h5">
              We primarily focus on designing short term rentals, work with
              property owners, real estate investors and real estate agents. Our
              goal is to create a personalized experience with each of our
              clients and guarantee a timely delivery.
            </CustomTypography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
