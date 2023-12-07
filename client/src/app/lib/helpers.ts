import { useMediaQuery, useTheme } from "@mui/material";

const useIsMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("md"));
  return !isMobile;
};

const useBreakpoints = () => {
  const theme = useTheme();

  const xs = useMediaQuery(theme.breakpoints.up("xs"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const xl = useMediaQuery(theme.breakpoints.up("xl"));

  const rangeXsSm = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const rangeSmMd = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const xsDown = useMediaQuery(theme.breakpoints.down("xs"));
  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));
  const lgDown = useMediaQuery(theme.breakpoints.down("lg"));
  const xlDown = useMediaQuery(theme.breakpoints.down("xl"));

  return {
    xs,
    sm,
    md,
    lg,
    xl,
    xsDown,
    smDown,
    mdDown,
    lgDown,
    xlDown,
    rangeXsSm,
    rangeSmMd,
  };
};

const pathTransformer = (path: string) => {
  const regex = /\/public(.+)/; // Match '/assets' followed by any characters
  const match = path.match(regex);
  if (match) {
    const relativePath = match[1]; // The extracted relative path
    return relativePath;
  } else {
    console.log("No match found.");
  }
};

export { useIsMobile, pathTransformer, useBreakpoints };
