export type IDocsContentNodeHeaderType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export type IDocsContentNodeMediaType = "img" | "video" | "audio";
export type IDocsContentNodeListType = "ul" | "ol" | "li";
export type IDocsContentNodeBlockType = "paragraph" | "text" | "link";
export type IDocsContentNodeType = IDocsContentNodeHeaderType &
  IDocsContentNodeMediaType &
  IDocsContentNodeListType &
  IDocsContentNodeBlockType &
  IDocsContentNodeHeaderType;
export interface IDocsContentNode {
  type: string;
  text?: string;
  attr?: IDocsContentAttr;
  subs?: IDocsContentNode[];
}
export interface IDocsContentAttr {
  href?: string;
}
