import { Metadata } from "next";
import getImagesFiles from "@/app/lib/imageGetters";
import getOneImageFilepath from "./lib/imageOneGetter";

import Banner from "./(homepage)/banner";
import Features from "./(homepage)/features";
import ImageCarouselContainer from "./(homepage)/image-carousel-container";
import TestimonialContainer from "./(homepage)/testimonials-container";
import About from "./(about)/about";


export const metadata: Metadata = {
  title: "J2911 Realty",
  description: "J2911 Realty Website",
};

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
