"use client";

import Link from 'next/link';

import { Box, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import { social_media_links } from '@/app/lib/contants';



const TopHeader = () => {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;

  return (
    <Stack direction="row" sx={{ alignItems: "center",  paddingX: "24px", backgroundColor: primaryColor }}>
      <IconButton sx={{ paddingLeft: 0 }}>
        <Link href={social_media_links[0]?.link} style={{ color: "black" }} >
          <FacebookIcon />
        </Link>
      </IconButton>
      <IconButton sx={{ paddingLeft: 0 }}>
        <Link href={social_media_links[1]?.link} style={{ color: "black" }} >
          <FacebookIcon />
        </Link>
      </IconButton>
      <IconButton>
        <Link href={social_media_links[2]?.link} style={{ color: "black" }} >
          <InstagramIcon />
        </Link>
      </IconButton>
      <IconButton href={social_media_links[3]?.link} style={{ color: "black" }} >
        <TwitterIcon />
      </IconButton>
    </Stack>
  );
};

export default TopHeader;
