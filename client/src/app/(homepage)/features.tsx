"use client";
import { Box, Container, Icon, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FeaturesCard from "../components/features-card";
import { useBreakpoints, useIsMobile } from "../lib/helpers";
import WovenImageList from "../(designs)/components/woven-image-list";
import styled from "@emotion/styled";

// icons
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import GridOnIcon from "@mui/icons-material/GridOn";
import StarsIcon from "@mui/icons-material/Stars";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const typographyStyles = {
  fontSize: { xs: "2.2rem", md: "3rem" },
  letterSpacing: "1.2px",
};

const CustomChildGridStyles = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "180px",
  color: "black",
  "&:not(:last-child)": {
    borderRight: "solid 1px black",
  },
});

const CustomIconStyles = {
  fontSize: "3rem",
  marginBottom: "10px",
  color: "gray",
};
const Features = () => {
  const { xs, sm, md, lg, xl } = useBreakpoints();

  return (
    <Box sx={{ position: "relative" }}>
      <Container
        maxWidth={xs ? "lg" : "md"}
        sx={{
          position: "absolute",
          top: "0%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        disableGutters
      >
        <Paper
          elevation={7}
          sx={{
            borderRadius: "20px",
            backgroundColor: "pink",
          }}
        >
          <Grid container>
            <CustomChildGridStyles xs={3}>
              <Icon component={EmojiObjectsIcon} sx={{ ...CustomIconStyles }} />
              Tailored Design Solutions
            </CustomChildGridStyles>
            <CustomChildGridStyles xs={3}>
              <Icon component={GridOnIcon} sx={{ ...CustomIconStyles }} />
              Optimized Spatial Arrangements
            </CustomChildGridStyles>
            <CustomChildGridStyles xs={3}>
              <Icon component={StarsIcon} sx={{ ...CustomIconStyles }} />
              High-grade Interior Designers
            </CustomChildGridStyles>
            <CustomChildGridStyles xs={3}>
              <Icon
                component={AssignmentTurnedInIcon}
                sx={{ ...CustomIconStyles }}
              />
              Seamless Project Execution
            </CustomChildGridStyles>
          </Grid>
        </Paper>
      </Container>

      <Container
        id="projects"
        sx={{
          height: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          className="text-center"
          sx={{
            marginBottom: "100px",
          }}
        >
          <Typography {...typographyStyles}>
            <span className="font-thin text-gray-600">Elegance</span>{" "}
            <span className={`font-medium tracking-wider font-great-vibes`}>
              Redefined,
            </span>
          </Typography>
          <Typography {...typographyStyles}>
            <span className="font-thin text-gray-600">Timeless</span>{" "}
            <span className={`font-medium tracking-wider font-great-vibes`}>
              Beauty,
            </span>
          </Typography>
          <Typography {...typographyStyles} mb={3}>
            <span className="font-thin text-gray-600">&</span>{" "}
            <span className="font-thin text-gray-600">Our</span>{" "}
            <span className={`font-medium tracking-wider font-great-vibes`}>
              Approach
            </span>
          </Typography>
          <Typography variant="h5">
            We believe your space should make sense. We thrive in taking homes
            and accenting their natural beauty
            <br /> while bringing together modern design and convenience.
            <br />
            All tailored to your budget!
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Features;
