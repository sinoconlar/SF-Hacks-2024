"use server";

import { createClient } from "./supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getUser() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

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

export async function deletePost(id) {
  const supabase = await createClient();
  await supabase.from("posts").delete().eq("id", id);
  revalidatePath("/");
  redirect("/");
}

export async function updatePost(postID, author, title, location, description) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user || user.id != author) {
    return;
  }

  await supabase
    .from("posts")
    .update({ title, location, description })
    .eq("id", postID);
  revalidatePath("/profile");
}

export async function readSinglePost(id) {
  const supabase = await createClient();
  const { data: postData, error } = await supabase
    .from("posts")
    .select("*")
    .eq("id", id);

  if (error || postData.length == 0) {
    redirect("/error");
  }

  const { data: userData } = await supabase
    .from("profiles")
    .select("username", "id")
    .eq("id", postData[0].author);
  const username = await userData[0].username;
  return { ...postData, userData };
}

export async function getPostsFromUser(id) {
  const supabase = await createClient();
  const { data: userPosts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("author", id)
    .order("created_at", { ascending: false });

  if (error) {
    redirect("/error");
  }

  return userPosts;
}

export async function logOut() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user) await supabase.auth.signOut();
  redirect("/");
}
