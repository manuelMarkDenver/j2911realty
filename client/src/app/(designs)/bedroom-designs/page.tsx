import getImagesFiles from "@/app/lib/imageGetters";
import MasonryImages from "../components/masonry-images";

const BedroomDesignsPage = () => {
  const folderPath = "bedroom-designs";
  const imagesFileNames = getImagesFiles(folderPath);
  
  return (
    <MasonryImages imagesFileNames={imagesFileNames} folderPath={folderPath} />
  );
};

export default BedroomDesignsPage;
