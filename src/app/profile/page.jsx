import React from "react";
import { createClient } from "../../lib/supabase/server";
import { redirect } from "next/navigation";
import PostComponent from "../components/PostComponent";
import { getPostsFromUser } from "../../lib/actions";

const profile = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login`);
  }

  const postsFromUser = await getPostsFromUser(user.id);

  return (
    <div>
      <h2>{user.user_metadata.username}'s profile</h2>
      <div>
        <h2>Your posts</h2>
        <div className="flex flex-col gap-4 items-center">
          {postsFromUser?.map((post, index) => {
            return (
              <PostComponent
                key={index}
                id={post.id}
                title={post.title}
                username={post.username}
                location={post.location}
                description={post.description}
                showFullPage={false}
              ></PostComponent>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default profile;
