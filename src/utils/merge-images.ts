import mergeImg from 'merge-img';
import { Jimp } from '@jimp/core';
/**
 * Merge multiple image buffers into a single image using the merge-img library.
 * @param {Buffer[]} imageBuffers - An array of image buffers to merge.
 * @returns {Promise<Jimp>} A promise that resolves with the merged image (Jimp instance).
 */
export const mergeImages = async (imageBuffers: Buffer[]): Promise<Jimp> => {
  return await mergeImg(
    imageBuffers.map((buff) => {
      return { src: buff, offsetX: 0, offsetY: 0 };
    }),
  );
};
