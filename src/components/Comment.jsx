import React from "react";
import Image from "./Image";

const Comment = () => {
  return (
    <div className="p-4 mb-8 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-4">
        <Image
          src="userImg.jpeg"
          className="object-cover w-10 h-10 rounded-full"
          w="40"
        />
        <span className="font-medium">John Deo</span>
        <span className="text-sm text-gray-500">2 days ago</span>

        <span className="text-xs text-red-300 cursor-pointer hover:text-red-500">
          delete
        </span>
      </div>
      <div className="mt-4">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
      </div>
    </div>
  );
};

export default Comment;
