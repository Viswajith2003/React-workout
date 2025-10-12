import React, { useEffect, useState } from "react";
import Cards from "../useContextEg/Cards";

export default function GetPosts() {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <div>
      {posts.map((post) => (
        <Cards title={post.title} content={post.body} />
      ))}
    </div>
  );
}
