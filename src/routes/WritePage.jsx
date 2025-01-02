import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import "react-quill-new/dist/quill.snow.css";
import ReactQuill from "react-quill-new";

const WritePage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [value, setValue] = useState("");

  if (!isLoaded) {
    return <div className="">Loading...</div>;
  }

  if (isLoaded && !isSignedIn) {
    return <div className="">You should login!</div>;
  }
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="font-light text-cl">Create a New Post</h1>
      <form className="flex flex-col flex-1 gap-6 mb-6">
        <button className="p-2 text-sm text-gray-500 bg-white shadow-md w-max rounded-xl">
          Add a cover image
        </button>
        <input
          className="text-4xl font-semibold bg-transparent outline-none"
          type="text"
          placeholder="My Awesome Story"
          name="title"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="" className="text-sm">
            Choose a category:
          </label>
          <select
            name="category"
            id=""
            className="p-2 bg-white shadow-md rounded-xl"
          >
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="development">Development</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engines</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea
          className="p-4 bg-white shadow-md rounded-xl"
          name="desc"
          placeholder="A Short Description"
        />
        <div className="flex flex-1 ">
          {/* <div className="flex flex-col gap-2 mr-2"></div> */}
          <ReactQuill
            theme="snow"
            className="flex-1 bg-white shadow-md rounded-xl"
            value={value}
            onChange={setValue}
          />
        </div>
        <button
          // disabled={mutation.isPending || (0 < progress && progress < 100)}
          className="p-2 mt-4 font-medium text-white bg-green-800 rounded-xl w-36 disabled:bg-green-400 disabled:cursor-not-allowed"
        >
          {/* {mutation.isPending ? "Loading..." : "Send"} */}
          Send
        </button>
      </form>
    </div>
  );
};

export default WritePage;
