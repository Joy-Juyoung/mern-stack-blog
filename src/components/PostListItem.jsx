import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col gap-8 xl:flex-row">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image
          src="postImg.jpeg"
          className="object-cover rounded-2xl"
          w="735"
        />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 lx:w-2/3">
        <Link to="/posts" className="text-4xl font-semibold ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Written by</span>
          <Link className="text-green-800" to="/posts">
            John Doe
          </Link>
          <span>on</span>
          <Link className="text-green-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, beatae
          magni possimus atque, placeat temporibus eveniet ipsum animi nulla,
          illo earum nam?
        </p>
        <Link to="/posts" className="text-sm text-green-800 underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
