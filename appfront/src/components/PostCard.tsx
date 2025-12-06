import React from "react";
import type { Post } from "../data/mockPosts";

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-lg font-bold mb-2">{post.title}</h2>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover rounded mb-3"
        />
      )}
      <p className="text-gray-700 mb-2">{post.content}</p>
      <span className="text-xs text-gray-500">Grupa: {post.group}</span>
    </div>
  );
};

export default PostCard;