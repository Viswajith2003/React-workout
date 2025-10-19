import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Posts() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>This is Post page</h1>
      <Link to="/">Home</Link>
      <hr />
      <h2>Posts</h2>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            <Link to={`${item.id}/`}>
              {item.id}. {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
