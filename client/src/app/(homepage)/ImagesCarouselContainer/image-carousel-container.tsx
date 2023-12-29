"use client";

import { Box, Stack, Typography } from "@mui/material";
import { useIsMobile } from "../../lib/helpers";
import ImageCarousel from "../components/image-carousel";

const ImageCarouselContainer = (allImages: any) => {
  const isMobile = useIsMobile();

  return (
    <>
      <Box
        id="projects"
        sx={{
          display: "flex",
          flexDirection: !isMobile ? "row" : "column",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          width: "100%",
          pl: !isMobile ? 10 : 0,
        }}
      >
        {!isMobile ? (
          <Typography
            sx={{
              fontSize: "5rem",
              fontWeight: 300,
              color: "#a4727e",
              writingMode: "vertical-lr",
              transform: "rotate(180deg)",
            }}
          >
            My Projects
          </Typography>
        ) : (
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 300,
              color: "#a4727e",
            }}
          >
            My Projects
          </Typography>
        )}

        <ImageCarousel allImages={allImages} />
      </Box>
      {/* <Stack
        direction="row"
        alignItems="center"
        gap={5}
        sx={{
          mx: "auto",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#bababa",
            fontStyle: "italic",
            fontSize: !isMobile ? "2rem" : "1rem",
          }}
        >
          Scroll to the left see more projects
        </Typography>
      </Stack> */}
    </>
  );
};

export default ImageCarouselContainer;
