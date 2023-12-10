import { pathTransformer } from './helpers';

const fs = require("fs");
const path = require("path");

const getImagesFiles = (folderpath) => {
  // const folderPath = `../../../public/assets/images/designs/${folderpath}/`; // Replace with the actual folder path

  const folderPath = path.join(
    process.cwd(),
    "public",
    "assets",
    "images",
    `${folderpath}`
  );
  const imageFiles = [];
  fs.readdirSync(folderPath).forEach((file) => {
    const imagePath = path.join(folderPath, file);

    // Check if the file is an image (you can add more extensions as needed)
    if (
      fs.statSync(imagePath).isFile() &&
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    ) {
      imageFiles.push(imagePath);
    }
  });

  const imageFilenames = imageFiles.map((imagePath, index) => {
    // const filename = path.basename(imagePath);
    // return filename;
    const transformedPath = pathTransformer(imagePath);
    return transformedPath;
  });

  return imageFilenames;
};

export default getImagesFiles;
