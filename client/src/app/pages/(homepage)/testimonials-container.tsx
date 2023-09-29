"use client";

import React from "react";
import Testimonial from "./components/testimonial";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useIsMobile } from "../../lib/helpers";

const TestimonialContainer = () => {
  const testimonials = [
    {
      imageSrc: "/path/to/image1.jpg",
      testimonialText: "I'm really impressed with their service!",
      rating: 5,
    },
    {
      imageSrc: "/path/to/image2.jpg",
      testimonialText: "Their products are top-notch.",
      rating: 4,
    },
    {
      imageSrc: "/path/to/image3.jpg",
      testimonialText: "They exceeded my expectations!",
      rating: 5,
    },
    {
      imageSrc: "/path/to/image4.jpg",
      testimonialText: "A great experience overall.",
      rating: 3,
    },
    {
      imageSrc: "/path/to/image5.jpg",
      testimonialText: "I'm really satisfied with their work.",
      rating: 5,
    },
    {
      imageSrc: "/path/to/image6.jpg",
      testimonialText: "Highly recommended!",
      rating: 5,
    },
  ];

  const theme = useTheme();

  const secondaryColor = theme.palette.secondary.main;

  return (
    <Box sx={{ backgroundColor: secondaryColor }}>
      <Container
        className={`${!useIsMobile ? "h-screen py-28" : "h-full py-20"}`}
      >
        <Typography variant="h3" className="font-great-vibes text-center">
          Testimonials
        </Typography>
        <Testimonial testimonials={testimonials} />
      </Container>
    </Box>
  );
};

export default TestimonialContainer;
