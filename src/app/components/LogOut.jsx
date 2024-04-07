import { logOut } from "@/src/lib/actions";
import React from "react";

const LogOut = () => {
  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <form action={handleLogOut}>
      <button>Log out</button>
    </form>
  );
};

export default LogOut;
