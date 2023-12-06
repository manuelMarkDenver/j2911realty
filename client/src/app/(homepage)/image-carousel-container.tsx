import { Box, Container, Stack, Typography } from "@mui/material";
import { useIsMobile } from "../lib/helpers";
import ImageCarousel from "./components/image-carousel";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";

const ImageCarouselContainer = (allImages: any) => {
  return (
    <>
      <Box
        id="projects"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          width: "100%",
          pl: 10,
        }}
      >
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
        <ImageCarousel allImages={allImages} />
      </Box>
      <Stack
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
        {/* <WestIcon sx={{ color: "#bababa" }} /> */}
        <Typography variant="h5" sx={{ color: "#bababa", fontStyle: "italic" }}>
          Scroll to see more projects
        </Typography>
      </Stack>
    </>
  );
};

export default ImageCarouselContainer;
