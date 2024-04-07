import React from "react";
import { createPost } from "../../lib/actions";
import { redirect } from "next/navigation";

const PostForm = () => {
  const handleSubmit = async (formData) => {
    "use server";
    const rawFormData = {
      title: formData.get("title"),
      location: formData.get("location"),
      description: formData.get("description"),
    };
    const res = await createPost(
      rawFormData.title,
      rawFormData.location,
      rawFormData.description
    );
    console.log(res);
    redirect("/");
  };

  return (
    <form action={handleSubmit}>
      <div className="flex flex-col px-4 py-2 gap-5">
        <label>
          Blog Title
          <input type="text" name="title" id="title" className="text-black" />
        </label>
        <label>
          Location
          <input
            type="text"
            name="location"
            id="location"
            className="text-black"
          />
        </label>
        <label>
          Tell us about what happened:
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            className="text-black"
          ></textarea>
        </label>
      </div>
      <button>Submit post</button>
    </form>
  );
};

export default PostForm;
