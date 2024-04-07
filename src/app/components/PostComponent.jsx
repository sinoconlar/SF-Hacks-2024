"use client";
import React from "react";
import NavigatePageButton from "./NavigatePageButton";
import EditButton from "./EditButton";
import { deletePost } from "../../lib/actions";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

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
    <div className="flex flex-col px-16 md:px-28 lg:px-56 py-16 gap-3 ">
      <textarea
        name="title"
        id="title"
        cols="30"
        rows="2"
        className="text-lg font-bold bg-transparent resize-none"
        value={postTitle}
        onChange={(e) => {
          setPostTitle(e.currentTarget.value);
        }}
        readOnly={!isEditing}
      ></textarea>
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
      <textarea
        name="postDescription"
        id="postDescription"
        cols="30"
        rows="10"
        className="py-6 text-sm bg-transparent"
        value={postDescription}
        onChange={(e) => {
          setPostDescription(e.currentTarget.value);
        }}
        readOnly={!isEditing}
      ></textarea>
      <div className="flex self-end gap-4 md:gap-8 my-9">
        <form action={deleteFunc}>
          <Button variant="destructive">delete</Button>
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
