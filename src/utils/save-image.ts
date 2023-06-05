import { Jimp } from '@jimp/core';
import { config } from '../config';
import * as fs from 'fs';
import { join } from 'path';

/**
 * Save the image buffer to a file.
 * @param {Jimp} imgBuffer - The image buffer to save.
 */
export const saveImage = (imgBuffer: Jimp) => {
  const { outputFolder } = config;
  imgBuffer.getBuffer('image/jpeg', async (err, buffer) => {
    if (err) {
      console.log(err);
      return;
    }
    const savePath = join(process.cwd(), outputFolder, `merged-image.jpg`);
    try {
      await fs.promises.writeFile(savePath, buffer, 'binary');
    } catch (error) {
      console.log(`Error while saving the file ${error}`);
    }
  });
};
