import { Jimp } from '@jimp/core';
import { config } from 'config';
import * as fs from 'fs';
import { join } from 'path';

/**
 * Save the image buffer to a file.
 * @param {Jimp} imgBuffer - The image buffer to save.
 */
export const saveImage = async (imgBuffer: Jimp) => {
  const { outputFolder } = config;
  imgBuffer.getBuffer('image/jpeg', (err, buffer) => {
    if (err) {
      console.log(err);
      return;
    }
    const savePath = join(process.cwd(), outputFolder, `merged-image.jpg`);
    fs.writeFile(savePath, buffer, 'binary', (error) => {
      if (error) {
        console.log('Image save failed with error:' + error.message);
      }
    });
  });
};
