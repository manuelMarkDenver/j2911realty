"use client";

import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FeaturesCard from "../components/features-card";
import { useIsMobile } from "../lib/helpers";

const Features = () => {
  return (
    <Container
      className={`${!useIsMobile ? "h-screen py-28" : "h-full py-20"}`}
    >
      <Stack className="text-center" sx={{ marginBottom: "100px" }}>
        <Typography
          component="h5"
          variant="body1"
          sx={{ fontWeight: "semi-bold" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at metus
          volutpat,
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontSize: { xs: "2.2rem", md: "4rem" },
          }}
        >
          Our Design, Approach & Philosophy
        </Typography>
        <Typography variant="body1">
          Aenean lobortis nunc eu nibh convallis varius. Ut id erat ut purus
          euismod elementum eu vel mauris. Suspendisse potenti. Donec dignissim
          metus eget ligula sollicitudin condimentum. In eget finibus ante.
          Nullam aliquam blandit gravida. Phasellus a tellus et est sollicitudin
          convallis. In hac habitasse platea dictumst. Vestibulum vulputate
          auctor est. Nunc molestie ultricies libero vitae ultrices. Praesent
          luctus sodales facilisis. Fusce commodo lorem id tincidunt
          sollicitudin. Maecenas cursus vitae massa vel rhoncus. Sed id
          malesuada odio, id bibendum sem.
        </Typography>
      </Stack>
      <Grid
        container
        gap={useIsMobile() ? 2 : 0}
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid
          xs={12}
          md={4}
          className="md:flex md:justify-center md:items-center"
        >
          <FeaturesCard
            img="/assets/images/features/feature-img-1.jpg"
            title="Kitchen Design"
            description="Sleek, modern chef's dream, granite countertops."
          />
        </Grid>
        <Grid
          xs={12}
          md={4}
          className="md:flex md:justify-center md:items-center"
        >
          <FeaturesCard
            img="/assets/images/features/feature-img-2.jpg"
            title="Livingroom Design"
            description="Elegant comfort, inviting fireplace, open space."
          />
        </Grid>
        <Grid
          xs={12}
          md={4}
          className="md:flex md:justify-center md:items-center"
        >
          <FeaturesCard
            img="/assets/images/features/feature-img-3.jpg"
            title="Bedroom Design"
            description="Tranquil oasis, plush luxury, serene retreat."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
