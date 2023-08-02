import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client";

const getImageUrl = (key: string) =>
  `https://${process.env.DO_SPACES_BUCKET_NAME}.sgp1.digitaloceanspaces.com/${key}`;

const gettingImagesUrls = (imagesData: any) => {
  const imageUrls = imagesData?.Contents?.map((imageData: any) => {
    return getImageUrl(imageData.Key);
  });
  return imageUrls;
};

const bucketParams = {
  Bucket: process.env.DO_SPACES_BUCKET_NAME,
  Delimiter: "/",
};

const getFoldersromDOSpaces = async (slug?: string | any) => {
  try {
    const data = await s3Client.send(new ListObjectsV2Command(bucketParams));
   
    return data?.CommonPrefixes; // For unit tests.
  } catch (error) {
    console.log(error);
  }
};

export { getFoldersromDOSpaces };
