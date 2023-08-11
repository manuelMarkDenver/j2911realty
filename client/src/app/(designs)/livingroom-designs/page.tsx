import getImagesFiles from "@/app/lib/imageGetters";
import MasonryImages from "../components/masonry-images";
import { Typography } from '@mui/material';

const LivingRoomDesignsPage = () => {
  const folderPath = "livingroom-designs";
  const imagesFileNames = getImagesFiles(folderPath);

  return (
    <>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginY: "50px" }}
        className="font-great-vibes"
      >
        Living Room Designs
      </Typography>
      <MasonryImages imagesFileNames={imagesFileNames} />
    </>
  );
};

export default LivingRoomDesignsPage;
