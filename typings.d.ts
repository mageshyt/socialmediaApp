export type postUser = {
  id: string;
  username: string;
  profileImage: string;
};

export type post = {
  id: string;
  author: postUser;
  timestamp: string;
  postImage: string[];
  caption: string;
  likes: number;
  comments: number;
  shares: number;
};
