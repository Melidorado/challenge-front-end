export enum PostType {
  POST = "post",
  TICKETVOLUME = "ticketVolume",
}

export interface Post {
  id: string;
  image: string;
  author: string;
  title: string;
  description: string;
  tags: string[];
  article: string
}
