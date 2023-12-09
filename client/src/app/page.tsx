import { Metadata } from "next";
import getImagesFiles from "@/app/lib/imageGetters";
import getOneImageFilepath from "./lib/imageOneGetter";

import Banner from "./(homepage)/banner";
import About from "./(about)/about";
import Steps from "./(homepage)/steps";
import Projects2 from "./(homepage)/projects-2";
import OurServicesContainer from "./(homepage)/our-services-container";

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
      {/* <WovenImageList itemData={masonryImages} /> */}

      <Projects2 itemData={masonryImages} />

      {/* <ImageCarouselContainer allImages={masonryImages} /> */}

      <OurServicesContainer />

      <Steps />

      <About aboutImagePath={aboutImage ? aboutImage : ""} />
    </>
  );
}
