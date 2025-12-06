import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { mockPosts, type Post } from "../data/mockPosts";

function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // symulacja pobierania z API
    setTimeout(() => {
      setPosts(mockPosts);
    }, 500);
  }, []);

  return (
    <div className="overflow-y-auto h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Panel Administracyjny</h1>
      {posts.length > 0 ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p>Ładowanie wiadomości...</p>
      )}
    </div>
  );
}

export default Home;