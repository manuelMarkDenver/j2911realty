"use client";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";

type WovenImageListProps = {
  itemData: any;
};

export default function WovenImageList(props: WovenImageListProps) {
  const { itemData } = props;

  const updatedArray = [
    ...itemData.slice(0, 1),
    "Our Projects",
    ...itemData.slice(1),
  ];
  console.log("🚀 ~ file: woven-image-list.tsx:21 ~ WovenImageList ~ updatedArray :", updatedArray )

  return (
    <ImageList
      variant="woven"
      cols={2}
      gap={50}
      sx={{ height: "100%", width: "100%", mx: "auto", overflow: "hidden" }}
    >
      {updatedArray.map((item: any, index: number) =>
        index === 1 ? (
          <Box
            key={index}
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Stack>
              <Typography
                key={index}
                variant="h2"
                className="font-great-vibes text-center mb-10 text-pink-600"
              >
                {item}
              </Typography>
              <Typography variant="h6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <br/>
              <Typography variant="h6">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt.
              </Typography>
            </Stack>
          </Box>
        ) : (
          <ImageListItem key={index}>
            <img
              srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
              src={`${item}?w=161&fit=crop&auto=format`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        )
      )}
    </ImageList>
  );
}
