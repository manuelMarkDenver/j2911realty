import { Container } from "@mui/material";
import { useIsMobile } from "../lib/helpers";
import ImageCarousel from "./components/image-carousel";

const ImageCarouselContainer = (allImages: any) => {
  return (
    <Container
      className={`${!useIsMobile ? "h-screen py-28" : "h-full py-20"}`}
    >
      <ImageCarousel allImages={allImages} />
    </Container>
  );
};

export default ImageCarouselContainer;
