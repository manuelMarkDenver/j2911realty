"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Stack, useTheme } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const pages = [
  { text: "Home", path: "/" },
  { text: "About Us", path: "/" },
  { text: "Pricing", path: "/" },
  { text: "Contact Us", path: "/" },
];

function BottomHeader() {
  const theme = useTheme();

  const secondaryColor = theme.palette.secondary.main;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: secondaryColor }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link href="/">
              <Image
                src="/assets/images/site-logo.png"
                alt="header site logo"
                width={150}
                height={100}
                className="my-3"
              />
            </Link>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Image
              src="/assets/images/site-logo.png"
              alt="header site logo"
              width={80}
              height={50}
              className="my-3 md:flex"
            />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link
                    href={page?.path}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Typography textAlign="center" sx={{ color: "black" }}>
                      {page?.text}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
              fontSize: "1.2rem",
            }}
          >
            J2911 Realty
          </Typography> */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages?.map((page, index) => (
              <Link
                key={index}
                href={page?.path}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button
                  key={index}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "black",
                    display: "block",
                    fontSize: "1.1rem",
                  }}
                >
                  {page?.text}
                </Button>
              </Link>
            ))}
          </Box>
          z
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default BottomHeader;
