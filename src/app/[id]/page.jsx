import React from "react";
import PostComponent from "../components/PostComponent";
import { readSinglePost } from "../../lib/actions";

const page = async ({ params }) => {
  const fetchedData = await readSinglePost(params.id);
  const pageData = { ...fetchedData[0], username: fetchedData.username };
  return (
    <PostComponent
      id={pageData.id}
      title={pageData.title}
      username={pageData.username}
      location={pageData.location}
      description={pageData.description}
      author={pageData.author}
    ></PostComponent>
  );
};

export default page;
