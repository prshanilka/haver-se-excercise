import axios, { AxiosResponse } from 'axios';
import { config } from '../config';
import { IRequestGenerator } from 'types';

/**
 * Generate a request to retrieve an image with specified parameters.
 * @param {IRequestGenerator} requestParams - The parameters for generating the request.
 * @returns {Promise<AxiosResponse<ArrayBuffer>>} A promise that resolves with the response containing the image data as an array buffer.
 */
export const generateRequest = ({
  imageText,
  width,
  height,
  color,
  size,
}: IRequestGenerator): Promise<AxiosResponse<ArrayBuffer>> => {
  return axios.get(`${config.baseUrl}\\${imageText}`, {
    responseType: 'arraybuffer',
    params: {
      width,
      height,
      c: color,
      s: size,
    },
  });
};
