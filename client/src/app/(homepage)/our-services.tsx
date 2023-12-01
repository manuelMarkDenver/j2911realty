import Image from "next/image";
import { Box, Grid, Typography } from "@mui/material";

import banner from "/public/assets/images/banner-img-3.jpg";
import banner2 from "/public/assets/images/mission-vision/mission-vision-img.jpg";
import banner3 from "/public/assets/images/features/feature-img-3.jpg";

const gridStyles = {
  height: "100dvh",
  width: "100%",
};

const gridWithTextsStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  px: 10,
};

const OurServices = () => {
  return (
    <Grid container py={20}>
      <Grid container item xs={12} sx={{ ...gridStyles }}>
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: "#dd8fa4",
            ...gridWithTextsStyles,
          }}
        >
          <Typography variant="h1" mb={4}>
            When to hire an Interior Designer?
          </Typography>
          <Typography variant="h5">
            Your home is the one place to relax and reset, so making sure it’s a
            space you feel good spending time in!
          </Typography>
          <br />
          <Typography variant="h5">
            Your interior designer can give your home a new life by curating a
            style that offers style but fits your personality and the character
            of your home perfectly. <br />
            <br />
            They’ll consider materials, color schemes, and furniture, bringing
            them all together to create an updated look.
          </Typography>
        </Grid>
        <Grid item xs={6} position="relative">
          <Image
            src={banner}
            alt="Background Image"
            fill={true}
            objectFit="cover"
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} sx={{ ...gridStyles }}>
        <Grid item xs={6} position="relative">
          <Image
            src={banner2}
            alt="Background Image"
            fill={true}
            objectFit="cover"
          />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: "#d66a7f",
            ...gridWithTextsStyles,
          }}
        >
          <Typography>
            <Typography variant="h1" mb={4}>
              How much should I expect to pay for an interior designer?
            </Typography>
            <Typography variant="h5">
              Your home is the one place to relax and reset, so making sure it’s
              a space you feel good spending time in!
            </Typography>
            <br />
            <Typography variant="h5">
              If you’re not sure how much an interior designer charges for their
              services, you’re not alone! <br />
              <br />
              Prices are variable based on several factors, but a rough estimate
              are given below:
            </Typography>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default OurServices;
