"use client";
import React from "react";
import Link from "next/link";
import LogOut from "./LogOut";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navbar = ({ user }) => {
  return (
    <NavigationMenu className="flex justify-start py-2 px-4">
      <NavigationMenuList className="flex gap-4">
        <NavigationMenuItem>
          <Link href="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <h1 className="font-bold">SFHacks24</h1>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {user != null && (
          <>
            <NavigationMenuItem>
              <Link href="/profile">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Your profile
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/create">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Create new post
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        )}
        {user == null ? (
          <NavigationMenuItem>
            <Link href="/login">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Log in
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ) : (
          <NavigationMenuItem>
            <Link href="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <LogOut />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default navbar;
