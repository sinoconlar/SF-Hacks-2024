import React from "react";
import NavigatePageButton from "../components/NavigatePageButton";
import { deletePost } from "../../lib/actions";

const PostComponent = ({
  id,
  title,
  username,
  location,
  description,
  showFullPage = true,
}) => {
  const deleteFunc = deletePost.bind(null, id);
  return showFullPage ? (
    <div className="flex flex-col p-4 gap-3 text-white">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm italic">{username}</p>
      <p className="text-sm">{location}</p>
      <p className="text-sm">{description}</p>
      <form action={deleteFunc}>
        <button>delete</button>
      </form>
    </div>
  ) : (
    <div className="flex flex-col p-4 gap-3 text-white">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm italic">{username}</p>
      <p className="text-sm">{location}</p>
      <p className="text-sm">{description}</p>
      <form action={deleteFunc}>
        <button>delete</button>
      </form>
      <NavigatePageButton id={id}></NavigatePageButton>
    </div>
  );
};

export default PostComponent;
