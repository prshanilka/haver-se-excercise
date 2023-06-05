import * as dotenv from 'dotenv';
import { IConfig } from 'types';
dotenv.config();

export const config: IConfig = {
  baseUrl: process.env.BASE_URL || 'https://cataas.com/cat/says',
  imageTextList: process.env.IMAGE_TEXT_LIST?.split(',') || ['Hello', 'You'],
  width: process.env.WIDTH ? parseInt(process.env.WIDTH) : 400,
  height: process.env.HEIGHT ? parseInt(process.env.HEIGHT) : 500,
  color: process.env.COLOR || 'Pink',
  size: process.env.SIZE ? parseInt(process.env.SIZE) : 100,
  outputFolder: process.env.OUTPUT || 'output',
};

// Validation and Sanitization

try {
  if (!config.baseUrl.startsWith('https://')) {
    throw new Error('Invalid baseUrl. It must start with "https://"');
  }

  // Ensure imageTextList is an array with at least two elements
  if (!Array.isArray(config.imageTextList) || config.imageTextList.length < 2) {
    throw new Error('Invalid imageTextList. It must have two strings.');
  }

  // Ensure width, height, and size are positive integers
  if (!Number.isInteger(config.width) || config.width <= 0) {
    throw new Error('Invalid width. It must be a positive integer.');
  }
  if (!Number.isInteger(config.height) || config.height <= 0) {
    throw new Error('Invalid height. It must be a positive integer.');
  }
  if (!Number.isInteger(config.size) || config.size <= 0) {
    throw new Error('Invalid size. It must be a positive integer.');
  }

  // Ensure outputFolder is a non-empty string
  if (
    typeof config.outputFolder !== 'string' ||
    config.outputFolder.trim() === ''
  ) {
    throw new Error('Invalid outputFolder. It must be a non-empty string.');
  }
} catch (error) {
  console.log(`Config error (please check your .env file): ${error}`);
}
