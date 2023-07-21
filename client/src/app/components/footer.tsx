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

// const customFontFamily = ["Times New Roman", "Sans serif"];

// const CustomTypography = styled(Typography)({
//   fontFamily: customFontFamily,
// });

// const CustomTextField = styled(TextField)({
//   fontFamily: customFontFamily,
// });

const CustomGridItem: any = styled(Grid)({
  display: "flex",
  alignItems: "start",
  justifyContent: "center",
  width: "100%",
  margin: "auto 0",
});

const StyledTextareaAutosize = styled(TextareaAutosize)({
  padding: "10px 5px",
  backgroundColor: "#E4E1DD",
  width: "100%",
  border: "solid 1px black",
  borderRadius: "7px",
  marginBottom: "30px",
});

const StyledButton = styled(Button)({
  color: "black",
  "&:hover": {
    backgroundColor: "#334155",
    color: "white",
  },
});

const Footer = () => {
  return (
    <Box
      className={`${
        !useIsMobile ? "h-screen py-28" : "h-full py-20"
      } flex items-center justify-center`}
      sx={{ backgroundColor: "#bdb9b3" }}
    >
      <Container maxWidth="xl">
        <Grid container sx={{ flexGrow: 1, textAlign: "center" }}>
          <CustomGridItem item xs={12} md={4}>
            <Stack gap={1}>
              <Image
                src="/assets/images/site-logo.png"
                alt="site logo"
                width={240}
                height={150}
              />
              <Typography variant="h6" className="text-slate-100">
                J2911 Realty
              </Typography>
              <Typography className="text-slate-100">
                Kulas Light, Apt. 556
              </Typography>
              <Typography className="text-slate-100">Gwenborough</Typography>
              <Typography className="text-slate-100">92998-3874</Typography>
              <a href="mailto:test@j2911realty.com">
                <Typography
                  className="text-blue-800 italic"
                  sx={{
                    textDecoration: "none",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                >
                  test@j2911realty.com
                </Typography>
              </a>
              <Stack direction="row" justifyContent="center">
                <IconButton>
                  <FacebookIcon />
                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </Stack>
            </Stack>
          </CustomGridItem>
          <CustomGridItem item xs={12} md={4}>
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
                <Typography className="text-slate-100">Home</Typography>
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
                <Typography className="text-slate-100">About Us</Typography>
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
                <Typography className="text-slate-100">Pricing</Typography>
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
                <Typography className="text-slate-100">Contact Us</Typography>
              </Button>
            </Stack>
          </CustomGridItem>
          <CustomGridItem item xs={12} md={4}>
            <Stack direction="column" sx={{ width: "100%" }}>
              <Typography
                sx={{ marginBottom: "30px" }}
                align="left"
                className="text-slate-100"
              >
                Send us a message.
              </Typography>
              <Stack gap={2}>
                <TextField
                  sx={{
                    backgroundColor: "white",
                    color: "white"
                  }}
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
                  sx={{
                    backgroundColor: "white"
                  }}
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
          </CustomGridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
