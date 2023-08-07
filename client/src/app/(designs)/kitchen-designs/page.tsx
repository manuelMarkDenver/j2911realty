import getImagesFiles from "@/app/lib/imageGetters";
import MasonryImages from '../components/masonry-images';

const KitchenDesignsPage = () => {
  const folderPath = "kitchen-designs";

  const imagesFileNames = getImagesFiles(folderPath);
  return (
    <MasonryImages imagesFileNames={imagesFileNames} folderPath={folderPath} />
  );
};

export default KitchenDesignsPage;
