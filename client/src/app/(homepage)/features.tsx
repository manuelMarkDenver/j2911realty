"use client";
import { Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FeaturesCard from "../components/features-card";
import { useIsMobile } from "../lib/helpers";

const Features = ({
  bedroomImages,
  kitchenImages,
  livingroomImages,
}: any) => {
  return (
    <Container
      id="projects"
      className={`${!useIsMobile ? "h-screen py-28" : "h-full py-20"}`}
    >
      <Stack className="text-center" sx={{ marginBottom: "100px" }}>
        <Typography
          component="h5"
          variant="h5"
          sx={{ fontWeight: "semi-bold" }}
        >
          Merging comfort and style seamlessly for a refined living experience.
        </Typography>
        <Typography
          component="h3"
          sx={{
            fontSize: { xs: "2.2rem", md: "3rem" },
            letterSpacing: "1.2px",
            margin: "10px 0",
          }}
        >
          <span className="font-thin text-gray-600">Elegance</span>{" "}
          <span
            className={`font-medium text-4xl md:text-6xl tracking-wider font-great-vibes`}
          >
            Redefined
          </span>
          , <span className="font-thin text-gray-600">Timeless</span>{" "}
          <span
            className={`font-medium text-4xl md:text-6xl tracking-wider font-great-vibes`}
          >
            Beauty <br />
          </span>
          <span className="font-thin text-gray-600">&</span>{" "}
          <span className="font-thin text-gray-600">Our</span>{" "}
          <span
            className={`font-medium text-4xl md:text-6xl tracking-wider font-great-vibes`}
          >
            Approach
          </span>
        </Typography>
        <Typography variant="h6">
          We believe your space should make sense. We thrive in taking homes and
          accenting their natural beauty
          <br /> while bringing together modern design and convenience.
          <br />
          All tailored to your budget!
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
            title="Kitchen Designs"
            description="Modern, beautiful and functional"
            link="/kitchen-designs"
            images={kitchenImages}
          />
        </Grid>
        <Grid
          xs={12}
          md={4}
          className="md:flex md:justify-center md:items-center"
        >
          <FeaturesCard
            img="/assets/images/features/feature-img-2.jpg"
            title="Living Room Designs"
            description="Beautiful and elegant spaces"
            link="/livingroom-designs"
            images={livingroomImages}
          />
        </Grid>
        <Grid
          xs={12}
          md={4}
          className="md:flex md:justify-center md:items-center"
        >
          <FeaturesCard
            img="/assets/images/features/feature-img-3.jpg"
            title="Bedroom Designs"
            description="Stylish, sexy and restful"
            link="/bedroom-designs"
            images={bedroomImages}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
