"use client";

import { useParams } from "next/navigation";

import { Box, ImageList, ImageListItem } from "@mui/material";

const MasonryImages = ({ images }: { images: any }) => {
  const params = useParams();
  const filteredImages = images?.filter((image: string) =>
    image.includes(`${params?.designs[0]}`)
  );
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {filteredImages?.map((item: string, index: number) => (
          <ImageListItem key={index}>
            <img src={item} alt={item} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default MasonryImages;
