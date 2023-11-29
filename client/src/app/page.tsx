import { Metadata } from "next";
import getImagesFiles from "@/app/lib/imageGetters";
import getOneImageFilepath from "./lib/imageOneGetter";

import Banner from "./(homepage)/banner";
import Features from "./(homepage)/features";
import ImageCarouselContainer from "./(homepage)/image-carousel-container";
import TestimonialContainer from "./(homepage)/testimonials-container";
import About from "./(about)/about";
import WovenImageList from "./(designs)/components/woven-image-list";
import { Box } from "@mui/material";
import OurServices from "./(homepage)/our-services";
import Projects from "./(homepage)/projects";
import Pricing from "./(homepage)/pricing";
import FAQs from "./(homepage)/components/faqs-accordion";

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
      {/* <Features /> */}
      {/* <ImageCarouselContainer allImages={gallery} /> */}
      {/* <WovenImageList itemData={masonryImages} /> */}

      <Projects itemData={masonryImages} />
      <Pricing />
      <FAQs />

      <About aboutImagePath={aboutImage ? aboutImage : ""} />
      {/* <TestimonialContainer /> */}
      {/* <OurServices /> */}
    </>
  );
}
