import React from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import LogOut from "./LogOut";
const navbar = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return (
    <div className="flex p-5 gap-5 bg-slate-400">
      <Link href="/">
        <h1>SFHacks24</h1>
      </Link>
      {user != null && (
        <>
          <Link href={`/user/${user.id}`}>Your profile</Link>
          <Link href={`/create`}>Create new post</Link>
        </>
      )}
      {user == null ? <Link href={`/login/`}>Log In</Link> : <LogOut />}
    </div>
  );
};
export default navbar;
