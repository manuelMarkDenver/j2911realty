"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import PricingCard from "./components/pricing-card";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CreateIcon from "@mui/icons-material/Create";
import HomeIcon from "@mui/icons-material/Home";

const iconStyle = {
  fontSize: "5rem",
  color: "#a47180",
};

type ProcessProps = {
  title: string;
  steps: string[];
  icon: JSX.Element;
};

const processes: ProcessProps[] = [
  {
    title: "Step 1: Explore Your Vision",
    steps: [
      "Book your 1-2 Hour In Person Consult",
      "Every space is a fresh opportunity for creativity. Schedule your consultation today and let’s discuss your vision and bring it to life.",
    ],
    icon: <EventAvailableIcon sx={{ ...iconStyle }} />,
  },
  {
    title: "Step 2: Designing Dreams Together",
    steps: [
      "We will develop your initial schematic designs together. Then, we will provide you with a budget that makes sense for you.",
      "Next, we design your palette, by creating the vision, by setting the stage, by giving you a glimpse of colors and much more, you’re seeing what your interiors will look like, and equally important, what they’ll feel like.",
    ],
    icon: <CreateIcon sx={{ ...iconStyle }} />,
  },
  {
    title: "Step 3: A New Beginning, Simply Yours",
    steps: [
      "Last, We’ve got everything in our warehouse, inspected, organized, and ready for installation. We take care of all the big heavy lifting",
      "Our goal is to  meet your every need so that you can simply walk in and live your life. And your lifestyle!",
    ],
    icon: <HomeIcon sx={{ ...iconStyle }} />,
  },
];

const Pricing = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        textAlign="center"
        variant="h2"
        sx={{
          mb: 5,
          fontStyle: "italic",
          color: "#a4727e",
        }}
      >
        Your Personality, Our Expertise
      </Typography>

      {/* Occupied Homes */}
      <Stack spacing={10} sx={{ pt: 5 }}>
        <Box>
          <Grid container spacing={10}>
            {processes.map((process) => (
              <Grid xs={4} item key={process.title}>
                <PricingCard process={process} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default Pricing;
