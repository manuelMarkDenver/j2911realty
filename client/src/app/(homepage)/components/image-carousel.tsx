"use client";

import Image from "next/image";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

import { Box, Container, Typography } from "@mui/material";

import { useIsMobile } from "@/app/lib/helpers";

const ImageCarousel = ({ allImages }: { allImages: any }) => {
  const [sliderRef] = useKeenSlider({
    mode: "snap",
    slides: {
      origin: "center",
      perView: 1,
    },
  });

  if (allImages?.length === 0) return <p>No images</p>;

  if (!allImages) return <p>Loading images...</p>;

  return (
    <Box
      ref={sliderRef}
      className="keen-slider"
      sx={{ position: "relative", width: "100%", height: "100%" }}
    >
      {allImages?.allImages.map((image: string, index: number) => {
        return (
          <Image
            key={index}
            src={image}
            alt={image}
            width={2000}
            height={1300}
            // fill={true}
            style={{ objectFit: "contain" }}
            className="keen-slider__slide"
          />
        );
      })}
    </Box>
  );
};

export default ImageCarousel;
