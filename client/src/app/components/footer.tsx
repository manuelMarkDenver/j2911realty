"use client";

import { Box, Container, Grid, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";

const CustomGridItem: any = styled(Grid)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  margin: "auto 0"
});

const Footer = () => {
  const secondaryColor = "#E4E1DD";

  return (
    <Box
      sx={{ backgroundColor: secondaryColor }}
      className="h-screen flex items-center justify-center"
    >
      <Container maxWidth="xl">
        <Grid container sx={{ flexGrow: 1, textAlign: "center" }}>
          <CustomGridItem item xs={12} md={4}>
            <Stack >
              <Image
                src="/assets/images/site-logo.png"
                alt="site logo"
                width={240}
                height={240}
              />
              <Typography>J2911 Realty</Typography>
              <Typography>Kulas Light, Apt. 556</Typography>
              <Typography>Gwenborough</Typography>
              <Typography>92998-3874</Typography>
              <Typography>Sincere@april.biz</Typography>
            </Stack>
          </CustomGridItem>
          <CustomGridItem item xs={12} md={4}>
            <Stack>
              <Typography>Home</Typography>
              <Typography>About Us</Typography>
              <Typography>Projects</Typography>
              <Typography>Contact Us</Typography>
            </Stack>
          </CustomGridItem>
          <CustomGridItem item xs={12} md={4}>
            <Stack>
              <Typography>Home</Typography>
              <Typography>About Us</Typography>
              <Typography>Projects</Typography>
              <Typography>Contact Us</Typography>
            </Stack>
          </CustomGridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
