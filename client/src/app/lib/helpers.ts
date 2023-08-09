import { useMediaQuery, useTheme } from '@mui/material';

const useIsMobile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile;
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

export { useIsMobile, pathTransformer };