"use client";
import { useRouter } from "next/navigation";
import React from "react";

const NavigatePageButton = ({ id }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(`/${id}`);
      }}
    >
      See full post
    </button>
  );
};

export default NavigatePageButton;
