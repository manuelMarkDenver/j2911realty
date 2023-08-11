"use client";

import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "@/app/styling/carousel-styling";

const TestimonialContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "50vh",
  // margin: (theme) => theme.spacing(2),
});

const AvatarImage = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  marginBottom: theme.spacing(1),
}));

const TestimonialText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  marginBottom: theme.spacing(1),
}));

const TestimonialsCarousel = ({ testimonials }: { testimonials: any }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  if (testimonials?.length === 0) return <p>No testimonials yet.</p>;

  if (!testimonials) return <p>Loading testimonials...</p>;

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial: any, index: number) => (
        <div key={index}>
          <TestimonialContainer>
            <AvatarImage
              alt="Testimonial"
              src={`https://i.pravatar.cc/300?img=${index + 1}`}
              sx={{ width: 250, height: 250 }}
            />
            <TestimonialText variant="body1">
              {testimonial.testimonialText}
            </TestimonialText>
            <Rating value={testimonial.rating} readOnly />
          </TestimonialContainer>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialsCarousel;
