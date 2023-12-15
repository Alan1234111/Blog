// User TYPES
export type User = {
  _id: string;
  username: string;
  password: string;
  admin: boolean;
};

// Posts TYPES
export type Post = {
  _id: string;
  title: string;
  text: string;
  author: string;
  comment: Comment[];
  tag: Tag;
  photoUrl: string;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
};

// tags TYPES
export type Tag = {
  _id: string;
  name: string;
};

// comment TYPES
export type Comment = {
  _id: string;
  comment: string;
  user: User;
  postId: string;
  likeCount: number;
  likes: string[];
  createdAt: string;
  updatedAt: string;
};

// Aside Posts
export type PropsAsidePost = {
  _id: string;
  photoUrl: string;
  title: string;
  text: string;
  tag: Tag;
  $bg: boolean;
};
