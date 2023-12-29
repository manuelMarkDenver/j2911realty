import { pathTransformer } from "./helpers";

const fs = require("fs");
const path = require("path");

const getOneImageFilepath = (folderpath, filename) => {
  const folderPath = path.join(
    process.cwd(),
    "public",
    "assets",
    "images",
    "designs",
    `${folderpath}`,
  );
  const imagePath = path.join(folderPath, filename);
  // Check if the file is an image (you can add more extensions as needed)
  if (
    fs.existsSync(imagePath) &&
    fs.statSync(imagePath).isFile() &&
    /\.(jpg|jpeg|png|gif|webp)$/i.test(filename)
  ) {
    const transformedPath = pathTransformer(imagePath);
    return transformedPath;
  }

  // Return null if the file doesn't exist or is not an image
  return null;
};

export default getOneImageFilepath;
