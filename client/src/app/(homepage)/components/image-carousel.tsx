"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styling/carousel-styling";

import { Box, Container, Typography } from "@mui/material";

import { pathTransformer, useIsMobile } from "@/app/lib/helpers";
import Image from "next/image";

const ImageCarousel = ({ allImages }: { allImages: any }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
  };

  // const transformedImagesPaths = allImages?.allImages?.map((item: string) =>
  //   pathTransformer(item)
  // );

  if (allImages?.length === 0) return <p>No images</p>;

  if (!allImages) return <p>Loading images...</p>;

  return (
    <Container
      className={`${!useIsMobile ? "h-screen py-28" : "h-full py-20"}`}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", marginBottom: { md: "30px" } }}
          className="font-great-vibes"
        >
          {" "}
          Images Gallery
        </Typography>
        <Slider {...settings}>
          {allImages?.allImages.map((image: string, index: number) => {
            return (
              <Box key={index}>
                <Image
                  src={image}
                  alt={image}
                  width={1200}
                  height={600}
                  style={{ objectFit: "cover" }}
                />
              </Box>
            );
          })}
          <p>test</p>
        </Slider>
      </Box>
    </Container>
  );
};

export default ImageCarousel;
