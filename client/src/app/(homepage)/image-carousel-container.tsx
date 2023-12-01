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
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
          pl: 10,
        }}
      >
        <Typography
          sx={{
            fontSize: "5rem",
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
        <WestIcon sx={{ color: "#bababa" }} />
        <Typography variant="h5" sx={{ color: "#bababa" }}>
          Scroll to see more projects
        </Typography>
        <EastIcon sx={{ color: "#bababa" }} />
      </Stack>
    </>
  );
};

export default ImageCarouselContainer;
