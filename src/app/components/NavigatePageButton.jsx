"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import React from "react";

const NavigatePageButton = ({ id }) => {
  const router = useRouter();

  return (
    <Button
      className="h-9"
      onClick={() => {
        router.push(`/${id}`);
      }}
    >
      View full post
    </Button>
  );
};

export default NavigatePageButton;
