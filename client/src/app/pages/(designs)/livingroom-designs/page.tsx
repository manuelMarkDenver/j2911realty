import getImagesFiles from "@/app/lib/imageGetters";
import MasonryImages from "../components/masonry-images";
import { Typography } from "@mui/material";
import Link from "next/link";

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
      <Link
        href="/#projects"
        as="/#projects"
        passHref
        style={{
          textDecoration: "none",
          fontSize: "1.3rem",
          color: "black",
          marginLeft: "30px",
        }}
      >
        &lt; Back to other designs
      </Link>
      <MasonryImages imagesFileNames={imagesFileNames} />
    </>
  );
};

export default LivingRoomDesignsPage;
