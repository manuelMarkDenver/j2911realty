import { Container, Typography } from "@mui/material";
import { useIsMobile } from "../../lib/helpers";
import ImageCarousel from "./components/image-carousel";

const ImageCarouselContainer = (allImages: any) => {
  return (
    <Container
      className={`${!useIsMobile ? "h-screen py-28" : "h-full py-20"}`}
    >
      <ImageCarousel allImages={allImages} />
      <Typography sx={{ textAlign: "center", fontStyle: "italic", fontSize: { xs: "1rem", md: "1.5rem" } }}>
        Explore a captivating image gallery that encapsulates the essence of
        kitchen, bedroom, and living room designs. Discover the perfect fusion
        of style and functionality in each snapshot. From modern kitchens
        adorned with elegant countertops to cozy bedrooms that invite
        relaxation, and living rooms where comfort meets sophistication, our
        curated collection offers a visual tapestry of inspiring home
        aesthetics.
      </Typography>
    </Container>
  );
};

export default ImageCarouselContainer;
