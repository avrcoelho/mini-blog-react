import React from 'react';

type Post = {
  title: string;
  body: string;
  metadata: {
    publishedAt: number;
  };
  author: {
    id: number;
    name: string;
  };
};

type Prop = {
  data: Post;
};

const Post: React.FC<Prop> = ({ data }) => <div></div>;

export default Post;
