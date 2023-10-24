import { Container, Typography } from "@mui/material";
import { useIsMobile } from "../lib/helpers";
import ImageCarousel from "./components/image-carousel";

const ImageCarouselContainer = (allImages: any) => {
  return (
    <Container
      className={`${!useIsMobile ? "h-screen py-28" : "h-full py-20"}`}
    >
      <ImageCarousel allImages={allImages} />
      <Typography
        sx={{
          textAlign: "center",
          fontStyle: "italic",
          fontSize: { xs: "1rem", md: "1.5rem" },
        }}
      >
        Discover the perfect fusion of style and functionality. From modern
        kitchen, to elegant living rooms and cozy bedrooms we blend
        sophistication, comfort and relaxation.
      </Typography>
    </Container>
  );
};

export default ImageCarouselContainer;
