import { getImagesFromDOSpaces } from "../../lib/s3/getImagesFromDOSpaces";
import { Metadata } from "next";
import MasonryImages from "./components/masonry-images";

export const metadata: Metadata = {
  title: "J2911 - Kitchen Designs",
  description: "J2911 - Kitchen Designs",
};

const DesignsPage = async () => {
  const images = await getImagesFromDOSpaces();

  if (images?.length === 0) return <p>No images yet.</p>;
  if (images === null) return <p>Loading images...</p>;

  return <>{images && <MasonryImages images={images} />}</>;
};

export default DesignsPage;
