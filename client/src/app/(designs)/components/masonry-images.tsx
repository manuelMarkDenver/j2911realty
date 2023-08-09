"use client";

import { Box, ImageList, ImageListItem } from "@mui/material";
import { useEffect, useState } from "react";

const MasonryImages = ({ imagesFileNames }: { imagesFileNames: any }) => {
  const [images, setImages] = useState(imagesFileNames);

  useEffect(() => {
    if (imagesFileNames.length > 0) {
      setImages(imagesFileNames);
    }
  }, [imagesFileNames]);

  if (!images) return <p>Loading...</p>;

  if (images?.length === 0) return <p>No files</p>;

  return (
    <Box sx={{ overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {images?.map((imageFilename: string, index: number) => (
          <ImageListItem key={index}>
            <img src={`${imageFilename}`} alt={imageFilename} loading="lazy" />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default MasonryImages;
