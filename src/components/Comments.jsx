import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-8 mb-12 lg:w-3/5">
      <h1 className="text-xl text-gray-500 underline">Comments</h1>
      <form className="flex items-center justify-between w-full gap-8">
        <textarea
          name="desc"
          placeholder="Write a comment..."
          className="w-full p-4 rounded-xl"
        />
        <button className="px-4 py-3 font-medium text-white bg-green-800 rounded-xl">
          Send
        </button>
      </form>

      <Comment />
    </div>
  );
};

export default Comments;
