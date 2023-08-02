"use client";

import { Box, ImageList, ImageListItem } from "@mui/material";

const MasonryImages = ({ images }: { images: any }) => {
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images?.map((item: string, index: number) => (
          <ImageListItem key={index}>
            <img src={item} alt={item} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default MasonryImages;
