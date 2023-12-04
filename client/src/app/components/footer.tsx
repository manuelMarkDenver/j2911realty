"use client";

import Image from "next/image";

import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useIsMobile } from "../lib/helpers";
import constants from "../lib/contants";
import Link from "next/link";

const CustomGridItem: any = styled(Grid)({
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  width: "100%",
});

const StyledTextareaAutosize = styled(TextareaAutosize)({
  padding: "10px 5px",
  backgroundColor: "white",
  width: "100%",
  border: "solid 1px black",
  borderRadius: "7px",
  marginBottom: "30px",
});

const StyledButton = styled(Button)({
  color: "black",
  "&:hover": {
    backgroundColor: "#F8F9F4",
    color: "black",
  },
});

const Footer = () => {
  const iconColor = "#a4727e";

  return (
    <Box
      id="contact"
      className={`${
        !useIsMobile ? "h-screen py-28" : "h-full py-20"
      } flex items-center justify-center`}
      sx={{ backgroundColor: "EF9A9A", color: "black" }}
    >
      <Container maxWidth="xl">
        <Grid container sx={{ flexGrow: 1, textAlign: "center" }}>
          <CustomGridItem item xs={12} md={6}>
            <Stack gap={1}>
              <Image
                src="/assets/images/site-logo.png"
                alt="site logo"
                width={600}
                height={120}
              />
              <Typography className="text-slate-700" sx={{ fontSize: "1.5rem" }}>
                {constants?.CONTACT_NUMBER}
              </Typography>
              <a
                href="mailto:test@j2911realty.com"
                style={{ textDecoration: "none", }}
              >
                <Typography
                  className="text-slate-700 italic"
                  sx={{
                    textDecoration: "none",
                    fontSize: "1.5rem",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  {constants?.EMAIL}
                </Typography>
              </a>
              <Stack direction="row" spacing={1} justifyContent="center">
                <IconButton sx={{ paddingLeft: 0 }}>
                  <Link
                    href={constants?.FB_ACCOUNT}
                    style={{ color: iconColor }}
                  >
                    <FacebookIcon />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link href={constants?.FB_PAGE} style={{ color: iconColor }}>
                    <FacebookIcon />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link
                    href={constants?.IG_ACCOUNT}
                    style={{ color: iconColor }}
                  >
                    <InstagramIcon />
                  </Link>
                </IconButton>
                <IconButton>
                  <Link
                    href={constants?.AIRBNB_ACCOUNT}
                    style={{ color: iconColor }}
                  >
                    <Image
                      src="/assets/images/airbnb-logo-dark.png"
                      alt="Airbnb Logo"
                      width={20}
                      height={20}
                    />
                  </Link>
                </IconButton>
              </Stack>
            </Stack>
          </CustomGridItem>
          <CustomGridItem item xs={12} md={6}>
            <Stack gap={2}>
              <Button
                variant="text"
                className="text-slate-700"
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    opacity: "0.8",
                  },
                }}
              >
                <Typography className="text-slate-700">Home</Typography>
              </Button>
              <Button
                variant="text"
                className="text-slate-700"
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    opacity: "0.8",
                  },
                }}
              >
                <Typography className="text-slate-700">About Us</Typography>
              </Button>
              <Button
                variant="text"
                className="text-slate-700"
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    opacity: "0.8",
                  },
                }}
              >
                <Typography className="text-slate-700">Projects</Typography>
              </Button>
              <Button
                variant="text"
                className="text-slate-700"
                sx={{
                  "&:hover": {
                    backgroundColor: "transparent",
                    opacity: "0.8",
                  },
                }}
              >
                <a href="#contact">
                  <Typography className="text-slate-700">Contact Us</Typography>
                </a>
              </Button>
            </Stack>
          </CustomGridItem>
          {/* <CustomGridItem item xs={12} md={4}>
            <Stack direction="column" sx={{ width: "100%" }}>
              <Typography
                sx={{ marginBottom: "30px" }}
                align="left"
                className="text-slate-700"
                variant="h6"
              >
                Feel free to send us a message @ blhernandez0923@gmail.com
              </Typography>
              <Stack gap={2}>
                <TextField
                  color="info"
                  sx={{ background: "white" }}
                  id="input-with-icon-textfield"
                  label="Name"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  variant="filled"
                />
                <TextField
                  color="info"
                  sx={{ background: "white" }}
                  id="input-with-icon-textfield"
                  label="Email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  variant="filled"
                />
                <StyledTextareaAutosize minRows={5} placeholder="Message" />
              </Stack>
              <StyledButton variant="contained" startIcon={<SendIcon />}>
                <Typography>Send</Typography>
              </StyledButton>
            </Stack>
          </CustomGridItem> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
