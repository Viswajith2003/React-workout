import React from "react";
import Cards from "./Cards";

export default function Map() {
  const blogs = [
    { title: "My Blog 1", content: "My blog 1 content" },
    { title: "My Blog 2", content: "My blog 2 content" },
    { title: "My Blog 3", content: "My blog 3 content" },
    { title: "My Blog 4", content: "My blog 4 content" },
    { title: "My Blog 5", content: "My blog 5 content" },
  ];
  return (
    <div>
      <h1>Blogs details</h1>
      {blogs.map((blog) => (
        <Cards title={blog.title} content={blog.content} />
      ))}
    </div>
  );
}
