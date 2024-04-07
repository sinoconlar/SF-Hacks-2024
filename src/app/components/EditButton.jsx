import { updatePost } from "../../lib/actions";
import React from "react";

const EditButton = ({
  postID,
  title,
  description,
  location,
  author,
  isEditing,
  setIsEditing,
}) => {
  const handleClick = async (e) => {
    if (isEditing) {
      setIsEditing(false);
      await updatePost(postID, author, title, location, description);
    } else {
      setIsEditing(true);
    }
  };

  return <button onClick={handleClick}>Edit post</button>;
};

export default EditButton;
