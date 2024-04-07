"use client";
import React from "react";
import NavigatePageButton from "./NavigatePageButton";
import EditButton from "./EditButton";
import { deletePost } from "../../lib/actions";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <div className="flex flex-col p-4 gap-3 ">
      <input
        type="text"
        name="title"
        id="title"
        className="text-lg font-bold bg-transparent"
        value={postTitle}
        onChange={(e) => {
          setPostTitle(e.currentTarget.value);
        }}
        readOnly={!isEditing}
      />
      <p className="text-md italic">{username}</p>
      <input
        type="text"
        name="location"
        id="location"
        className="text-md bg-transparent"
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
        className="text-md bg-transparent"
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
    <Card
      className="flex flex-col p-4 gap-3 max-w-md md:max-w-lg npx shadcn-ui@latest add navigation-menu rounded-md
    truncate"
    >
      <CardHeader>
        <CardTitle className="text-md font-bold my-2 truncate">
          {title}
        </CardTitle>
        <CardDescription className="text-sm italic truncate">
          {username}
        </CardDescription>
        <CardDescription className="text-sm truncate">
          {location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm truncate">{description}</p>
      </CardContent>
      <NavigatePageButton id={id}></NavigatePageButton>
    </Card>
  );
};

export default PostComponent;
