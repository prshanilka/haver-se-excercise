import { config } from './config';
import { generateRequest, mergeImages, saveImage } from './utils';

/**
 * Fetches images, merges them, and saves the merged image.
 */
const run = async () => {
  try {
    const { imageTextList, width, height, color, size } = config;
    const fetchRequests = imageTextList.map((imageText) =>
      generateRequest({ width, height, color, size, imageText }),
    );
    const res = await Promise.all(fetchRequests);
    const mergedImgBuffer = await mergeImages(
      res.map((buff) => Buffer.from(buff.data, 'binary')),
    );
    saveImage(mergedImgBuffer);
  } catch (error) {
    console.log(`process failed with error ${error}`);
  }
};
run();
