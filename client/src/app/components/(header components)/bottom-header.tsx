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
import { Url } from "url"; // Import the Url type from the appropriate module

type PageProps = {
  text: string;
  path?: Url | string | null;
};

const pages: PageProps[] = [
  { text: "Home", path: "/" },
  { text: "About Us", path: "/" },
  { text: "Projects", path: null },
  { text: "Contact Us", path: "/" },
];

function BottomHeader() {
  const theme = useTheme();

  const secondaryColor = theme.palette.secondary.main;

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // Design Menu:

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleDesignMenuClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleDesignMenuClose = () => {
    setAnchorEl(null);
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
                width={120}
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
              {pages.map((page, index) =>
                page.text === "Projects" ? (
                  <MenuItem key={index} onClick={handleDesignMenuClick}>
                    <Typography
                      textAlign="center"
                      sx={{ color: "black", fontSize: "1.3rem" }}
                    >
                      {page?.text}
                    </Typography>
                  </MenuItem>
                ) : (
                  // For other pages, render a simple <p>test</p> element.
                  <MenuItem key={index} onClick={handleCloseNavMenu}>
                    <Link
                      href={page?.path ? page?.path : ""}
                      className="no-underline text-black"
                    >
                      <Typography
                        textAlign="center"
                        sx={{ color: "black", fontSize: "1.3rem" }}
                      >
                        {page?.text}
                      </Typography>
                    </Link>
                  </MenuItem>
                )
              )}
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
            {pages.map((page, index) =>
              page.text === "Projects" ? (
                <MenuItem key={index} onClick={handleDesignMenuClick}>
                  <Typography
                    textAlign="center"
                    sx={{ color: "black", fontSize: "1.3rem" }}
                  >
                    {page?.text}
                  </Typography>
                </MenuItem>
              ) : (
                // For other pages, render a simple <p>test</p> element.
                <MenuItem key={index} onClick={handleCloseNavMenu}>
                  <Link
                    href={page?.path ? page?.path : ""}
                    className="no-underline text-black"
                  >
                    <Typography
                      textAlign="center"
                      sx={{ color: "black", fontSize: "1.3rem" }}
                    >
                      {page?.text}
                    </Typography>
                  </Link>
                </MenuItem>
              )
            )}
          </Box>
          <Menu 
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleDesignMenuClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleDesignMenuClose} sx={{ fontSize: "1.3rem" }}>
              <Link
                href="/kitchen-designs"
                className="no-underline text-black"
              >
                Kitchen Designs
              </Link>
            </MenuItem>
            <MenuItem onClick={handleDesignMenuClose} sx={{ fontSize: "1.3rem" }}>
              <Link
                href="/livingroom-designs"
                className="no-underline text-black"
              >
                Living Room Designs
              </Link>
            </MenuItem>
            <MenuItem onClick={handleDesignMenuClose} sx={{ fontSize: "1.3rem" }}>
              <Link
                href="/bedroom-designs"
                className="no-underline text-black"
              >
                Bedroom Designs
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default BottomHeader;
