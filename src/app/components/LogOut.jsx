import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import React from "react";

const LogOut = () => {
  const logOut = async () => {
    "use server";
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) await supabase.auth.signOut();
    redirect("/");
  };

  return (
    <form action={logOut}>
      <button>Log out</button>
    </form>
  );
};

export default LogOut;
