import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>This is Home page</h1>
      <hr />
      <Link to="posts">Posts</Link>
    </div>
  );
}
