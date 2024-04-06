"use client";

import { login, signup } from "./actions";
import React from "react";

const page = () => {
  return (
    <form className="flex flex-col gap-3 items-center">
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        type="email"
        required
        className="text-black"
      />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        className="text-black"
      />
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        id="username"
        required
        className="text-black"
      />
      <div className="flex gap-4">
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </div>
    </form>
  );
};

export default page;
