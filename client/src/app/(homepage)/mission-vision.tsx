import { Container, Stack, Typography, Box } from "@mui/material";
import { useIsMobile } from "../lib/helpers";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Image from "next/image";

const MissionVision = () => {
  return (
    <Container
      className={`${!useIsMobile ? "h-screen py-28" : "h-full py-20"}`}
    >
      <Grid container>
        <Grid xs={12} md={6}>
          <Stack
            className="text-left"
            gap={6}
            sx={{ width: "90%", marginBottom: { xs: "20px", md: 0 } }}
          >
            <Box>
              <Typography
                component="h5"
                variant="body1"
                sx={{
                  fontWeight: "semi-bold",
                  textAlign: { xs: "center", md: "left" },
                  mb: "20px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: "1.5rem", md: "3rem" },
                }}
              >
                Our Experience
              </Typography>
              <Typography variant="body1">
                Aenean lobortis nunc eu nibh convallis varius. Ut id erat ut
                purus euismod elementum eu vel mauris. Suspendisse potenti.
              </Typography>
            </Box>
            <Box>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: "1.5rem", md: "3rem" },
                }}
              >
                Client Satisfaction
              </Typography>
              <Typography variant="body1">
                Maecenas dictum ex vitae lacus laoreet, sed pretium erat
                maximus. Suspendisse ligula mi, rutrum.
              </Typography>
            </Box>
            <Box>
              <Typography
                component="h3"
                sx={{
                  fontSize: { xs: "1.5rem", md: "3rem" },
                }}
              >
                Personalized Process
              </Typography>
              <Typography variant="body1">
                In hac habitasse platea dictumst. Morbi tristique molestie
                tortor sit amet accumsan. Praesent cursus pulvinar suscipit.
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid xs={12} md={6}>
          <img
            src="/assets/images/mission-vision/mission-vision-img.jpg"
            alt="mission vision image"
            width="100%"
            height="100%"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MissionVision;
