import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ title, description, author, url, publishedAt}) {
  return (
    <div className="w-[30%] h-80 flex flex-col justify-between items-center rounded-lg p-3 bg-neutral-500">
      <div className="w-full flex justify-between items-center">
        <span className="text-base text-white font-bold">
          <span className="font-light text-base pr-2">Author : </span> {author}
        </span>
        <span className="text-base text-white font-bold">
          {publishedAt}
        </span>
      </div>
      <h1 className="text-3xl font-black text-white">{title}</h1>
      <p className="font-light text-white text-sm">{description}</p>
      <button className="w-full h-8 rounded-lg bg-white text-neutral-700 font-bold">
        <Link to={url}>Read More...</Link>
      </button>
    </div>
  );
}

export default BlogCard;
