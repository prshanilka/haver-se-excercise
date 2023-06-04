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
