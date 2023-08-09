import { Metadata } from "next";
import Banner from "./(homepage)/banner";
import Features from "./(homepage)/features";
import ImageCarouselContainer from "./(homepage)/image-carousel-container";

export const metadata: Metadata = {
  title: "J2911 Realty",
  description: "J2911 Realty Website",
};

import getImagesFiles from "@/app/lib/imageGetters";
import TestimonialContainer from "./(homepage)/testimonials-container";

export default function Home() {
  const bedroomImages = getImagesFiles("bedroom-designs");
  const kitchenImages = getImagesFiles("kitchen-designs");
  const livingroomImages = getImagesFiles("livingroom-designs");
  const allImages = [...bedroomImages, ...kitchenImages, ...livingroomImages];

  return (
    <>
      <Banner />
      <Features
        allImages={allImages}
        bedroomImages={bedroomImages}
        kitchenImages={kitchenImages}
        livingroomImages={livingroomImages}
      />
      <ImageCarouselContainer allImages={allImages} />
      <TestimonialContainer />
    </>
  );
}
