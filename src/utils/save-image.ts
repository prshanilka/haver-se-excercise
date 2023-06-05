import { config } from '../config';
import * as fs from 'fs';
import { join } from 'path';
import { Jimp } from '@jimp/core';

/**
 * Save the image buffer to a file.
 * @param {Jimp} imgBuffer - The image buffer to save.
 */
export const saveImage = (imgBuffer: Jimp) => {
  const { outputFolder } = config;
  imgBuffer.getBuffer(
    'image/jpeg',
    async (error: Error | null, buffer: Buffer) => {
      if (error) {
        console.log(`Error generating image ${error}`);
        return;
      }
      const savePath = join(
        process.cwd(),
        outputFolder,
        `merged-image-${new Date().getTime()}.jpg`,
      );
      try {
        await fs.promises.writeFile(savePath, buffer, 'binary');
        console.log(`Image save successfully: ${savePath}`);
      } catch (error) {
        console.log(`Error while saving the file ${error}`);
      }
    },
  );
};
