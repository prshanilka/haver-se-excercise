export interface IGenerateUrl {
  text: string;
  width: number;
  height: number;
  color: string;
  size: number;
}

export interface IRequestGenerator {
  imageText: string;
  width: number;
  height: number;
  color: string;
  size: number;
}
export interface IConfig {
  baseUrl: string;
  imageTextList: string[];
  width: number;
  height: number;
  color: string;
  size: number;
  outputFolder: string;
}
