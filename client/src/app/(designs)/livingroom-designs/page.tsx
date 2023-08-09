import getImagesFiles from "@/app/lib/imageGetters";
import MasonryImages from "../components/masonry-images";

const LivingRoomDesignsPage = () => {
  const folderPath = "livingroom-designs";
  const imagesFileNames = getImagesFiles(folderPath);

  return <MasonryImages imagesFileNames={imagesFileNames} />;
};

export default LivingRoomDesignsPage;
