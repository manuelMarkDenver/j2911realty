import { notFound } from "next/navigation";
import { getImagesFromDOSpaces } from "../../lib/s3/getImagesFromDOSpaces";
import { Metadata } from "next";
import MasonryImages from "./components/masonry-images";
import { getFoldersromDOSpaces } from "@/app/lib/s3/getFoldersFromDOSpaces";

export const metadata: Metadata = {
  title: "J2911 - Designs",
  description:
    "J2911 - Kitchen Designs | Bedroom Designs | Living Room Designs",
};

export async function generateStaticParams() {
  const bucketFolders = await getFoldersromDOSpaces();

  return (
    bucketFolders?.map((folder: any) => {
      return {
        slug: folder.Prefix,
      };
    }) ?? []
  ); // Return an empty array if bucketFolders is undefined
}

const DesignsPage = async ({
  params,
}: {
  params: { slug: any[] | Promise<any[]> };
}) => {
  const { slug } = params;
  const images = await getImagesFromDOSpaces(slug);
  if (!images || images.length === 0) {
    notFound();
  }

  if (images?.length === 0) return <p>No images yet.</p>;
  if (images === null) return <p>Loading images...</p>;

  return <>{images && <MasonryImages images={images} />}</>;
};

export default DesignsPage;
