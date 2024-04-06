import React from "react";
import PostComponent from "../components/PostComponent";
import { readSinglePost } from "../../lib/actions";

const page = async ({ params }) => {
  const pageData = (await readSinglePost(params.id))[0];
  return (
    <PostComponent
      id={pageData.id}
      title={pageData.title}
      username={pageData.username}
      location={pageData.location}
      description={pageData.description}
    ></PostComponent>
  );
};

export default page;
