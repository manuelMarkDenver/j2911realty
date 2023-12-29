import { Metadata } from "next";
import getImagesFiles from "@/app/lib/imageGetters";
import getOneImageFilepath from "./lib/imageOneGetter";

import Banner from "./(homepage)/banner";
import About from "./(about)/about";
import Steps from "./(homepage)/steps";
import Projects2 from "./(homepage)/projects-2";
import OurServicesContainer from "./(homepage)/our-services-container";
import ImageCarouselContainer from "./(homepage)/ImagesCarouselContainer/image-carousel-container";
import CustomButton from "./(homepage)/components/custom-button";
import { Container } from "@mui/material";

export const metadata: Metadata = {
  title: "J2911 Realty",
  description: "J2911 Realty Website",
};

export default function Home() {
  const masonryImages = getImagesFiles("masonry");
  const aboutImage = getOneImageFilepath("about-us", "collage-about-img.webp");

  return (
    <>
      <Banner />
      <Projects2 itemData={masonryImages} />
      <ImageCarouselContainer allImages={masonryImages} />
      <OurServicesContainer />
      <Steps />

      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 10,
        }}
      >
        <CustomButton
          title="Book Your Consultation"
          sx={{ py: "20px", px: "20px", width: "50%" }}
          link="https://calendly.com/j2911realty"
        />
      </Container>

      <About aboutImagePath={aboutImage ? aboutImage : ""} />
    </>
  );
}
