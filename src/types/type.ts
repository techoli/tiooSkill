export interface button {
  height?: number;
  width?: number;
  text1?: string;
  text2?: string;
  image?: string;
  bg?: string;
  onclick: () => void;
  hover?: boolean;
}
export interface CICDDATA {
  id: number;

  img: string;
  heading: string;
  text: string;
}
export interface COURSESData {
  id: number;
  img: string;
  heading: string;
  text: string;
  link?: string;
}
