"use client";

import Link from "next/link";
import Image from "next/image";

import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import constants from "@/app/lib/contants";

const TopHeader = () => {
  const theme = useTheme();

  const iconColor = "#696765";

  const primaryColor = theme.palette.primary.main;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: "24px",
        backgroundColor: primaryColor,
      }}
    >
      <Stack direction="row" spacing={1}>
        <IconButton sx={{ paddingLeft: 0 }}>
          <Link href={constants?.FB_ACCOUNT} style={{ color: iconColor }}>
            <FacebookIcon />
          </Link>
        </IconButton>
        <IconButton>
          <Link href={constants?.FB_PAGE} style={{ color: iconColor }}>
            <FacebookIcon />
          </Link>
        </IconButton>
        <IconButton>
          <Link href={constants?.IG_ACCOUNT} style={{ color: iconColor }}>
            <InstagramIcon />
          </Link>
        </IconButton>
        <IconButton>
          <Link href={constants?.AIRBNB_ACCOUNT} style={{ color: iconColor }}>
            <Image
              src="/assets/images/airbnb-logo.png"
              alt="Airbnb Logo"
              width={20}
              height={20}
            />
          </Link>
        </IconButton>
      </Stack>
      <a href={`tel:${constants?.CONTACT_NUMBER}`}>
        <IconButton>
          <LocalPhoneIcon sx={{ marginRight: "10px" }} />
          <Typography variant="body1" sx={{ color: "black" }}>
            {constants?.CONTACT_NUMBER}
          </Typography>
        </IconButton>
      </a>
    </Box>
  );
};

export default TopHeader;
