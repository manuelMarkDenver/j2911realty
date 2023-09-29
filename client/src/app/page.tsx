import { Metadata } from "next";
import Banner from "./pages/(homepage)/banner";
import Features from "./pages/(homepage)/features";
import ImageCarouselContainer from "./pages/(homepage)/image-carousel-container";

export const metadata: Metadata = {
  title: "J2911 Realty",
  description: "J2911 Realty Website",
};

import getImagesFiles from "@/app/lib/imageGetters";
import TestimonialContainer from "./pages/(homepage)/testimonials-container";
import About from "./(about)/about";
import getOneImageFilepath from "./lib/imageOneGetter";

export default function Home() {
  const bedroomImages = getImagesFiles("bedroom-designs");
  const kitchenImages = getImagesFiles("kitchen-designs");
  const livingroomImages = getImagesFiles("livingroom-designs");
  const gallery = getImagesFiles("gallery");
  const allImages = [...bedroomImages, ...kitchenImages, ...livingroomImages];
  const aboutImage = getOneImageFilepath("about-us", "about.jpeg");
  console.log("🚀 ~ file: page.tsx:23 ~ Home ~ aboutImage:", aboutImage);
  return (
    <>
      <Banner />
      <Features
        allImages={allImages}
        bedroomImages={bedroomImages}
        kitchenImages={kitchenImages}
        livingroomImages={livingroomImages}
      />
      <ImageCarouselContainer allImages={gallery} />
      <About aboutImagePath={aboutImage ? aboutImage : ""} />
      <TestimonialContainer />
    </>
  );
}
