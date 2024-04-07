import React from "react";
import { createClient } from "../../lib/supabase/server";
import { redirect } from "next/navigation";
import PostComponent from "../components/PostComponent";
import { Separator } from "@/components/ui/separator";
import { getPostsFromUser } from "../../lib/actions";

const profile = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect(`/login`);
  }

  console.log();
  const postsFromUser = await getPostsFromUser(user.id);

  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-bold py-6 self-center">
        {user.user_metadata.username}'s profile
      </h2>
      <div className="flex flex-col px-20 gap-8">
        <div className="flex flex-col">
          <h2>Your posts</h2>
          <Separator className="bg-slate-400 h-[1px] my-2" />
        </div>
        <div className="flex flex-col gap-4 items-center">
          {postsFromUser?.map((post, index) => {
            return (
              <PostComponent
                key={index}
                id={post.id}
                title={post.title}
                username={user.user_metadata.username}
                location={post.location}
                description={post.description}
                author={post.author}
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
