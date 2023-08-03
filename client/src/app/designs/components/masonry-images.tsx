"use client";

import { Box, ImageList, ImageListItem } from "@mui/material";

const MasonryImages = ({
  imagesFileNames,
  folderPath,
}: {
  imagesFileNames: any;
  folderPath: string;
}) => {
  console.log("🚀 ~ file: masonry-images.tsx:12 ~ folderPath:", folderPath)
  console.log("🚀 ~ file: masonry-images.tsx:12 ~ imagesFileNames:", imagesFileNames)
  return (
    <Box sx={{ overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {imagesFileNames?.map((imageFilename: string, index: number) => (
          <ImageListItem key={index}>
            <img
              src={`/assets/images/designs/${folderPath}/${imageFilename}`}
              alt={imageFilename}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default MasonryImages;
