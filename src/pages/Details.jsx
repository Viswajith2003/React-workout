import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
  const [post, setPost] = useState([]);
  const { id } = useParams();
  // console.log(id);
  const fetchPosts = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();
    console.log(data);
    setPost(data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  if (!post) {
    return <div>Loading..</div>;
  }

  return (
    <div>
      <h1>This is Post Details page</h1>
      <Link to="/posts">Go back Posts</Link>
      <h5>
        {post.id}. {post.body}
      </h5>
    </div>
  );
}
