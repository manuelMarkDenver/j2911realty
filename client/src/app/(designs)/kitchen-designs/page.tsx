import getImagesFiles from "@/app/lib/imageGetters";
import MasonryImages from "../components/masonry-images";
import { Typography } from "@mui/material";

const KitchenDesignsPage = () => {
  const folderPath = "kitchen-designs";

  const imagesFileNames = getImagesFiles(folderPath);
  return (
    <>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginY: "50px" }}
        className="font-great-vibes"
      >
        Kitchen Designs
      </Typography>
      <MasonryImages imagesFileNames={imagesFileNames} />
    </>
  );
};

export default KitchenDesignsPage;
