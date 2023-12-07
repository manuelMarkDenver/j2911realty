import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useBreakpoints, useIsMobile } from "@/app/lib/helpers";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import constants from "@/app/lib/contants";

const iconColor = "#a4727e";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const drawerWidth = 240;
const navItems = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "About",
    path: "/#about",
  },
  {
    text: "Projects",
    path: "/#projects",
  },
  {
    text: "Book A Consultation",
    path: "#contact",
  },
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { lgDown } = useBreakpoints();

  const isMobile = useIsMobile();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //  ! Mobile view:

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <Image
          src="/assets/images/site-logo.png"
          alt="header site logo"
          width={150}
          height={30}
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ justifyContent: "center" }}>
            <ListItemButton>
              <Link
                href={item.path}
                key={item?.text}
                style={{ textDecoration: "none" }}
              >
                <Button
                  sx={{
                    color: "#a4727e",
                    fontSize: "0.8rem",
                    fontWeight: "300",
                  }}
                >
                  {item?.text}
                </Button>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            component="nav"
            sx={{
              // bgcolor: "#F7D2CC",
              bgcolor: "#fff",
              py: !isMobile ? 5 : 1,
              transition: "background-color 0.3s ease-in-out", // Add transition
            }}
          >
            <Toolbar>
              {/* icon for mobile */}
              <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                  display: { md: "none" },
                  width: "auto",
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Image
                  src="/assets/images/favicon.png"
                  alt="header site logo"
                  width={!isMobile ? 70 : 50}
                  height={!isMobile ? 50 : 40}
                />
              </Stack>

              {/* ! Desktop view */}

              <Stack
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexGrow: 1,
                  alignItems: "center",
                }}
              >
                <Link href="/">
                  <Box
                    sx={{
                      my: 2,
                    }}
                  >
                    <Image
                      src="/assets/images/site-logo.png"
                      alt="header site logo"
                      width={!lgDown ? 450 : 300}
                      height={!lgDown ? 80 : 70}
                    />
                  </Box>
                </Link>
                <Stack direction="row" spacing={1}>
                  <IconButton sx={{ paddingLeft: 0 }}>
                    <Link
                      href={constants?.FB_ACCOUNT}
                      style={{ color: iconColor }}
                    >
                      <FacebookIcon fontSize="medium" />
                    </Link>
                  </IconButton>
                  <IconButton>
                    <Link
                      href={constants?.FB_PAGE}
                      style={{ color: iconColor }}
                    >
                      <FacebookIcon fontSize="medium" />
                    </Link>
                  </IconButton>
                  <IconButton>
                    <Link
                      href={constants?.IG_ACCOUNT}
                      style={{ color: iconColor }}
                    >
                      <InstagramIcon fontSize="medium" />
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
                <Box sx={{ display: { xs: "none", md: "block" } }}>
                  {navItems.map((item) => (
                    <Link
                      href={item.path}
                      key={item?.text}
                      style={{ textDecoration: "none" }}
                    >
                      <Button
                        sx={{
                          color: "#a4727e",
                          fontSize: !lgDown ? "1.5rem" : "1rem",
                          fontWeight: "300",
                          mx: 2,
                        }}
                      >
                        {item?.text}
                      </Button>
                    </Link>
                  ))}
                </Box>
              </Stack>
            </Toolbar>
          </AppBar>

          <nav>
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </nav>
        </Box>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
