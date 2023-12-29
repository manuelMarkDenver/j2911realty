"use client";

import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, Stack, Typography } from "@mui/material";
import { useBreakpoints } from "@/app/lib/helpers";

type WovenImageListProps = {
  itemData: any;
};

export default function WovenImageList(props: WovenImageListProps) {
  const { itemData } = props;

  const { sm, md, mdDown } = useBreakpoints();

  const updatedArray = [
    ...itemData.slice(0, 1),
    "Our Projects",
    ...itemData.slice(1),
  ];

  const updatedArrayForMobile = [
    ...itemData.slice(0, 0),
    "Our Projects",
    ...itemData.slice(0),
  ];

  return (
    <ImageList variant="quilted" cols={md ? 3 : 1} rowHeight={500}>
      {md
        ? updatedArray.map((item: any, index: number) =>
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
                <Stack sx={{ px: { md: 5 } }}>
                  <Typography variant="h6">
                    We thrive in taking homes and accenting their natural beauty
                    while bringing together modern design and timeless beauty.
                    We are designing homes that hold your personality and embark
                    each project with new eyes. We are committed to giving you
                    an elevated experience while adhering to your budget
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
          )
        : updatedArrayForMobile.map((item: any, index: number) =>
            index === 0 ? (
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
                <Stack sx={{ px: 5, py: { mdDown: 10 } }}>
                  <Typography variant="h6">
                    We thrive in taking homes and accenting their natural beauty
                    while bringing together modern design and timeless beauty.
                    We are designing homes that hold your personality and embark
                    each project with new eyes. We are committed to giving you
                    an elevated experience while adhering to your budget
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
