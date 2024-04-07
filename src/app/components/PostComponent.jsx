"use client";
import React from "react";
import NavigatePageButton from "../components/NavigatePageButton";
import EditButton from "../components/EditButton";
import { deletePost } from "../../lib/actions";
import { useState } from "react";

const PostComponent = ({
  id,
  title,
  username,
  location,
  description,
  author,
  showFullPage = true,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [postTitle, setPostTitle] = useState(title);
  const [postLocation, setPostLocation] = useState(location);
  const [postDescription, setPostDescription] = useState(description);

  const deleteFunc = deletePost.bind(null, id);
  return showFullPage ? (
    <div className="flex flex-col p-4 gap-3 text-white">
      <input
        type="text"
        name="title"
        id="title"
        className="text-lg font-bold bg-transparent border-cbe"
        value={postTitle}
        onChange={(e) => {
          setPostTitle(e.currentTarget.value);
        }}
        readOnly={!isEditing}
      />
      <p className="text-sm italic">{username}</p>
      <input
        type="text"
        name="location"
        id="location"
        className="text-lg font-bold bg-transparent border-cbe"
        value={postLocation}
        onChange={(e) => {
          setPostLocation(e.currentTarget.value);
        }}
        readOnly={!isEditing}
      />
      <input
        type="text"
        name="postDescription"
        id="postDescription"
        className="text-lg font-bold bg-transparent border-cbe"
        value={postDescription}
        onChange={(e) => {
          setPostDescription(e.currentTarget.value);
        }}
        readOnly={!isEditing}
      />
      <form action={deleteFunc}>
        <button>delete</button>
      </form>
      <EditButton
        postID={id}
        title={postTitle}
        description={postDescription}
        location={postLocation}
        author={author}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
      ></EditButton>
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
