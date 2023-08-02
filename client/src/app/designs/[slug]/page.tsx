import { getImagesFromDOSpaces } from "../../lib/s3/getImagesFromDOSpaces";
import { Metadata } from "next";
import MasonryImages from "./components/masonry-images";

export const metadata: Metadata = {
  title: "J2911 - Designs",
  description:
    "J2911 - Kitchen Designs | Bedroom Designs | Living Room Designs",
};

const DesignsPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params
  const images = await getImagesFromDOSpaces(slug);

  if (images?.length === 0) return <p>No images yet.</p>;
  if (images === null) return <p>Loading images...</p>;

  return <>{images && <MasonryImages images={images} />}</>;
  // return <p>{JSON.stringify(images)}</p>;
};

export default DesignsPage;
