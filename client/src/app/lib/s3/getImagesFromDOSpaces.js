import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./s3Client";

const getImageUrl = (key) =>
  `https://${process.env.DO_SPACES_BUCKET_NAME}.sgp1.digitaloceanspaces.com/${key}`;

const gettingImagesUrls = (imagesData) => {
  const imageUrls = imagesData?.Contents?.map((imageData) => {
    return getImageUrl(imageData.Key);
  });
  return imageUrls;
};

const bucketParams = { Bucket: process.env.DO_SPACES_BUCKET_NAME };

const getImagesFromDOSpaces = async () => {
  try {
    const data = await s3Client.send(new ListObjectsCommand(bucketParams));
    const fetchedUrlimages = gettingImagesUrls(data);
    const filteredUrls = fetchedUrlimages.filter((url) => url.includes(".webp"));
    return filteredUrls; // For unit tests.
  } catch (error) {
    console.log(error);
  }
};

export { getImagesFromDOSpaces };
