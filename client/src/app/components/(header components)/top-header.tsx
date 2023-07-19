"use client";

import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const TopHeader = () => {
  const theme = useTheme();

  const primaryColor = theme.palette.primary.main;

  return (
    <Box sx={{ paddingX: "24px", backgroundColor: primaryColor }}>
      <IconButton sx={{ paddingLeft: 0 }}>
        <FacebookIcon />
      </IconButton>
      <IconButton>
        <InstagramIcon />
      </IconButton>
      <IconButton>
        <TwitterIcon />
      </IconButton>
    </Box>
  );
};

export default TopHeader;
