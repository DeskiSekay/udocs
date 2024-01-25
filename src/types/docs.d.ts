export type TDocsSource = "github" | "official" | "blog" | "community" | "contributor" | "author";
export interface IDocsGalleryListItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  source: TDocsSource;
  version: string;
  icon: string;
}
export interface IDocsChapterListItem {
  id: string;
  title: string;
  subs: IDocsChapterListItem[];
}
export interface IDocsContentItem {
  id: string;
  content: string;
  type: string;
  meta: unknown;
}
export interface IBaseCommentItem {
  id: string;
  uid: string;
  pid: string;
  rid: string;
  index: number;
  content: string;
}
export interface IDocsCommentItem extends IBaseCommentItem {
  chapterRef: string;
  tags: string[];
  time: number;
}
export interface IDocsContentCommentItem extends IBaseCommentItem {
  contentRef: string;
  tags: string[];
  time: number;
}
