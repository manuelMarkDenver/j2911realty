"use client";

import Link from "next/link";
import Image from "next/image";

import { Box, IconButton, Stack, Typography, styled } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import constants from "@/app/lib/contants";

const TopHeader = () => {
  const iconColor = "white";

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingX: "24px",
        paddingY: "10px",
        backgroundColor: "#db2777",
      }}
    >
      <Stack direction="row" spacing={1}>
        <IconButton sx={{ paddingLeft: 0 }}>
          <Link href={constants?.FB_ACCOUNT} style={{ color: iconColor }}>
            <FacebookIcon fontSize="large" />
          </Link>
        </IconButton>
        <IconButton>
          <Link href={constants?.FB_PAGE} style={{ color: iconColor }}>
            <FacebookIcon fontSize="large" />
          </Link>
        </IconButton>
        <IconButton>
          <Link href={constants?.IG_ACCOUNT} style={{ color: iconColor }}>
            <InstagramIcon fontSize="large" />
          </Link>
        </IconButton>
        <IconButton>
          <Link href={constants?.AIRBNB_ACCOUNT} style={{ color: iconColor }}>
            <Image
              src="/assets/images/airbnb-logo.png"
              alt="Airbnb Logo"
              width={30}
              height={30}
            />
          </Link>
        </IconButton>
      </Stack>
      <a href={`tel:${constants?.CONTACT_NUMBER}`}>
        <IconButton>
          <LocalPhoneIcon
            sx={{
              marginRight: "10px",
              color: "white",
            }}
          />
          <Typography variant="h6" sx={{ color: "white" }}>
            {constants?.CONTACT_NUMBER}
          </Typography>
        </IconButton>
      </a>
    </Box>
  );
};

export default TopHeader;
