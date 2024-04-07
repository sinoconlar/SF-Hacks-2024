import { updatePost } from "../../lib/actions";
import { Button } from "@/components/ui/button";
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

  return (
    <Button onClick={handleClick}>
      {isEditing ? "Save edits" : "Edit post"}
    </Button>
  );
};

export default EditButton;
