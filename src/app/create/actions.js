"use server";

import { createClient } from "../../lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function createPost(title, location, description) {
  const supabase = await createClient();
  const result = await supabase
    .from("posts")
    .insert({ title, location, description })
    .single();
  revalidatePath("/");
  return JSON.stringify(result);
}

export async function readPost() {
  const supabase = await createClient();
  const { data: postData } = await supabase
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });
  const postComponentData = await Promise.all(
    postData.map(async (post) => {
      const { data: userData } = await supabase
        .from("profiles")
        .select("username", "id")
        .eq("id", post.author);
      const username = await userData[0].username;
      return { ...post, username };
    })
  );
  return postComponentData;
}
