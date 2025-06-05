"use client";

import { useSidebar } from "@/context/SideBarContext";
import React from "react";

const DisplayCard = ({ title, stat }) => {
  const { isSideBarCollapsed } = useSidebar();
  return (
    <div
      className={`bg-background rounded-lg ${
        isSideBarCollapsed
          ? "min-w-[12rem] w-24 md:w-84"
          : "min-w-[12rem] w-12 md:min-w-[14rem] md:w-24 lg:min-w-xs lg:w-48"
      } px-4 py-6`}
    >
      <h2 className="text-gray-400 font-semibold">{title}</h2>
      <span className="text-2xl font-bold">{stat}</span>
    </div>
  );
};

export default DisplayCard;
