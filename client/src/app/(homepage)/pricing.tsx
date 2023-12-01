"use client";

import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import PricingCard from "./components/pricing-card";

const Pricing = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 20 }}>
      <Typography
        textAlign="center"
        variant="h2"
        sx={{
          mb: 5,
        }}
      >
        Pricing
      </Typography>

      {/* Occupied Homes */}
      <Stack spacing={10}>
        <Box>
          <Typography
            variant="h3"
            sx={{
              mb: 5,
              textAlign: "center",
            }}
          >
            Occupied Homes
          </Typography>
          <Grid container spacing={2}>
            <Grid xs={3} item>
              <PricingCard
                title="2 Hour Walkthrough"
                price="$250.00"
                priceSubheader="per room"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid xs={3} item>
              <PricingCard
                title="4 Hour Staging (3-4 rooms)"
                price="$500.00"
                priceSubheader="per room"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid xs={3} item>
              <PricingCard
                title="8 Hour Staging (5-7 rooms)"
                price="$800.00"
                priceSubheader="per room"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid xs={3} item>
              <PricingCard
                title="Maximum cost (per hour)"
                price="$500.00"
                priceSubheader="per room"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
          </Grid>
        </Box>

        {/* 111 */}
        <Box>
          <Typography
            variant="h3"
            sx={{
              mb: 5,
              textAlign: "center",
            }}
          >
            Vacant Staging
          </Typography>
          <Grid container spacing={2}>
            <Grid xs={3} item>
              <PricingCard
                title="1200 Sq Ft."
                price="$500.00"
                priceSubheader="per room"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid xs={3} item>
              <PricingCard
                title="1200-3000 Sq Ft."
                price="$700.00"
                priceSubheader="per room"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid xs={3} item>
              <PricingCard
                title="2000-3000 Sq Ft."
                price="$900.00"
                priceSubheader="per room"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
            <Grid xs={3} item>
              <PricingCard
                title="3000-4000 Sq Ft."
                price="$1000.00"
                priceSubheader="per room"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              />
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Container>
  );
};

export default Pricing;
