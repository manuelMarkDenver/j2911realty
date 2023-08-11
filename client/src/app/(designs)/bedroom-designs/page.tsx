import getImagesFiles from "@/app/lib/imageGetters";
import MasonryImages from "../components/masonry-images";
import { Typography } from "@mui/material";

const BedroomDesignsPage = () => {
  const folderPath = "bedroom-designs";
  const imagesFileNames = getImagesFiles(folderPath);
  return (
    <>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginY: "50px" }}
        className="font-great-vibes"
      >
        Bedroom Designs
      </Typography>
      <MasonryImages imagesFileNames={imagesFileNames} />
    </>
  );
};

export default BedroomDesignsPage;
